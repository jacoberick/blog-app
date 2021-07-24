import React, { useState } from 'react'
import Link from 'next/link'
import Header from '../components/header.js'
import Footer from '../components/footer/footer'

const Admin = () => {
  const [contentType, setContentType] = useState('')

  const inputClass = `border px-6 py-2 my-4 rounded`
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-2 flex flex-col items-center my-auto">
        <h1 className="font-header text-4xl">Hello, Jacob.</h1>
        <h2 className="my-2 text-lg">What are you creating today?</h2>
        <div>
          <button
            onClick={() => setContentType('essay')}
            className={`transition focus:outline-none ${inputClass} ${
              contentType === 'essay' ? 'bg-main text-white' : null
            }`}
          >
            Essay
          </button>
          <button
            onClick={() => setContentType('art')}
            className={`ml-4 transition focus:outline-none ${inputClass} ${
              contentType === 'art' ? 'bg-main text-white' : null
            }`}
          >
            Art
          </button>
          <button
            onClick={() => setContentType('recommended-book')}
            className={`focus:outline-none transition ${inputClass} ml-4 my-6 ${
              contentType === 'recommended-book' ? 'bg-main text-white' : null
            }`}
          >
            Recommended Book
          </button>
        </div>
        <nav>
          <Link
            href={{ pathname: '/admin/create', query: { type: contentType } }}
          >
            <button
              className="border-2 border-main rounded px-4 py-2 hover:bg-main hover:text-white transition last:col-start-3"
              type="submit"
            >
              Create
            </button>
          </Link>
        </nav>
      </main>
      <Footer />
    </div>
  )
}

export default Admin
