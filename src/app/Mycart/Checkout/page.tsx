'use client'
import { useState } from 'react'
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group"
import { Separator } from "@/Components/ui/separator"
import Navbar from "@/Components/Navbar"
import Subscribe from '@/Components/Subscribe'
import Footer from "@/Components/Footer"
import { useRouter } from 'next/navigation'  // Import the useRouter hook

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const router = useRouter()  // Initialize useRouter

  const handlePlaceOrder = () => {
    // Navigate to the confirmation page
    router.push('/Mycart/Checkout/Confirmation')  // Replace '/confirmation' with the path of your confirmation page
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="py-12 px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Checkout</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Customer Information Card */}
            <Card className="shadow-lg rounded-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-700">Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="first-name" className="text-gray-700">First Name</Label>
                    <Input id="first-name" placeholder="" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="text-gray-700">Last Name</Label>
                    <Input id="last-name" placeholder="" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input id="email" type="email" placeholder="" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="address" className="text-gray-700">Address</Label>
                  <Input id="address" placeholder="" className="mt-2" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city" className="text-gray-700">City</Label>
                    <Input id="city" placeholder="" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="zip" className="text-gray-700">ZIP Code</Label>
                    <Input id="zip" placeholder="" className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary Card */}
            <Card className="shadow-lg rounded-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-700">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between text-lg text-gray-700">
                  <span>Subtotal</span>
                  <span>$1299.99</span>
                </div>
                <div className="flex justify-between text-lg text-gray-700">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between text-lg text-gray-700">
                  <span>Tax</span>
                  <span>$10.00</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-xl text-gray-900">
                  <span>Total</span>
                  <span>$1319.99</span>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <Label htmlFor="payment-method" className="text-gray-700">Payment Method</Label>
                  <RadioGroup
                    id="payment-method"
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="mt-4 space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="text-gray-700">Credit Card</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="text-gray-700">PayPal</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Place Order Button */}
          <div className="mt-10 text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg font-semibold"
              onClick={handlePlaceOrder} // Trigger the page navigation when clicked
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </div>
  )
}
