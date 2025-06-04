// src/hooks/useDebounce.js
import { useState, useEffect } from 'react'

/**
 * useDebounce: Retorna el valor “debounced” después de un delay.
 * @param {any} value – el valor a “dejar pasar”
 * @param {number} delay – milisegundos de espera
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Cada vez que value cambie, reinicializamos el timer
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup: si value cambia antes de delay ms, limpiamos el timer anterior
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}
