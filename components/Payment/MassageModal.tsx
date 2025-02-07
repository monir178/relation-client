"use client"

import type React from "react"
import { useState } from "react"
import { MessageSquareMore } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const MessageModal = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ name, email, message })
    setOpen(false)
    // Reset form
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 xl:right-24">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black/80 hover:bg-gray-700 shadow-lg"
          >
            <MessageSquareMore className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[calc(100%-2rem)] sm:max-w-[425px] mx-auto p-4 sm:p-6 rounded-xl font-manrope">
          <DialogHeader className="mb-4 sm:mb-6">
            <DialogTitle className="text-xl sm:text-2xl font-semibold mb-2">Send us a message</DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full px-3 py-2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here"
                required
                className="w-full px-3 py-2 min-h-[80px] sm:min-h-[100px]"
              />
            </div>
            <div className="flex justify-end pt-2 sm:pt-4">
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto px-4 sm:px-6 py-2"
              >
                Send Message
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default MessageModal

