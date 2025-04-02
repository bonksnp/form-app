import { useState } from 'react'
import supabase from '../lib/supabase'

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    mobility: 'No Mobility Issues',
    zipcode: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    // For zipcode, only allow numbers and limit to 5 digits
    if (name === 'zipcode') {
      const numericValue = value.replace(/[^0-9]/g, '').slice(0, 5)
      setFormData(prevData => ({
        ...prevData,
        [name]: numericValue
      }))
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    // Validate zipcode
    if (formData.zipcode.length !== 5) {
      setMessage('Error: Please enter a valid 5-digit zip code')
      setIsSubmitting(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .insert([{ 
          name: formData.name, 
          email: formData.email, 
          phone_number: formData.phoneNumber,
          mobility: formData.mobility,
          zipcode: formData.zipcode
        }])

      if (error) throw error

      setMessage('Form submitted successfully!')
      setFormData({ name: '', email: '', phoneNumber: '', mobility: 'No Mobility Issues', zipcode: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage(`Error: ${error.message || 'Something went wrong'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Information Form</h2>
      
      {message && (
        <div className={`p-3 mb-4 rounded ${message.includes('Error') ? 'bg-red-100' : 'bg-green-100'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2 font-medium">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="zipcode" className="block mb-2 font-medium">
            ZIP Code
          </label>
          <input
            id="zipcode"
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            required
            pattern="[0-9]{5}"
            maxLength="5"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter 5-digit ZIP code"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="mobility" className="block mb-2 font-medium">
            Mobility
          </label>
          <select
            id="mobility"
            name="mobility"
            value={formData.mobility}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md bg-white"
          >
            <option value="No Mobility Issues">No Mobility Issues</option>
            <option value="Some Mobility - Minor/No assistance needed">Some Mobility - Minor/No assistance needed</option>
            <option value="Some Mobility - Moderate/Major assistance needed">Some Mobility - Moderate/Major assistance needed</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
} 