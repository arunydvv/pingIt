import styles from "@/app/home.module.css"
import { cn } from "@/utils"
import { Check } from "lucide-react"
import { Inter } from "next/font/google"
import Heading from "@/components/Heading"
import NiceButton from "@/components/NiceButton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { DiscordMessage } from "@/components/DiscordMessage"
import { MockDiscordApp } from "@/components/MockDiscordApp"
import { AnimatedList } from "@/components/ui/animated-list"
import Image from "next/image"
import Header from "../resources/Header"
import Hero from "../resources/Hero"
import Features from "../resources/Features"
import Developer from "../resources/Developer"
import Background from "../resources/Background"
import {Discord} from "../resources/Discord"

const inter = Inter({ subsets: ["latin"] })

const features = [
  "Real-time Discord alerts for critical events",
  "Buy once, use Forever",
  "Track sales, new users, or any other event",
]
const Page = () => {
  const codeSnippet = `await fetch("http://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields: {
      plan: "PRO",
      email: "zoe.martinez2001@email.com",
      amount: 49.00
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`

  return (
    <>
      <Hero />
      <Discord />
      <Features />
      <Developer />
    </>
  )
}

export default Page
