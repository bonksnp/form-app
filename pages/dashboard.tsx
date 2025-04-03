import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';

type WeatherData = {
  temperature: number;
  humidity: number;
  weather_condition: string;
  weather_description: string;
  wind_speed: number;
  weather_timestamp: string;
  city: string;
  state: string;
  zip_code: string;
};

const Dashboard: NextPage = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase
          .from('onboarding_data')
          .select('temperature, humidity, weather_condition, weather_description, wind_speed, weather_timestamp, city, state, zip_code')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (error) throw error;
        setWeatherData(data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to load your weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Head>
        <title>DisasterPrep - Dashboard</title>
        <meta name="description" content="Your personalized disaster preparedness dashboard" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Your DisasterPrep Dashboard
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Welcome to your personalized dashboard!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for completing the onboarding process. Your information has been saved 
              and will be used to provide you with personalized alerts and resources.
            </p>
            <p className="text-gray-600">
              This dashboard will be expanded with more features in the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {loading ? (
              <div className="bg-blue-50 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">Weather Conditions</h3>
                <p className="text-gray-600">Loading weather data...</p>
              </div>
            ) : error ? (
              <div className="bg-blue-50 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">Weather Conditions</h3>
                <p className="text-red-500">{error}</p>
              </div>
            ) : weatherData ? (
              <div className="bg-blue-50 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Weather in {weatherData.city}, {weatherData.state}
                </h3>
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-bold text-blue-700 mr-3">
                    {Math.round(weatherData.temperature)}°F
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 capitalize">{weatherData.weather_description}</p>
                    <p className="text-gray-600">Humidity: {weatherData.humidity}%</p>
                    <p className="text-gray-600">Wind: {weatherData.wind_speed} mph</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Last updated: {new Date(weatherData.weather_timestamp).toLocaleString()}
                </p>
              </div>
            ) : (
              <div className="bg-blue-50 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">Weather Conditions</h3>
                <p className="text-gray-600">No weather data available.</p>
              </div>
            )}
            
            <div className="bg-green-50 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Your Emergency Kit</h3>
              <p className="text-gray-600 mb-2">Complete your emergency preparedness kit:</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Water (one gallon per person per day)</li>
                <li>Non-perishable food</li>
                <li>First aid kit</li>
                <li>Flashlight and batteries</li>
                <li>Emergency radio</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/" className="text-blue-500 hover:text-blue-700 transition-colors">
              Return to home page
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard; 