import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
    const isClient = typeof window !== 'undefined'
    const [storedValue, setStoredValue] = useState<T>(initialValue)
    
    useEffect(() => {
        if (isClient) {
            const item = window.localStorage.getItem(key)
            setStoredValue(item ? JSON.parse(item) : initialValue)
        }
    }, [key, isClient, initialValue])

    const setValue = (value: T) => {
        if (isClient) {
            window.localStorage.setItem(key, JSON.stringify(value))
        }
        setStoredValue(value)
    }

    return [storedValue, setValue] as const
}