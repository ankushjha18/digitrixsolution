"use client"
import React, { useState, useEffect, useRef } from 'react';

const TermsOfService = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [progressWidth, setProgressWidth] = useState(14.3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const termsSection = [
    {
      number: '01',
      title: 'Agreement to Terms',
      content: 'By accessing and using Digitrix Solutions services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and Digitrix Solutions.',
      icon: '📋'
    },
    {
      number: '02', 
      title: 'Services Description',
      content: 'Digitrix Solutions provides comprehensive digital marketing services including web development, SEO optimization, social media management, content creation, and digital strategy consulting. Our services are designed to enhance your digital presence and drive business growth.',
      icon: '🚀'
    },
    {
      number: '03',
      title: 'User Responsibilities',
      content: 'You agree to provide accurate information, maintain confidentiality of your account credentials, use our services lawfully, and comply with all applicable regulations. You are responsible for all activities that occur under your account.',
      icon: '👤'
    },
    {
      number: '04',
      title: 'Payment Terms',
      content: 'Payment terms are specified in your service agreement. All fees are non-refundable unless otherwise stated. Late payments may result in service suspension. We reserve the right to modify pricing with 30 days notice.',
      icon: '💳'
    },
    {
      number: '05',
      title: 'Intellectual Property',
      content: 'All original content, designs, and materials created by Digitrix Solutions remain our intellectual property until full payment is received. Upon payment, specified deliverables are transferred to you with appropriate usage rights.',
      icon: '⚖️'
    },
    {
      number: '06',
      title: 'Privacy & Data Protection',
      content: 'We are committed to protecting your privacy and handling your data responsibly. Our data collection and usage practices are governed by our Privacy Policy, which complies with applicable data protection regulations including GDPR.',
      icon: '🔒'
    },
    {
      number: '07',
      title: 'Limitation of Liability',
      content: 'Digitrix Solutions liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages. Our maximum liability shall not exceed the total amount paid by you in the 12 months preceding the claim.',
      icon: '⚠️'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSection(prev => (prev + 1) % termsSection.length);
        setProgressWidth(prev => {
          const newWidth = ((currentSection + 1) / termsSection.length) * 100;
          return newWidth > 100 ? 14.3 : newWidth;
        });
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentSection, termsSection.length]);

  const handleSectionClick = (index:number) => {
    setCurrentSection(index);
    setProgressWidth(((index + 1) / termsSection.length) * 100);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Legal Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Welcome to Digitrix Solutions. Please read these terms carefully as they govern your use of our digital marketing services and platform.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Last Updated: September 2024</span>
              <span>•</span>
              <span>Effective Date: September 1, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Terms Section */}
      <div ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-foreground">Terms Overview</h2>
              <button
                onClick={toggleAutoPlay}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
              >
                {isAutoPlaying ? '⏸️' : '▶️'}
                <span className="text-sm font-medium">
                  {isAutoPlaying ? 'Pause' : 'Auto Play'}
                </span>
              </button>
            </div>
            <div className="w-full bg-border rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {termsSection.map((section, index) => (
                <div
                  key={index}
                  onClick={() => handleSectionClick(index)}
                  className={`group cursor-pointer p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    currentSection === index
                      ? 'bg-primary/5 border-primary shadow-lg scale-105'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      currentSection === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground group-hover:bg-primary/20'
                    }`}>
                      {section.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-base mb-2 transition-colors ${
                        currentSection === index ? 'text-primary' : 'text-foreground'
                      }`}>
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {section.content.substring(0, 100)}...
                      </p>
                    </div>
                    <div className="text-2xl opacity-60">
                      {section.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Display */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-2xl">
                    {termsSection[currentSection]?.icon}
                  </div>
                  <div>
                    <div className="text-primary font-medium text-sm">
                      Section {termsSection[currentSection]?.number}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {termsSection[currentSection]?.title}
                    </h3>
                  </div>
                </div>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {termsSection[currentSection]?.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Terms */}
      <div className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Additional Important Terms</h2>
            <p className="text-muted-foreground">Please review these additional terms that govern your relationship with Digitrix Solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center">
                  🚫
                </div>
                <h3 className="text-xl font-semibold">Termination</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Either party may terminate services with 30 days written notice. Immediate termination may occur for breach of terms, non-payment, or illegal activities.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 30 days notice required for standard termination</li>
                <li>• Immediate termination for breach of contract</li>
                <li>• Final invoices due within 15 days of termination</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                  🔄
                </div>
                <h3 className="text-xl font-semibold">Modifications</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We may update these terms periodically. Continued use of our services after changes constitutes acceptance of modified terms.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 30 days notice for material changes</li>
                <li>• Email notification to registered users</li>
                <li>• Updated terms effective immediately upon posting</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
                  🌍
                </div>
                <h3 className="text-xl font-semibold">Governing Law</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                These terms are governed by Indian law. Any disputes will be resolved through arbitration in New Delhi, India, under Indian Arbitration and Conciliation Act.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Governed by laws of India</li>
                <li>• Disputes resolved in New Delhi jurisdiction</li>
                <li>• Arbitration preferred for dispute resolution</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  📞
                </div>
                <h3 className="text-xl font-semibold">Contact Information</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                For questions about these terms or our services, please contact our legal team. We're here to help clarify any concerns you may have.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Email: legal@digitrixsolutions.in</li>
                <li>• Phone: +91 (XXX) XXX-XXXX</li>
                <li>• Response within 48 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            By proceeding with our services, you acknowledge that you have read and agree to these terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Accept Terms & Continue
            </button>
            <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Download PDF
            </button>
          </div>
          <p className="text-primary-foreground/70 text-sm mt-6">
            Questions about these terms? Contact us at legal@digitrixsolutions.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;