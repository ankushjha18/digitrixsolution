import React, { useState, useEffect } from 'react';

const ServicesHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  type NodeType = "primary" | "secondary" | "accent";
  type NodeSize = "small" | "medium" | "large";
  
  interface NetworkNode {
    x: number;
    y: number;
    size: NodeSize;
    type: NodeType;
  }
  
  const colorMap: Record<NodeType, string> = {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    accent: "#06b6d4",
  };
  
  const sizeMap: Record<NodeSize, number> = {
    small: 1.5,
    medium: 2,
    large: 2.5,
  };
  

 

  const networkNodes: NetworkNode[] = [
    { x: 20, y: 15, size: 'large', type: 'primary' },
    { x: 60, y: 25, size: 'medium', type: 'secondary' },
    { x: 80, y: 45, size: 'small', type: 'accent' },
    { x: 70, y: 70, size: 'large', type: 'primary' },
    { x: 30, y: 80, size: 'medium', type: 'secondary' },
    { x: 10, y: 60, size: 'small', type: 'accent' },
    { x: 45, y: 40, size: 'medium', type: 'primary' },
    { x: 85, y: 20, size: 'small', type: 'secondary' }
  ];
  

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [1, 6], [6, 3], [0, 6], [2, 7]
  ];

  const codeLines = [
    "const future = await innovation();",
    "deploy.services({ scale: 'infinite' });",
    "optimize.performance(100);",
    "secure.data.encrypt();",
    "await launch.success();"
  ];
  

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 overflow-hidden">
      {/* Animated Background Particles */}

      
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="pl-22 inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-full backdrop-blur-sm animate-slideInLeft">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-sm font-medium text-blue-300">Systems Online</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                  <span className="block text-white">Next-Gen</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-textGlow">
                    Solutions
                  </span>
                </h1>
                
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-slideInLeft" style={{ animationDelay: '0.4s' }}></div>
              </div>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl animate-slideInLeft" style={{ animationDelay: '0.6s' }}>
                Harness the power of cutting-edge technology to transform your business into a digital powerhouse
              </p>

              {/* Service Pills */}
              <div className="flex flex-wrap gap-3 animate-slideInLeft" style={{ animationDelay: '0.8s' }}>
                {['AI Integration', 'Cloud Native', 'DevOps', 'Microservices', 'API First'].map((service, index) => (
                  <div
                    key={service}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-blue-400/30 hover:text-white transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    {service}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft" style={{ animationDelay: '1s' }}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Deploy Now
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group px-8 py-4 text-white font-bold border-2 border-gray-600 rounded-2xl hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m1-7h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    System Demo
                  </span>
                </button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-8 pt-8 animate-slideInLeft" style={{ animationDelay: '1.2s' }}>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">99.9%</div>
                  <div className="text-gray-400 text-sm font-medium">Uptime</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">2.5s</div>
                  <div className="text-gray-400 text-sm font-medium">Load Time</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">10x</div>
                  <div className="text-gray-400 text-sm font-medium">Faster</div>
                </div>
              </div>
            </div>

            {/* Right Side - Network Animation */}
            <div className="relative h-96 lg:h-[600px] animate-slideInRight">
              {/* Code Terminal */}
              <div className="absolute top-0 right-0 w-80 h-48 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl z-20">
                <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm font-mono">terminal.sh</div>
                </div>
                <div className="p-4 space-y-2 font-mono text-sm">
                  {codeLines.map((line, index) => (
                    <div
                      key={index}
                      className="text-green-400 opacity-0 animate-typeIn"
                      style={{ animationDelay: `${index * 0.5 + 2}s` }}
                    >
                      <span className="text-gray-500">$</span> {line}
                    </div>
                  ))}
                </div>
              </div>

              {/* Network Visualization */}
              <div className="absolute inset-0 animate-slideInRight" style={{ animationDelay: '0.3s' }}>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Connections */}
                  {connections.map((connection, index) => {
                    const [start, end] = connection;
                    const startNode = networkNodes[start];
                    const endNode = networkNodes[end];
                    return (
                      <line
                        key={index}
                        x1={startNode.x}
                        y1={startNode.y}
                        x2={endNode.x}
                        y2={endNode.y}
                        stroke="url(#connectionGradient)"
                        strokeWidth="0.3"
                        className={`opacity-30 ${activeNode === start || activeNode === end ? 'animate-pulse opacity-80' : ''}`}
                      />
                    );
                  })}
                  
                  {/* Nodes */}
                  {networkNodes.map((node, index) => {
                    const sizeMap = { small: 1.5, medium: 2, large: 2.5 };
                    const colorMap = {
                      primary: '#3b82f6',
                      secondary: '#8b5cf6',
                      accent: '#06b6d4'
                    };
                    return (
                      <g key={index}>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={sizeMap[node.size]}
                          fill={colorMap[node.type]}
                          className={`${activeNode === index ? 'animate-ping' : ''}`}
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={sizeMap[node.size] * 0.6}
                          fill="white"
                          opacity="0.8"
                        />
                        {activeNode === index && (
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={sizeMap[node.size] * 2}
                            fill="none"
                            stroke={colorMap[node.type]}
                            strokeWidth="0.5"
                            opacity="0.5"
                            className="animate-ping"
                          />
                        )}
                      </g>
                    );
                  })}

                  <defs>
                    <linearGradient id="connectionGradient">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating Data Cards */}
              <div className="absolute bottom-0 left-0 animate-float-slow">
                <div className="w-32 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-xl border border-blue-400/30 p-3">
                  <div className="text-xs text-gray-300 mb-1">API Calls</div>
                  <div className="text-lg font-bold text-blue-400">1.2M</div>
                  <div className="w-full h-1 bg-blue-900/50 rounded-full">
                    <div className="w-3/4 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-8 animate-float-slower">
                <div className="w-28 h-28 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl border border-purple-400/30 p-3 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mb-2 animate-spin" style={{ animationDuration: '3s' }}></div>
                  <div className="text-xs text-gray-300 text-center">Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes typeIn {
          from { opacity: 0; width: 0; }
          to { opacity: 1; width: 100%; }
        }
        
        @keyframes textGlow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }
        
        .animate-slideInLeft { 
          animation: slideInLeft 0.8s ease-out forwards; 
          opacity: 0; 
        }
        
        .animate-slideInRight { 
          animation: slideInRight 0.8s ease-out forwards; 
          opacity: 0; 
        }
        
        .animate-typeIn { 
          animation: typeIn 0.8s ease-out forwards; 
          overflow: hidden;
          white-space: nowrap;
        }
        
        .animate-textGlow { 
          animation: textGlow 2s ease-in-out infinite; 
        }
      `}</style>
    </div>
  );
};

export default ServicesHero;