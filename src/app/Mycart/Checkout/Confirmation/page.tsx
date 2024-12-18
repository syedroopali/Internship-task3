// pages/confirmation.tsx
import React from 'react'
import Navbar from "@/Components/Navbar"
import Subscribe from '@/Components/Subscribe'
import Footer from "@/Components/Footer"

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="py-12 px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Order Confirmation</h1>
          <p className="text-xl text-center text-gray-700">Thank you for your order!</p>
          <p className="text-lg text-center text-gray-700 mt-4">Your order has been successfully placed. You will receive an email with the details shortly.</p>
        </div>
      </div>

      {/* Subscribe Section */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </div>
  )
}
