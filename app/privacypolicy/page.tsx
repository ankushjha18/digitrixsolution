import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Phone, Calendar, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicy() {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Eye className="h-5 w-5" />,
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name, email address, phone number, and company details when you contact us",
            "Billing information and payment details for our services",
            "Professional information such as job title and industry",
            "Communication preferences and marketing consent"
          ]
        },
        {
          subtitle: "Technical Information",
          items: [
            "IP address, browser type, and operating system",
            "Website usage data, including pages visited and time spent",
            "Device information and screen resolution",
            "Cookies and similar tracking technologies data"
          ]
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <Users className="h-5 w-5" />,
      content: [
        {
          subtitle: "Service Provision",
          items: [
            "Deliver and manage our digital marketing and web development services",
            "Process payments and manage billing",
            "Provide customer support and respond to inquiries",
            "Send service-related communications and updates"
          ]
        },
        {
          subtitle: "Business Operations",
          items: [
            "Improve our website and services based on usage analytics",
            "Send marketing communications (with your consent)",
            "Comply with legal obligations and resolve disputes",
            "Protect against fraud and ensure platform security"
          ]
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: <Lock className="h-5 w-5" />,
      content: [
        {
          subtitle: "We may share your information with:",
          items: [
            "Trusted service providers who assist in our operations (payment processors, analytics providers)",
            "Legal authorities when required by law or to protect our rights",
            "Business partners for joint marketing efforts (only with your explicit consent)",
            "Potential buyers in case of business merger or acquisition"
          ]
        },
        {
          subtitle: "We never:",
          items: [
            "Sell your personal information to third parties",
            "Share your data without proper legal basis",
            "Use your information for purposes other than stated in this policy"
          ]
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Shield className="h-5 w-5" />,
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "SSL encryption for all data transmission",
            "Regular security audits and vulnerability assessments",
            "Access controls and employee training on data protection",
            "Secure cloud storage with reputable providers",
            "Regular backups and disaster recovery procedures"
          ]
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      icon: <CheckCircle className="h-5 w-5" />,
      content: [
        {
          subtitle: "You have the right to:",
          items: [
            "Access, update, or delete your personal information",
            "Opt-out of marketing communications at any time",
            "Request data portability or transfer",
            "File a complaint with relevant data protection authorities",
            "Withdraw consent for data processing where applicable"
          ]
        }
      ]
    }
  ];

  return (
    <section>
        <Header />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Shield className="h-16 w-16 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Your privacy is important to us at Digitrix Solution
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Digitrix Solution, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  <span className="font-medium text-blue-600"> https://digitrixsolution-ncol.vercel.app/</span> or engage with our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our website or services, you consent to the data practices described in this policy. 
                  If you do not agree with any part of this policy, please do not use our website or services.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          {sections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              {section.content.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{subsection.subtitle}</h3>
                  <ul className="space-y-2">
                    {subsection.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {/* Cookies Policy */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-shrink-0 p-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. 
              Cookies are small text files stored on your device that help us remember your preferences.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                <p className="text-gray-700">Required for basic website functionality and security.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700">Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700">Used to deliver relevant advertisements and track campaign effectiveness.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Preference Cookies</h3>
                <p className="text-gray-700">Remember your settings and preferences for future visits.</p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, 
              unless a longer retention period is required by law.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">
                  <strong>Typical retention periods:</strong> Customer data (7 years), Website analytics (26 months), 
                  Marketing data (3 years or until consent withdrawal), Support tickets (5 years).
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Contact Us About Privacy</h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, want to exercise your rights, or have concerns about how we handle your data, 
              please don't hesitate to contact us.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:privacy@digitrixsolution.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                    info@digitrixsolutions.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                    +91 7294969479
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-blue-100">
                We will respond to your privacy-related inquiries within 30 days of receipt.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-gray-50 rounded-2xl p-8 mt-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. 
              We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. 
              We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </section>
  );
}