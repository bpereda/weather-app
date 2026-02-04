'use client'

import { useState } from 'react'
import WeatherCard from '@/components/WeatherCard'
import SearchForm from '@/components/SearchForm'

export default function Home() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch weather data')
      }
      
      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Weather App</h1>
          <p className="text-gray-600">Get current weather for any city</p>
        </div>
        
        <SearchForm onSearch={handleSearch} loading={loading} />
        
        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {weatherData && <WeatherCard data={weatherData} />}
        
        {loading && (
          <div className="mt-6 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading weather data...</p>
          </div>
        )}
      </div>
    </div>
  )
}