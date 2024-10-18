import React, { useState, useEffect } from 'react'

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const delayFn = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(delayFn)
  }, [value])

  return debouncedValue
}
