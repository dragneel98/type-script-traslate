import { useEffect, useState } from 'react'

// t para pasar el tipo por parametro
export default function useDebounce<T> (value: T, delay = 500) {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => { clearTimeout(timer) }
  }, [value, delay])

  return debounceValue
}
