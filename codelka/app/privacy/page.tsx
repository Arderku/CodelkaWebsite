import { lexend } from '../../fonts'

export default function PrivacyPolicy() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#F6F4F9] to-white ${lexend.className}`}>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="prose prose-lg max-w-none">
          {/* Privacy Policy Content */}
          <div data-custom-class="body">
            {/* The entire privacy policy content goes here */}
            <div>
              <strong>
                <span style={{ fontSize: '26px' }}>
                  <span data-custom-class="title">PRIVACY POLICY</span>
                </span>
              </strong>
            </div>
            <div><br /></div>
            <div>
              <span style={{ color: 'rgb(127, 127, 127)' }}>
                <strong>
                  <span style={{ fontSize: '15px' }}>
                    <span data-custom-class="subtitle">Last updated January 04, 2025</span>
                  </span>
                </strong>
              </span>
            </div>
            {/* Rest of the privacy policy content */}
          </div>
        </div>
      </div>
    </div>
  )
}

