import { useEffect, useMemo, useState } from "react"

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

  /**
 * Custom React hook that provides pagination logic for an array of data.
 *
 * Useful for dividing large datasets into smaller, navigable pages in UI components.
 *
 * @template T - The type of the items in the data array.
 * @param {T[]} [data=[]] - The array of data to paginate.
 * @param {number} [itemsPerPage=10] - Number of items per page. Defaults to 10.
 * @param {number} [initialPage=1] - The initial page number. Defaults to 1.
 * @returns {{
 *   currentPage: number,
 *   totalPages: number,
 *   paginatedData: T[],
 *   nextPage: () => void,
 *   prevPage: () => void
 * }} An object containing pagination state and controls.
 */
  export function usePagination(data = [], itemsPerPage = 10, initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data.length, itemsPerPage]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  function nextPage() {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }

  function prevPage() {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }


  return {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
  };
}