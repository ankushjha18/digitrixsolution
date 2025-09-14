import React, { useState, useEffect, useRef } from 'react';

const ProcessSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progressWidth, setProgressWidth] = useState(25);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef(null);

  const processSteps = [
    {
      number: '01',
      icon: '🌐',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business goals, target audience, and project requirements to create a solid foundation for success.'
    },
    {
      number: '02',
      icon: '🎨',
      title: 'Design & Planning',
      description: 'Our team creates detailed wireframes, designs, and project roadmaps for your approval, ensuring every detail is perfect.'
    },
    {
      number: '03',
      icon: '⚡',
      title: 'Development & Testing',
      description: 'We build your solution using best practices, with rigorous testing at every stage to ensure flawless functionality.'
    },
    {
      number: '04',
      icon: '🚀',
      title: 'Launch & Growth',
      description: 'We deploy your project and provide ongoing support to ensure continued success and optimal performance.'
    }
  ];

  const activateStep = (stepIndex:number) => {
    setCurrentStep(stepIndex);
    const newProgressWidth = ((stepIndex + 1) / processSteps.length) * 100;
    setProgressWidth(newProgressWidth);
  };

  const nextStep = () => {
    const newStep = (currentStep + 1) % processSteps.length;
    activateStep(newStep);
  };

  const startAutoProgress = () => {
    activateStep(0);
    intervalRef.current = setInterval(() => {
      setCurrentStep(prev => {
        const newStep = (prev + 1) % processSteps.length;
        const newProgressWidth = ((newStep + 1) / processSteps.length) * 100;
        setProgressWidth(newProgressWidth);
        return newStep;
      });
    }, 3000);
  };

  const stopAutoProgress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleAutoProgress = () => {
    if (isAutoPlaying) {
      stopAutoProgress();
      setIsAutoPlaying(false);
    } else {
      startAutoProgress();
      setIsAutoPlaying(true);
    }
  };

  const resetProgress = () => {
    stopAutoProgress();
    setCurrentStep(0);
    setProgressWidth(25);
    setIsAutoPlaying(false);
  };

  const handleCardClick = (index:number) => {
    setCurrentStep(index);
    activateStep(index);
    
    if (isAutoPlaying) {
      stopAutoProgress();
      intervalRef.current = setInterval(() => {
        setCurrentStep(prev => {
          const newStep = (prev + 1) % processSteps.length;
          const newProgressWidth = ((newStep + 1) / processSteps.length) * 100;
          setProgressWidth(newProgressWidth);
          return newStep;
        });
      }, 3000);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startAutoProgress();
    }, 500);

    return () => {
      clearTimeout(timer);
      stopAutoProgress();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isAutoPlaying) {
            startAutoProgress();
            setIsAutoPlaying(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-blue-100">
      <style jsx>{`
        @keyframes titleGlow {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.2); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        .title-glow {
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        .bounce-animation {
          animation: bounce 1s ease-in-out;
        }

        .float-1 {
          animation: float 6s ease-in-out infinite;
        }

        .float-2 {
          animation: float 6s ease-in-out infinite 2s;
        }

        .float-3 {
          animation: float 6s ease-in-out infinite 4s;
        }

        .glassmorphism {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-glassmorphism {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }

        .gradient-text {
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .active-gradient-text {
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .gradient-border {
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
        }

        .progress-bar {
          background: linear-gradient(90deg, #667eea, #764ba2);
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }
      `}</style>

      <div 
        ref={sectionRef}
        className="max-w-7xl w-full glassmorphism rounded-3xl p-16 shadow-2xl relative overflow-hidden"
      >
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-200 to-blue-200 opacity-30 float-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-30 float-2"></div>
          <div className="absolute top-1/3 right-1/5 w-20 h-20 rounded-full bg-gradient-to-r from-purple-300 to-pink-200 opacity-30 float-3"></div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text mb-4 title-glow">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A proven methodology that ensures your project's success from concept to launch with innovative solutions and seamless execution.
          </p>
        </div>

        {/* Process Container */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full progress-bar rounded-full transition-all duration-[2000ms] ease-in-out"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`card-glassmorphism rounded-3xl p-10 text-center transition-all duration-500 cursor-pointer border-2 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ${
                  currentStep === index 
                    ? 'opacity-100 scale-100 translate-y-0 border-purple-300 shadow-purple-200' 
                    : 'opacity-60 scale-95 translate-y-8 border-transparent'
                }`}
                onClick={() => handleCardClick(index)}
              >
                {/* Step Number */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  {currentStep === index && (
                    <div className="absolute -inset-1 gradient-border rounded-full opacity-70 pulse-animation"></div>
                  )}
                  <div className="relative w-full h-full gradient-bg rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Step Icon */}
                <div className={`text-4xl mb-4 transition-all duration-500 ${
                  currentStep === index ? 'bounce-animation' : ''
                }`}>
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  currentStep === index ? 'active-gradient-text' : 'text-gray-800'
                }`}>
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={toggleAutoProgress}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg ${
                isAutoPlaying 
                  ? 'gradient-bg text-white shadow-purple-300' 
                  : 'bg-white text-purple-600 border border-purple-300 hover:bg-purple-50'
              }`}
            >
              {isAutoPlaying ? 'Auto Play' : 'Start Auto'}
            </button>
            <button
              onClick={resetProgress}
              className="px-6 py-3 rounded-full font-semibold bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;