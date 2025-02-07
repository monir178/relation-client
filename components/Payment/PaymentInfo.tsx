"use client"

import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import MessageModal from "./MassageModal"

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  note: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
})

export default function PaymentInfo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      note: "",
      terms: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">

        {/* Left */}
        <div className="space-y-6 py-28 font-manrope">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center font-bold">Checkout Info</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Contact Info</h2>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Shipping Info</h2>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Detailed Address</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter your detailed address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Select City" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="note"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Note for FabFittle (optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Add any special instructions" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Payment Options</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center gap-2 p-4 border rounded-lg">
                        <Checkbox id="cash" />
                        <label htmlFor="cash" className="text-sm font-medium">
                          Cash on Delivery
                        </label>
                      </div>
                      <div className="flex items-center gap-2 p-4 border rounded-lg">
                        <Checkbox id="card" />
                        <label htmlFor="card" className="text-sm font-medium">
                          Card Payment
                        </label>
                      </div>
                      <div className="flex items-center gap-2 p-4 border rounded-lg">
                        <Checkbox id="card" />
                        <label htmlFor="card" className="text-sm font-medium">
                          Bkash
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 p-4 border rounded-lg">
                      <Input placeholder="Enter Coupon Code Here" className="flex-1" />
                      <Button variant="secondary">Add Coupon</Button>
                    </div>
                    <div className="flex items-start gap-2">
                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex items-start gap-2 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="text-sm leading-none">
                              I agree to{" "}
                              <Link href="#" className="text-primary hover:underline">
                                Terms & Conditions
                              </Link>
                              ,{" "}
                              <Link href="#" className="text-primary hover:underline">
                                Refund Policy
                              </Link>{" "}
                              and{" "}
                              <Link href="#" className="text-primary hover:underline">
                                Privacy Policy
                              </Link>{" "}
                              of FabFittle
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-green-600">
                    Confirm Order
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>


       {/* Right */}
        <div className="space-y-6 lg:py-28 font-manrope">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center font-bold">Cart Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/bag.jpg"
                    alt="Product"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">Premium Antibacterial Socks - Regal</h3>
                    <p className="text-md font-bold text-green-500">1 x ৳299</p>
                  </div>
                  <p className="text-md font-bold text-green-500">৳160</p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className="text-md font-bold text-green-500">৳160</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping (+):</span>
                    <span className="text-md font-bold text-green-500">৳60</span>
                  </div>
                  <Separator />
                  <div className="text-md font-bold text-green-500">
                    <span>Payable:</span>
                    <span>৳220</span>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-sm">
                  You will get the delivery within 2-3 Days after confirmation.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Message Icon */}
      <MessageModal/>
    </div>
  )
}

