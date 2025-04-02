import Head from 'next/head'
import UserForm from '../components/UserForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>User Data Collection Form</title>
        <meta name="description" content="A simple form to collect user data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          User Data Collection
        </h1>
        <UserForm />
      </main>

      <footer className="text-center py-4 mt-8 border-t">
        <p>© {new Date().getFullYear()} User Data Collection App</p>
      </footer>
    </div>
  )
} 