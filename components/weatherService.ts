    // components/weatherService.ts
    import axios from 'axios';
    import * as dotenv from 'dotenv';
    dotenv.config({ path: '.env.local' });

    const { WEATHER_API_KEY, WEATHER_BASE_URL } = process.env;

    export const fetchWeatherData = async (location: string) => {
    try {
        const response = await axios.get(`${WEATHER_BASE_URL}/forecast`, {
        params: {
            q: location,
            appid: WEATHER_API_KEY,
            units: 'metric', // or 'imperial'
        },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
    };