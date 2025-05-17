import { UrlGenerator } from './components/UrlGenerator'
import { useDateRange } from './hooks/useDateRange'
import { useLocalStorage } from './hooks/useLocalStorage'
import { QueryForm } from './QueryForm'
import { formatDate } from './utils/dateUtils'

const App = () => {
  const [query, setQuery] = useLocalStorage('query', '')
  const [mode, setMode] = useLocalStorage('mode', '') // '' | 'vid' | 'isch'
  const {
    start,
    end,
    setStart,
    setEnd,
    slideMonth,
    step,
    addMonthsToEnd,
    addYears,
  } = useDateRange(
    formatDate(new Date(new Date().setMonth(new Date().getMonth() - 3))),
    formatDate(new Date())
  )

  return (
    <div className="p-4 max-w-lg mx-auto font-sans bg-light-primary text-dark-primary">
      <h2 className="text-2xl font-bold mb-4 text-dark-secondary">
        SlideSearcher
      </h2>
      <QueryForm
        query={query}
        setQuery={setQuery}
        mode={mode}
        setMode={setMode}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        slideMonth={slideMonth}
        step={step}
        addMonthsToEnd={addMonthsToEnd}
        addYears={addYears}
      />
      <UrlGenerator
        param={{
          query,
          start,
          end,
          mode,
        }}
      />
    </div>
  )
}

export default App
