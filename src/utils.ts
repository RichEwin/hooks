import { useEffect, useState } from "react"

/**
 * Custom React hook that debounces a value by a specified delay.
 * 
 * Useful for delaying updates (e.g., during user input).
 *
 * @template T - The type of the value to debounce.
 * @param {T} value - The value to debounce.
 * @param {number} [delay=1000] - The debounce delay in milliseconds. Defaults to 1000ms.
 * @returns {T} The debounced value.
 */
export function useDebounce<T>(value: T, delay = 1000) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
    
    }, [value, delay])

    return debouncedValue
  }
