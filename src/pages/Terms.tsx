
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Spotlight } from "@/components/ui/spotlight";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background hero-gradient">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-start pt-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-background/20 backdrop-blur-sm p-8 md:p-12">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
            
            <div className="relative z-10">
              <h1 className="text-4xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-b from-mint to-mint-muted mb-8">
                Terms and Conditions
              </h1>

              <div className="prose prose-invert max-w-none">
                <p className="text-mint/80">Last updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-2xl font-orbitron text-mint mt-8">1. Introduction</h2>
                <p>
                  Welcome to programminglife.io. These Terms and Conditions govern your use of our website
                  and services. By accessing or using our services, you agree to be bound by these terms.
                </p>

                <h2 className="text-2xl font-orbitron text-mint mt-8">2. Applicable Law</h2>
                <p>
                  These Terms and Conditions are governed by and construed in accordance with Swiss law. 
                  Any disputes shall be subject to the exclusive jurisdiction of the Swiss courts.
                </p>

                <h2 className="text-2xl font-orbitron text-mint mt-8">3. Service Description</h2>
                <p>
                  We provide mentorship and educational services in programming and technology. Our services
                  include but are not limited to online tutorials, mentorship sessions, and educational content.
                </p>

                <h2 className="text-2xl font-orbitron text-mint mt-8">4. Privacy and Data Protection</h2>
                <p>
                  We comply with Swiss Federal Act on Data Protection (FADP) and, where applicable, the EU
                  General Data Protection Regulation (GDPR). Your personal data is collected and processed
                  in accordance with our Privacy Policy.
                </p>

                <h2 className="text-2xl font-orbitron text-mint mt-8">5. User Obligations</h2>
                <p>
                  Users must:
                </p>
                <ul className="list-disc pl-6 text-mint/80">
                  <li>Be at least 16 years old or have parental consent</li>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of their account credentials</li>
                  <li>Use the services in compliance with Swiss law and these terms</li>
                </ul>

                <h2 className="text-2xl font-orbitron text-mint mt-8">6. Intellectual Property</h2>
                <p>
                  All content on programminglife.io, including but not limited to text, graphics, logos,
                  and code examples, is protected by Swiss and international intellectual property laws.
                </p>

                <h2 className="text-2xl font-orbitron text-mint mt-8">7. Payment Terms</h2>
                <p>
                  All prices are in Swiss Francs (CHF) unless otherwise stated. Payments are processed
                  securely through our payment providers in compliance with Swiss financial regulations.
                </p>

                <h2 className="text-2xl font-orbitron text-mint mt-8">8. Cancellation and Refunds</h2>
                <p>
                  In accordance with Swiss law, users have the right to cancel services within 14 days
                  of purchase, provided the service has not been fully delivered. Refunds will be
                  processed in accordance with our refund policy.
                </p>

                <h2 className="text-2xl font-orbitron text-mint mt-8">9. Limitation of Liability</h2>
                <p>
                  To the extent permitted by Swiss law, we shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages resulting from your use
                  of our services.
                </p>

                <h2 className="text-2xl font-orbitron text-mint mt-8">10. Contact Information</h2>
                <p>
                  For any questions regarding these terms, please contact us at:
                  <br />
                  Email: contact@programminglife.io
                  <br />
                  Address: Switzerland
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
