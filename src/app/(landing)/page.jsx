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
      < div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
                
      <Hero />

      <section className="relative   pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 pt-52 " />
        <div className="absolute inset-0 top-24  " />
        <div className="absolute inset-0">
          <svg
            className="absolute h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 .5H32M.5 0V32"
                  fill="none"
                  stroke="rgb(226 232 240 / 0.3)"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordApp>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda Avatar"
                    username="PingPanda"
                    timestamp="Today at 12:35PM"
                    badgeText="SignUp"
                    badgeColor="#43b581"
                    title="👤 New user signed up"
                    content={{
                      name: "Mateo Ortiz",
                      email: "m.ortiz19@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda Avatar"
                    username="PingPanda"
                    timestamp="Today at 12:35PM"
                    badgeText="Revenue"
                    badgeColor="#faa61a"
                    title="💰 Payment received"
                    content={{
                      amount: "$49.00",
                      email: "zoe.martinez2001@email.com",
                      plan: "PRO",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda Avatar"
                    username="PingPanda"
                    timestamp="Today at 5:11AM"
                    badgeText="Milestone"
                    badgeColor="#5865f2"
                    title="🚀 Revenue Milestone Achieved"
                    content={{
                      recurringRevenue: "$5.000 USD",
                      growth: "+8.2%",
                    }}
                  />
                </AnimatedList>
              </MockDiscordApp>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <Features />
      <Developer/>
    </>
  )
}

export default Page
