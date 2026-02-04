# Weather App

A modern, responsive weather application built with Next.js, TypeScript, and Tailwind CSS. Get real-time weather information for any city worldwide.

## Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Fast Performance**: Built with Next.js for optimal performance
- **Type Safety**: Full TypeScript support
- **Mobile Friendly**: Responsive design that works on all devices
- **Detailed Information**: Temperature, humidity, wind speed, pressure, and more

## Technologies Used

- **Next.js 15** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **OpenWeatherMap API** - Weather data provider

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository** (if from Git) or ensure you're in the project directory

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - The project includes a `.env.local` file for environment variables
   - Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Update the `.env.local` file with your actual API key:
   ```bash
   # .env.local
   OPENWEATHER_API_KEY=your_actual_api_key_here
   ```
   
   **Important Notes:**
   - Never commit your actual API key to version control
   - The `.env.local` file is already in `.gitignore`
   - New API keys may take 10-15 minutes to activate
   - You can test your API key with: `curl "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric"`

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## How to Use

1. Enter a city name in the search box
2. Click "Search Weather" or press Enter
3. View the current weather conditions including:
   - Temperature and "feels like" temperature
   - Weather description with emoji icons
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure

## Project Structure

```
weather-app/
├── src/
│   ├── app/
│   │   ├── api/weather/
│   │   │   └── route.ts          # Weather API endpoint
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main page
│   └── components/
│       ├── SearchForm.tsx        # Search input component
│       └── WeatherCard.tsx       # Weather display component
├── .env.local                    # Environment variables
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Environment Variables

This project uses environment variables to securely store API keys and configuration.

### Required Environment Variables

Create a `.env.local` file in the root directory with:

```bash
# OpenWeatherMap API Configuration
OPENWEATHER_API_KEY=your_openweathermap_api_key_here
```

### Getting Your API Key

1. **Sign up** at [OpenWeatherMap](https://openweathermap.org/api)
2. **Verify your email** and log in to your account
3. **Go to API Keys** section in your dashboard
4. **Copy your API key** (32-character string)
5. **Paste it** into your `.env.local` file

### Security Notes

- The `.env.local` file is already added to `.gitignore`
- Environment variables are only loaded on the server side
- **Never commit API keys to version control**
- **Never share your API keys publicly**

### Testing Your API Key

You can test if your API key works using curl:
```bash
curl "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric"
```

If you get weather data back, your key is working!

## API Configuration

The app uses the [OpenWeatherMap API](https://openweathermap.org/api) for weather data. To get your free API key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Go to your API keys section
3. Copy your API key
4. Add it to your `.env.local` file

## Deployment

This app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Deploy with one click
- **Netlify**: Static site deployment
- **Railway**: Full-stack hosting
- **Docker**: Containerized deployment

Remember to set your environment variables in your deployment platform.

## Contributing

Feel free to contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from native emoji set