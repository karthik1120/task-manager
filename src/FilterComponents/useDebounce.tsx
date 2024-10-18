import { useState, useEffect } from 'react'

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value)

  useEffect(() => {
    const delayFn = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(delayFn)
  }, [value])

  return debouncedValue
}
