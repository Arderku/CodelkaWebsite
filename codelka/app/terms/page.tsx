'use client'

import { lexend } from '../../fonts'
import Link from 'next/link'
import { Logo } from '../../components/logo'
import { motion } from 'framer-motion'

export default function Terms() {
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
          <h1 className="text-4xl font-bold tracking-tight text-[#584D6D] mb-8">Terms of Service</h1>
          <p className="text-sm text-[#584D6D]/70 mb-8">Last Updated: January, 2025</p>

          <div className="space-y-8 text-[#584D6D]/80">
            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the games, websites, stores, and related services provided by Codelka 
                (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). 
                If you do not agree to these Terms, you must discontinue your use of the Service immediately. 
                We reserve the right to modify these Terms at any time by posting updated Terms on our website 
                or within the Service. Your continued use of the Service after the effective date of any changes 
                constitutes your acceptance of those changes.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">2. Eligibility</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">2.1 Age Requirement</h3>
              <p>
                You must be at least 13 years old (or the minimum age in your jurisdiction) to use our Service. 
                By using the Service, you represent that you meet this age requirement.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">2.2 Compliance with Laws</h3>
              <p>
                You are responsible for ensuring that your use of the Service complies with all applicable laws 
                and regulations in your place of residence. If any applicable law prohibits your participation, 
                you must cease using the Service.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">3. License Grant</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">3.1 Limited License</h3>
              <p>
                Subject to your compliance with these Terms, Codelka grants you a non-exclusive, non-transferable, 
                revocable, limited license to access and use the Service solely for your personal, non-commercial 
                entertainment purposes.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">3.2 Restrictions</h3>
              <p>You may not:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Modify, reverse engineer, decompile, or disassemble any part of the Service.</li>
                <li>Use cheats, exploits, automation software, bots, or any unauthorized third-party software designed to modify or interfere with the Service.</li>
                <li>Use the Service for commercial purposes without our prior written consent.</li>
                <li>Remove or alter any proprietary notices or labels from the Service.</li>
                <li>Circumvent or attempt to circumvent any security feature, access control measure, or other technological protection used in the Service.</li>
              </ol>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">4. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">4.1 Ownership</h3>
              <p>
                All content, features, and functionality of the Service—including but not limited to software, 
                text, graphics, logos, and trademarks—are owned by Codelka or its licensors and are protected 
                by intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">4.2 User-Generated Content</h3>
              <p>
                Any content you create, upload, or share through the Service ("User Content") remains your property. 
                However, by providing User Content, you grant Codelka a worldwide, non-exclusive, royalty-free, 
                irrevocable, transferable, and sub-licensable license to use, display, reproduce, modify, distribute, 
                and otherwise exploit your User Content in connection with the Service. You represent and warrant 
                that you have all necessary rights to grant this license and that your User Content does not 
                infringe any third-party rights.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">5. Code of Conduct</h2>
              <p>When using the Service, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Post or transmit any content that is unlawful, threatening, harassing, defamatory, obscene, or otherwise objectionable.</li>
                <li>Impersonate any person or entity or falsely claim an affiliation with any person or entity.</li>
                <li>Engage in any activity that disrupts or interferes with the Service or the servers/networks connected to the Service.</li>
                <li>Harvest or collect personal information of other users without their consent.</li>
                <li>Upload or share any content containing viruses, malware, or other harmful components.</li>
              </ul>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">6. Virtual Items and Purchases</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">6.1 Virtual Items</h3>
              <p>
                The Service may allow the purchase of virtual currency, goods, or other in-game items 
                (collectively "Virtual Items"). These Virtual Items have no real-world monetary value and 
                cannot be sold, transferred, or exchanged for cash or any other goods or services outside 
                the Service.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">6.2 Payment and Refunds</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All purchases are final and non-refundable unless otherwise specified by applicable law or our written refund policy.</li>
                <li>You agree to pay all fees and applicable taxes incurred by you or anyone using your account.</li>
                <li>We reserve the right to change our pricing and refund policy at any time. Any changes will be posted as described in Section 1.</li>
              </ul>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">7. User Accounts</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">7.1 Account Creation</h3>
              <p>
                You may be required to create an account to access certain features of the Service. You must 
                provide accurate and complete information during the registration process and keep your account 
                information up-to-date at all times.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">7.2 Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for any 
                activity that occurs under your account. If you suspect any unauthorized use of your account, 
                you must notify us immediately at{' '}
                <Link href="mailto:codelka.studios@gmail.com" className="text-[#9B8BB4] hover:text-[#584D6D]">
                  codelka.studios@gmail.com
                </Link>.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">8. Termination</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">8.1 Termination by Codelka</h3>
              <p>
                We reserve the right to suspend or terminate your access to the Service at any time and for any 
                reason, including but not limited to your violation of these Terms or any other policies.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">8.2 Effects of Termination</h3>
              <p>
                Upon termination, your right to use the Service will immediately cease. You acknowledge that we 
                are not required to provide refunds or compensation for any unused Virtual Items or other purchases.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">9. Disclaimer of Warranties</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">9.1 "As Is" Basis</h3>
              <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. 
                To the fullest extent permitted by law, Codelka disclaims all warranties, express or implied, 
                including but not limited to implied warranties of merchantability, fitness for a particular 
                purpose, and non-infringement.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">9.2 No Guarantee</h3>
              <p>
                We do not guarantee that the Service will be uninterrupted, error-free, secure, or free of 
                viruses or other harmful components. Your use of the Service is at your own risk.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">10. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Codelka shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising out of or related to your use of the Service, 
                including but not limited to loss of revenue, loss of data, or loss of goodwill. In no event 
                shall Codelka's total liability to you exceed the amounts paid by you (if any) for the Service 
                in the six (6) months preceding the event giving rise to such liability.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Codelka and its affiliates, officers, 
                employees, agents, and licensors from and against any claims, liabilities, damages, judgments, 
                awards, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or 
                relating to your violation of these Terms or your use of the Service.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">12. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">12.1 Governing Law</h3>
              <p>
                These Terms and any dispute arising hereunder shall be governed by and construed in accordance 
                with the laws of the jurisdiction in which Codelka is registered, without regard to its conflict 
                of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">12.2 Arbitration</h3>
              <p>
                Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, 
                termination, enforcement, or interpretation thereof shall be settled by binding arbitration, 
                unless otherwise prohibited by applicable law. The arbitration shall take place in a mutually 
                agreed location or as determined under applicable arbitration rules.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">12.3 Class Action Waiver</h3>
              <p>
                To the extent permitted by law, you agree to resolve any disputes on an individual basis and 
                waive any right to bring or participate in a class or collective action.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">13. Jurisdiction-Specific Requirements</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">13.1 U.S. State-Specific Rights</h3>
              <p>
                Certain U.S. states (e.g., California) may grant you additional rights under state-specific 
                consumer protection, privacy, or other laws. For example, residents of California may be entitled 
                to certain disclosures about data collection or usage under the California Consumer Privacy Act 
                ("CCPA") or California Privacy Rights Act ("CPRA"). We comply with these state-level legal 
                requirements to the extent they apply to our operations.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">13.2 EU Consumer Protections</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  If you are a resident of an EU member state, you may have rights under EU consumer protection 
                  laws that cannot be waived by contract (e.g., certain cancellation, refund, or withdrawal rights).
                </li>
                <li>
                  Additionally, if you access the Service from within the European Economic Area (EEA), Switzerland, 
                  or the United Kingdom, you may have rights under data protection regulations like the General Data 
                  Protection Regulation ("GDPR"). We will respect these rights in accordance with applicable law.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">13.3 Other Territories</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Different countries or regions may have local laws granting you additional rights (e.g., mandatory 
                  cooling-off periods, automatic refund rights, or other statutory protections). If your jurisdiction 
                  mandates certain consumer or data protection measures, we will comply with the applicable provisions 
                  to the extent required by law.
                </li>
                <li>
                  In the event any provision of these Terms conflicts with mandatory local laws, those local laws 
                  will prevail solely to the extent of the conflict, and all other provisions of these Terms will 
                  remain in effect.
                </li>
              </ul>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">14. Changes to These Terms</h2>
              <p>
                We may revise these Terms from time to time by posting an updated version on our website or 
                within the Service. If we make any material changes, we will notify you by posting a notice or 
                by other means required by law. Your continued use of the Service after the effective date of 
                any updated Terms indicates your acceptance of the new Terms.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">15. Miscellaneous</h2>
              
              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">15.1 Severability</h3>
              <p>
                If any provision of these Terms is held invalid or unenforceable, the remaining provisions 
                shall remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">15.2 No Waiver</h3>
              <p>
                Our failure to enforce any right or provision in these Terms shall not constitute a waiver 
                of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">15.3 Assignment</h3>
              <p>
                You may not assign or transfer these Terms or your rights or obligations hereunder without 
                our prior written consent. We may freely assign or transfer these Terms without restriction.
              </p>

              <h3 className="text-xl font-semibold text-[#584D6D] mt-6">15.4 Entire Agreement</h3>
              <p>
                These Terms and any additional policies or guidelines we provide regarding the Service constitute 
                the entire agreement between you and Codelka and supersede all prior agreements, whether written 
                or oral, with respect to the Service.
              </p>
            </div>

            <div className="border-t border-[#9B8BB4]/10 pt-8">
              <h2 className="text-2xl font-bold text-[#584D6D]">16. Contact Us</h2>
              <p>If you have any questions or concerns about these Terms, please contact us at:</p>
              
              <div className="bg-[#9B8BB4]/10 p-6 rounded-lg mt-4">
                <p className="font-bold text-[#584D6D]">Codelka</p>
                <p>Email: <Link href="mailto:codelka.studios@gmail.com" className="text-[#9B8BB4] hover:text-[#584D6D]">codelka.studios@gmail.com</Link></p>
                <p>Website: <Link href="https://codelka.com" className="text-[#9B8BB4] hover:text-[#584D6D]">https://codelka.com</Link></p>
              </div>
            </div>
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

