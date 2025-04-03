    // components/weatherService.ts
    import axios from 'axios';
    import Config from 'react-native-config';

    const { WEATHER_API_KEY, WEATHER_BASE_URL } = Config;

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