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
            <p className="text-lg">
              Thank you for playing our games!
            </p>

            <p>
              This Privacy Policy applies to all of Codelka's games, websites, stores, and related services 
              (collectively referred to as the "Service"). We may occasionally update this Privacy Policy by 
              posting a revised version on <Link href="https://codelka.com" className="text-[#9B8BB4] hover:text-[#584D6D]">codelka.com</Link>. 
              If we make any significant changes, we will notify you in accordance with applicable laws, which may 
              include placing a notice within the Service before the update becomes effective. Your continued use 
              of the Service after the effective date signifies your agreement to the updated Privacy Policy.
            </p>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">1. Information We Collect</h2>
              <p>We collect information to provide and enhance our Service. The types of information we may collect include:</p>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">a) Device and Usage Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Details about the device or platform you use to access our games (e.g., device type, operating system, unique device identifiers, IP address).</li>
                <li>Gameplay activity, session duration, in-game interactions, and other usage data.</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">b) Analytics Data</h3>
              <p>
                We use analytics tools (e.g., Google Analytics, Google Analytics for Firebase, or similar services) 
                to collect data on Service usage, crash reports, and other user interactions.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">c) Contact Information</h3>
              <p>
                If you contact us via email or through any in-game feedback/contact forms, we may collect your name, 
                email address, and any additional information you choose to provide.
              </p>

              <div className="bg-[#9B8BB4]/10 p-4 rounded-lg mt-6">
                <p className="text-[#584D6D] font-medium italic">
                  Note: Our games do not collect or process any sensitive medical information. 
                  They are designed purely for entertainment.
                </p>
              </div>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Provide, maintain, and improve the functionality of our Service.</li>
                <li>Monitor and analyze usage trends to enhance the user experience.</li>
                <li>Respond to user inquiries and provide customer support.</li>
                <li>Send updates and notifications about the Service, if applicable.</li>
                <li>Comply with legal obligations.</li>
              </ol>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">3. Legal Basis for Processing Personal Data (For Users in the EU/UK)</h2>
              <p>For individuals in the European Union or the United Kingdom, we process your data based on the following legal grounds:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Consent:</strong> When you provide explicit consent (e.g., for optional analytics or marketing communications).
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> For operational purposes such as maintaining and improving the Service.
                </li>
                <li>
                  <strong>Legal Obligation:</strong> When required to comply with applicable laws.
                </li>
              </ol>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">4. Sharing and Disclosure of Information</h2>
              <p>We only share your information under the following limited circumstances:</p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">a) Service Providers</h3>
              <p>
                We may share information with third-party service providers who assist in tasks such as hosting, 
                analytics, and customer support. These providers are obligated to handle your data securely and 
                only for the purposes we specify.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">b) Legal Compliance</h3>
              <p>
                We may disclose your information if required to do so by law or in response to valid legal 
                requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">c) Business Transfers</h3>
              <p>
                If Codelka undergoes a merger, acquisition, or asset sale, your information may be transferred 
                as part of that transaction. You will be notified of any such change.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">5. International Data Transfers</h2>
              <p>
                Your information may be processed and stored outside your country of residence, including in the 
                United States. We ensure that appropriate safeguards are in place to protect your data in accordance 
                with applicable laws, such as the EU/UK General Data Protection Regulation (GDPR).
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">6. Data Retention</h2>
              <p>
                We retain your information only as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy, or as required by law. When information is no longer needed, we securely delete 
                or anonymize it.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Access:</strong> Request access to the data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal and contractual obligations).</li>
                <li><strong>Restriction:</strong> Request the restriction of data processing.</li>
                <li><strong>Objection:</strong> Object to data processing based on legitimate interests.</li>
                <li><strong>Portability:</strong> Request the transfer of your data to another service.</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where applicable.</li>
              </ol>
              <p className="mt-4">
                To exercise these rights, please contact us at{' '}
                <Link href="mailto:codelka.studios@gmail.com" className="text-[#9B8BB4] hover:text-[#584D6D] font-bold">
                  codelka.studios@gmail.com
                </Link>. 
                We will respond in accordance with applicable laws.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">8. Children's Privacy</h2>
              <p>
                Our Service is not intended for children under 13 years old (or the minimum age in your jurisdiction). 
                We do not knowingly collect personal data from children. If you believe we have collected data from 
                a child under this age, please contact us at{' '}
                <Link href="mailto:codelka.studios@gmail.com" className="text-[#9B8BB4] hover:text-[#584D6D] font-bold">
                  codelka.studios@gmail.com
                </Link>, 
                and we will take steps to delete it.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">9. Security Measures</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your information. 
                However, no method of transmission over the internet or electronic storage is completely secure, 
                and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">10. Third-Party Links</h2>
              <p>
                Our Service may include links to third-party websites or services. We are not responsible for 
                the privacy practices of these third parties, and we encourage you to review their privacy policies.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, 
                with the updated date at the top. We encourage you to review the Privacy Policy periodically.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">12. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy, you can reach us at:</p>
              
              <div className="bg-[#9B8BB4]/10 p-6 rounded-lg mt-4">
                <p className="font-bold text-[#584D6D]">Codelka</p>
                <p>Email: <Link href="mailto:codelka.studios@gmail.com" className="text-[#9B8BB4] hover:text-[#584D6D] font-bold">codelka.studios@gmail.com</Link></p>
                <p>Website: <Link href="https://codelka.com" className="text-[#9B8BB4] hover:text-[#584D6D]">https://codelka.com</Link></p>
              </div>
            </div>

            <p className="text-center text-[#584D6D]/70 mt-12 border-t border-[#9B8BB4]/10 pt-8">
              Thank you for playing our games and trusting Codelka!
            </p>
          </div>
        </motion.article>
      </main>

      <footer className="w-full border-t border-[#9B8BB4]/10 bg-[#E9E4F0]/60 backdrop-blur-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Link className="flex items-center justify-center group" href="/">
              <Logo className="h-10 w-10 text-[#9B8BB4] transition-transform group-hover:scale-110" />
              <span className={`ml-2 text-lg font-bold tracking-tight text-[#584D6D] ${lexend.className}`}>Codelka</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="/privacy-policy" 
                className="text-sm font-medium text-[#584D6D] hover:text-[#9B8BB4] transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="text-[#584D6D]/30">•</span>
              <Link 
                href="/terms" 
                className="text-sm font-medium text-[#584D6D] hover:text-[#9B8BB4] transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-xs text-[#584D6D]/70">© 2025 Codelka. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

