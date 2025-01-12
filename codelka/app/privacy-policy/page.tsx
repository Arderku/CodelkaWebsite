'use client'

import { lexend } from '../../fonts'
import Link from 'next/link'
import { Logo } from '../../components/logo'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <div className={`flex min-h-screen flex-col bg-gradient-to-b from-[#F6F4F9] to-white ${lexend.className}`}>
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-[#FAF9FC]/60 border-b border-[#9B8BB4]/10">
        <Link className="flex items-center justify-center group" href="/">
          <Logo className="h-8 w-8 text-[#9B8BB4] transition-transform group-hover:scale-110" />
          <span className="ml-2 text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#584D6D] to-[#9B8BB4]">
            Codelka
          </span>
        </Link>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 md:px-6 max-w-4xl">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-purple max-w-none"
        >
          <h1 className="text-4xl font-bold tracking-tight text-[#584D6D] mb-8">Privacy Policy</h1>
          <p className="text-sm text-[#584D6D]/70 mb-8">Last Updated: January, 2025</p>

          <div className="space-y-8 text-[#584D6D]/80">
            <p>
              Welcome to FeedMi ("the Game"), a mobile game developed and operated by Codelka ("we," "us," or "our"). 
              This Privacy Policy explains how we collect, use, and protect your personal information when you use the Game 
              or visit our website at <Link href="https://codelka.com/" className="text-[#9B8BB4] hover:text-[#584D6D]">https://codelka.com/</Link>. 
              By using our services, you agree to the practices described in this Privacy Policy. If you do not agree, 
              please refrain from using our services.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-[#584D6D] mt-12">1. Information We Collect</h2>
              <p>We collect information to provide and enhance our Game and services. The types of information we may collect include:</p>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">a. Device and Usage Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device type, operating system, unique device identifiers, and IP address.</li>
                <li>Game usage data such as gameplay activity, session duration, and in-app interactions.</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">b. Analytics Data</h3>
              <p>
                We use analytics tools (e.g., Google Analytics for Firebase) to collect data on app usage, 
                crash reports, and other user interactions within the Game.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">c. Contact Information</h3>
              <p>
                If you contact us via email or through the Game, we may collect your name, email address, 
                and any other information you provide.
              </p>

              <div className="bg-[#9B8BB4]/10 p-4 rounded-lg mt-6">
                <p className="text-[#584D6D] font-medium">
                  Note: FeedMi does not collect or process any sensitive medical information. 
                  It is a simple mobile clicker game designed for entertainment.
                </p>
              </div>
            </section>

            {/* Sections 2-12 following the same structure */}
            <section>
              <h2 className="text-2xl font-bold text-[#584D6D] mt-12">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve the Game's functionality.</li>
                <li>Monitor and analyze usage trends to enhance user experience.</li>
                <li>Respond to user inquiries and provide customer support.</li>
                <li>Send updates and notifications about the Game, if applicable.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            {/* Continue with remaining sections... */}

            <section>
              <h2 className="text-2xl font-bold text-[#584D6D] mt-12">12. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy, you can reach us at:</p>
              
              <div className="bg-[#9B8BB4]/10 p-6 rounded-lg mt-4">
                <p className="font-bold text-[#584D6D]">Codelka</p>
                <p>Email: <Link href="mailto:codelka.studios@gmail.com" className="text-[#9B8BB4] hover:text-[#584D6D]">codelka.studios@gmail.com</Link></p>
                <p>Website: <Link href="https://codelka.com/" className="text-[#9B8BB4] hover:text-[#584D6D]">https://codelka.com/</Link></p>
              </div>
            </section>

            <p className="text-center text-[#584D6D]/70 mt-12">
              Thank you for playing FeedMi and trusting Codelka!
            </p>
          </div>
        </motion.article>
      </main>

      <footer className="w-full border-t border-[#9B8BB4]/10 bg-[#E9E4F0]/60 backdrop-blur-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Link className="flex items-center justify-center group" href="/">
              <Logo className="h-8 w-8 text-[#9B8BB4] transition-transform group-hover:scale-110" />
              <span className="ml-2 text-lg font-bold tracking-tight text-[#584D6D]">Codelka</span>
            </Link>
            <p className="text-sm text-[#584D6D]/70">© 2024 Codelka. Made with ❤️ in pixels</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

