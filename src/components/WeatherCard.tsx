interface WeatherData {
  name: string
  sys: {
    country: string
  }
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
  }
  weather: Array<{
    main: string
    description: string
    icon: string
  }>
  wind: {
    speed: number
  }
}

interface WeatherCardProps {
  data: WeatherData
}

const getWeatherIcon = (weatherMain: string) => {
  const icons: Record<string, string> = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Smoke: '🌫️',
    Haze: '🌫️',
    Dust: '🌫️',
    Fog: '🌫️',
    Sand: '🌫️',
    Ash: '🌫️',
    Squall: '💨',
    Tornado: '🌪️',
  }
  
  return icons[weatherMain] || '🌤️'
}

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="mt-6 space-y-6">
      {/* Main Weather Display */}
      <div className="text-center">
        <div className="text-6xl mb-4">
          {getWeatherIcon(data.weather[0].main)}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {data.name}, {data.sys.country}
        </h2>
        <div className="text-5xl font-bold text-blue-600 mb-2">
          {Math.round(data.main.temp)}°C
        </div>
        <div className="text-lg text-gray-600 capitalize">
          {data.weather[0].description}
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Feels like</div>
          <div className="text-xl font-semibold text-gray-800">
            {Math.round(data.main.feels_like)}°C
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Humidity</div>
          <div className="text-xl font-semibold text-gray-800">
            {data.main.humidity}%
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Wind Speed</div>
          <div className="text-xl font-semibold text-gray-800">
            {Math.round(data.wind.speed * 3.6)} km/h
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Pressure</div>
          <div className="text-xl font-semibold text-gray-800">
            {data.main.pressure} hPa
          </div>
        </div>
      </div>
    </div>
  )
}