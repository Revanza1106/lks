import React from 'react'
import "../index.css";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  ">
    <form className="w-full max-w-sm p-6 bg-white rounded shadow-md bg-gradient-to-r ">
      <h2 className="text-2xl font-semibold mb-6">Kontak</h2>
      <h4 className='text-blue-500'>"Kontak kami jika memiliki Pertanyaan"</h4>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          id="message"
          name="message"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>
  )
}

export default Contact