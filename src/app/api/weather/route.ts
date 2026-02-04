import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get('city')

  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 })
  }

  const apiKey = process.env.OPENWEATHER_API_KEY
  console.log('API Key exists:', !!apiKey)
  console.log('API Key length:', apiKey?.length)

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Weather API key not configured' },
      { status: 500 }
    )
  }

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    console.log('Fetching:', apiUrl.replace(apiKey, '***'))
    
    const response = await fetch(apiUrl)

    if (!response.ok) {
      console.log('API Response status:', response.status)
      if (response.status === 404) {
        return NextResponse.json({ error: 'City not found' }, { status: 404 })
      }
      if (response.status === 401) {
        return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching weather data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    )
  }
}