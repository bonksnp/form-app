import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Dashboard: NextPage = () => {
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
            <div className="bg-blue-50 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Current Alerts</h3>
              <p className="text-gray-600">No active alerts in your area.</p>
            </div>
            
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