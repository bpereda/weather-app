import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query || query.length < 2) {
    return NextResponse.json([])
  }

  const apiKey = process.env.OPENWEATHER_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${apiKey}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    // Format the response to include city, state, and country
    const formattedData = data.map((location: any) => ({
      name: location.name,
      state: location.state,
      country: location.country,
      displayName: `${location.name}${location.state ? ', ' + location.state : ''}, ${location.country}`,
      lat: location.lat,
      lon: location.lon
    }))

    return NextResponse.json(formattedData)
  } catch (error) {
    console.error('Error fetching location suggestions:', error)
    return NextResponse.json({ error: 'Failed to fetch suggestions' }, { status: 500 })
  }
}