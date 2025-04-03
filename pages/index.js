import Head from 'next/head'
import Link from 'next/link'
import UserForm from '../components/UserForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DisasterPrep - Emergency Preparedness</title>
        <meta name="description" content="Prepare for emergencies with personalized alerts and resources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome to DisasterPrep
        </h1>
        <p className="text-center text-gray-600 mb-8">Your personalized emergency preparedness platform</p>
        
        <div className="max-w-xl mx-auto mb-12 bg-blue-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">New User?</h2>
          <p className="text-gray-700 mb-6 text-center">
            Complete our onboarding process to set up your personalized emergency alerts and resources.
          </p>
          <Link href="/onboarding" className="block w-full bg-blue-500 text-white text-center py-3 px-6 rounded-md hover:bg-blue-600 transition-colors">
            Start Onboarding
          </Link>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Quick Data Submission Form
          </h2>
          <UserForm />
        </div>
      </main>

      <footer className="text-center py-4 mt-8 border-t">
        <p>© {new Date().getFullYear()} DisasterPrep App</p>
      </footer>
    </div>
  )
} 