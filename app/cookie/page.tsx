"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const CookiePolicy = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [progressWidth, setProgressWidth] = useState(16.67);
  const [cookiePreferences, setCookiePreferences] = useState<Record<CookieType, boolean>>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const cookieSections = [
    {
      number: '01',
      title: 'What Are Cookies?',
      content: 'Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing site usage, and personalizing content. Cookies contain information that is transferred to your device\'s hard drive.',
      icon: '🍪'
    },
    {
      number: '02', 
      title: 'Types of Cookies We Use',
      content: 'We use four main types of cookies: Essential cookies for basic site functionality, Analytics cookies to understand user behavior, Marketing cookies for personalized advertising, and Functional cookies to enhance your experience with additional features and personalization.',
      icon: '📊'
    },
    {
      number: '03',
      title: 'Essential Cookies',
      content: 'These cookies are necessary for our website to function properly and cannot be disabled. They enable core functionality like security, network management, and accessibility. Essential cookies don\'t store personally identifiable information but are crucial for site operation.',
      icon: '🔧'
    },
    {
      number: '04',
      title: 'Analytics Cookies',
      content: 'Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics and similar tools to improve our website performance, user experience, and content relevance.',
      icon: '📈'
    },
    {
      number: '05',
      title: 'Marketing Cookies',
      content: 'Marketing cookies track visitors across websites to display relevant advertisements. They help us measure advertising campaign effectiveness and provide personalized marketing content. These cookies may be set by third-party advertising partners.',
      icon: '🎯'
    },
    {
      number: '06',
      title: 'Managing Your Preferences',
      content: 'You have full control over cookie preferences except for essential cookies. You can modify settings anytime through our cookie preference center, your browser settings, or by contacting us directly. Changes apply immediately to future visits.',
      icon: '⚙️'
    }
  ];

  const cookieTypes = [
    {
      name: 'Essential',
      key: 'essential',
      description: 'Required for basic site functionality',
      examples: ['Session management', 'Security features', 'Load balancing'],
      duration: 'Session/1 year',
      canDisable: false,
      color: 'text-destructive'
    },
    {
      name: 'Analytics',
      key: 'analytics', 
      description: 'Help us understand site usage patterns',
      examples: ['Google Analytics', 'Heat mapping', 'Performance monitoring'],
      duration: '2 years',
      canDisable: true,
      color: 'text-primary'
    },
    {
      name: 'Marketing',
      key: 'marketing',
      description: 'Used for personalized advertising',
      examples: ['Facebook Pixel', 'Google Ads', 'Retargeting'],
      duration: '1-2 years',
      canDisable: true,
      color: 'text-accent'
    },
    {
      name: 'Functional',
      key: 'functional',
      description: 'Enhance your experience with additional features',
      examples: ['Language preferences', 'Theme settings', 'Chat widgets'],
      duration: '1 year',
      canDisable: true,
      color: 'text-secondary'
    }
  ];



  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSection(prev => (prev + 1) % cookieSections.length);
        setProgressWidth(prev => {
          const newWidth = ((currentSection + 1) / cookieSections.length) * 100;
          return newWidth > 100 ? 16.67 : newWidth;
        });
      }, 4500);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentSection, cookieSections.length]);

  const handleSectionClick = (index:number) => {
    setCurrentSection(index);
    setProgressWidth(((index + 1) / cookieSections.length) * 100);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

type CookieType = 'essential' | 'analytics' | 'marketing' | 'functional';


const handleCookieToggle = (type: CookieType) => {
    if (type === 'essential') return; // cannot disable essential cookies
  
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  


  const acceptAllCookies = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    });
  };

  const rejectOptionalCookies = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 py-20">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Privacy & Data
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Learn how Digitrix Solutions uses cookies to enhance your browsing experience, analyze website performance, and provide personalized content.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Last Updated: September 2024</span>
              <span>•</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Cookie Information Section */}
      <div ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-foreground">Cookie Information</h2>
              <button
                onClick={toggleAutoPlay}
                className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors"
              >
                {isAutoPlaying ? '⏸️' : '▶️'}
                <span className="text-sm font-medium">
                  {isAutoPlaying ? 'Pause' : 'Auto Play'}
                </span>
              </button>
            </div>
            <div className="w-full bg-border rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-500 ease-out"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {cookieSections.map((section, index) => (
                <div
                  key={index}
                  onClick={() => handleSectionClick(index)}
                  className={`group cursor-pointer p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    currentSection === index
                      ? 'bg-accent/5 border-accent shadow-lg scale-105'
                      : 'bg-card border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      currentSection === index
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground group-hover:bg-accent/20'
                    }`}>
                      {section.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-base mb-2 transition-colors ${
                        currentSection === index ? 'text-accent' : 'text-foreground'
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
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-2xl">
                    {cookieSections[currentSection]?.icon}
                  </div>
                  <div>
                    <div className="text-accent font-medium text-sm">
                      Section {cookieSections[currentSection]?.number}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {cookieSections[currentSection]?.title}
                    </h3>
                  </div>
                </div>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {cookieSections[currentSection]?.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Management */}
      <div className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Manage Your Cookie Preferences</h2>
            <p className="text-muted-foreground">Customize which cookies you'd like to accept. Essential cookies cannot be disabled as they're required for basic site functionality.</p>
          </div>

          <div className="space-y-6 mb-12">
            {cookieTypes.map((type) => (
              <div key={type.key} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-xl font-semibold ${type.color}`}>
                      {type.name} Cookies
                    </h3>
                    {!type.canDisable && (
                      <span className="bg-destructive/10 text-destructive px-2 py-1 rounded text-xs font-medium">
                        Required
                      </span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookiePreferences[type.key as CookieType]}
                      onChange={() => handleCookieToggle(type.key as CookieType)}
                      disabled={!type.canDisable}
                      className="w-5 h-5 rounded border-2 border-border focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{type.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {type.examples.map((example, index) => (
                        <li key={index}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Duration:</h4>
                    <p className="text-sm text-muted-foreground">{type.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={acceptAllCookies}
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Accept All Cookies
            </button>
            <button
              onClick={rejectOptionalCookies}
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
            >
              Accept Essential Only
            </button>
          </div>
        </div>
      </div>

      {/* Third-Party Cookies & Additional Information */}
      <div className="py-20 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">We use trusted third-party services that may set their own cookies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  📊
                </div>
                <h3 className="text-xl font-semibold">Google Analytics</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Helps us understand website traffic and user behavior to improve our services.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Tracks page views and user sessions</li>
                <li>• Provides demographic insights</li>
                <li>• Duration: 2 years</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                  📱
                </div>
                <h3 className="text-xl font-semibold">Social Media</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Enables social sharing features and tracks engagement with our content.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Facebook and LinkedIn pixels</li>
                <li>• Social sharing functionality</li>
                <li>• Duration: 1-2 years</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
                  🎯
                </div>
                <h3 className="text-xl font-semibold">Advertising Partners</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Deliver relevant advertisements and measure campaign effectiveness.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Google Ads and remarketing</li>
                <li>• Conversion tracking</li>
                <li>• Duration: 1-2 years</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  🔧
                </div>
                <h3 className="text-xl font-semibold">Performance Tools</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Monitor website performance and identify areas for improvement.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Error tracking and monitoring</li>
                <li>• Performance analytics</li>
                <li>• Duration: 1 year</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16 bg-gradient-to-r from-accent via-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Our Cookie Policy?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            We're committed to transparency about how we use cookies and protect your privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Contact Privacy Team
            </button>
            </Link>
            <Link href="/privacypolicy" passHref>
            <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              View Privacy Policy
            </button>
            </Link>
          </div>
          <p className="text-primary-foreground/70 text-sm mt-6">
            Email us at privacy@digitrixsolutions.in for cookie-related inquiries
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;