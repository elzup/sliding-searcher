import React, { useRef, useEffect, type JSX } from 'react'
import {
  parseISO,
  format,
  differenceInDays,
  addMonths,
  startOfMonth,
  endOfMonth,
  subMonths,
  isValid, // isValid をインポート
} from 'date-fns'

// 定数
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 80
const MONTH_LABEL_Y_POSITION = 10
const RANGE_RECT_Y_POSITION = 20
const RANGE_RECT_HEIGHT = 40
const DATE_TEXT_Y_POSITION = 75
const GRID_LINE_COLOR = '#ccc'
const RANGE_FILL_COLOR = 'rgba(100, 149, 237, 0.4)'
const RANGE_STROKE_COLOR = 'blue'
const TEXT_COLOR = '#333'
const ERROR_TEXT_COLOR = 'red'
const FONT_STYLE = '10px sans-serif'

interface DateRangeBarProps {
  start: string // YYYY-MM-DD
  end: string // YYYY-MM-DD
}

const drawTimeline = (
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  startStr: string,
  endStr: string,
  start: string,
  end: string
) => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  const startDate = parseISO(startStr)
  const endDate = parseISO(endStr)

  // 日付のバリデーション
  if (!isValid(startDate) || !isValid(endDate)) {
    ctx.fillStyle = ERROR_TEXT_COLOR
    ctx.textAlign = 'center'
    ctx.font = '16px sans-serif' // エラーメッセージ用にフォントサイズ調整
    ctx.fillText('無効な日付形式です', canvasWidth / 2, canvasHeight / 2)
    return
  }

  if (startDate > endDate) {
    ctx.fillStyle = ERROR_TEXT_COLOR
    ctx.textAlign = 'center'
    ctx.font = '16px sans-serif' // エラーメッセージ用にフォントサイズ調整
    ctx.fillText(
      '開始日は終了日より前に設定してください',
      canvasWidth / 2,
      canvasHeight / 2
    )
    return
  }

  // 描画範囲の開始日と終了日を計算
  // startDateの1ヶ月前からendDateの1ヶ月後までを表示範囲とする
  const rangeStart = startOfMonth(subMonths(startDate, 1))
  const rangeEnd = endOfMonth(addMonths(endDate, 1))
  const totalDays = differenceInDays(rangeEnd, rangeStart)

  if (totalDays <= 0) {
    ctx.fillStyle = ERROR_TEXT_COLOR
    ctx.textAlign = 'center'
    ctx.font = '16px sans-serif' // エラーメッセージ用にフォントサイズ調整
    ctx.fillText('日付範囲が不正です', canvasWidth / 2, canvasHeight / 2)
    return
  }

  const getX = (date: Date): number => {
    const diffDays = differenceInDays(date, rangeStart)
    return (diffDays / totalDays) * canvasWidth
  }

  // 月のグリッド線とラベルを描画
  let currentMonth = startOfMonth(rangeStart)
  ctx.font = FONT_STYLE
  ctx.fillStyle = TEXT_COLOR
  ctx.textAlign = 'center'

  while (currentMonth <= rangeEnd) {
    const x = getX(currentMonth)
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvasHeight) // グリッド線をCanvasの高さまで引く
    ctx.strokeStyle = GRID_LINE_COLOR
    ctx.stroke()

    // 月のラベルを描画 (位置を調整)
    const month = currentMonth.getMonth() + 1
    const isJanuary = month === 1
    const isEdge =
      currentMonth.getTime() === startOfMonth(parseISO(start)).getTime() ||
      currentMonth.getTime() === startOfMonth(parseISO(end)).getTime()
    const formatString = isJanuary || isEdge ? 'yyyy/MM' : 'MM'
    ctx.fillText(format(currentMonth, formatString), x, MONTH_LABEL_Y_POSITION)

    currentMonth = addMonths(currentMonth, 1)
  }

  // 選択された期間の範囲を矩形で描画
  const x1 = getX(startDate)
  const x2 = getX(endDate)

  ctx.fillStyle = RANGE_FILL_COLOR
  ctx.fillRect(x1, RANGE_RECT_Y_POSITION, x2 - x1, RANGE_RECT_HEIGHT)

  ctx.strokeStyle = RANGE_STROKE_COLOR
  ctx.strokeRect(x1, RANGE_RECT_Y_POSITION, x2 - x1, RANGE_RECT_HEIGHT)

  // 選択された期間の開始日と終了日をテキストで描画
  ctx.fillStyle = TEXT_COLOR
  ctx.fillText(`${startStr} → ${endStr}`, (x1 + x2) / 2, DATE_TEXT_Y_POSITION)
}

export const DateRangeBar = React.memo(
  ({ start, end }: DateRangeBarProps): JSX.Element => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // CanvasのDPI対応 (高解像度ディスプレイでぼやけないように)
      // styleで設定された幅と高さに基づいて内部的な解像度を設定
      const dpr = window.devicePixelRatio || 1
      // canvas要素のCSSピクセルサイズを取得
      const rect = canvas.getBoundingClientRect()
      // 実際の描画バッファのサイズを設定
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      // Canvasの座標系をCSSピクセルにスケーリング
      ctx.scale(dpr, dpr)

      // 描画関数を呼び出し (CSSピクセルでの幅と高さを渡す)
      // canvas.style.width と canvas.style.height は文字列なので数値に変換
      drawTimeline(
        ctx,
        parseFloat(canvas.style.width || '0'),
        parseFloat(canvas.style.height || '0'),
        start,
        end,
        start,
        end
      )
    }, [start, end])

    return (
      <canvas
        ref={canvasRef}
        style={{ width: `${CANVAS_WIDTH}px`, height: `${CANVAS_HEIGHT}px` }}
      />
    )
  }
)

DateRangeBar.displayName = 'DateRangeBar'
