import React, { FC, useEffect, useState } from 'react'

const RandomFact: FC = () => {
    const [fact, setFact] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchFact = async () => {
            try {
                const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText)
                }
                const data = await response.json()
                setFact(data.text)
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchFact()
    }, [])

    return <div>{loading ? 'Loading...' : fact}</div>
}

export default RandomFact
