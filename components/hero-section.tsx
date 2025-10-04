"use client"

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Mail } from 'lucide-react';
import PopupForm from './popup_form';
import Link from 'next/link';


type NodeType = {
  id: number;
  x: number;
  y: number;
  delay: number;
};

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState<NodeType[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const newNodes = Array.from({ length: 30 }, (_, i) => ({
      id: i as number,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 overflow-hidden flex items-center justify-center">
      {/* Circuit Board Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Horizontal Lines */}
            <line x1="0" y1="50" x2="80" y2="50" stroke="rgb(168, 85, 247)" strokeWidth="2" opacity="0.5">
              <animate attributeName="x2" values="0;80;0" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="120" y1="50" x2="200" y2="50" stroke="rgb(168, 85, 247)" strokeWidth="2" opacity="0.5" />
            
            <line x1="50" y1="100" x2="150" y2="100" stroke="rgb(236, 72, 153)" strokeWidth="2" opacity="0.5">
              <animate attributeName="x2" values="50;150;50" dur="3s" repeatCount="indefinite" />
            </line>
            
            <line x1="0" y1="150" x2="100" y2="150" stroke="rgb(168, 85, 247)" strokeWidth="2" opacity="0.5" />
            <line x1="120" y1="150" x2="200" y2="150" stroke="rgb(168, 85, 247)" strokeWidth="2" opacity="0.5">
              <animate attributeName="x1" values="120;200;120" dur="5s" repeatCount="indefinite" />
            </line>
            
            {/* Vertical Lines */}
            <line x1="80" y1="0" x2="80" y2="80" stroke="rgb(168, 85, 247)" strokeWidth="2" opacity="0.5" />
            <line x1="80" y1="120" x2="80" y2="200" stroke="rgb(168, 85, 247)" strokeWidth="2" opacity="0.5">
              <animate attributeName="y2" values="120;200;120" dur="4s" repeatCount="indefinite" />
            </line>
            
            <line x1="150" y1="50" x2="150" y2="150" stroke="rgb(236, 72, 153)" strokeWidth="2" opacity="0.5">
              <animate attributeName="y1" values="50;0;50" dur="3.5s" repeatCount="indefinite" />
            </line>
            
            {/* Circuit Nodes */}
            <circle cx="80" cy="50" r="4" fill="rgb(168, 85, 247)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="150" cy="100" r="4" fill="rgb(236, 72, 153)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="150" r="4" fill="rgb(168, 85, 247)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Binary Code Rain */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400 font-mono text-sm"
            style={{
              left: `${i * 7}%`,
              animation: `binaryFall ${8 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="mb-4">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Network Nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {nodes.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="3"
              fill="rgb(168, 85, 247)"
              opacity="0.6"
            >
              <animate
                attributeName="r"
                values="3;6;3"
                dur="3s"
                repeatCount="indefinite"
                begin={`${node.delay}s`}
              />
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="3s"
                repeatCount="indefinite"
                begin={`${node.delay}s`}
              />
            </circle>
            {i < nodes.length - 1 && Math.random() > 0.5 && (
              <line
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${nodes[i + 1].x}%`}
                y2={`${nodes[i + 1].y}%`}
                stroke="rgb(168, 85, 247)"
                strokeWidth="1"
                opacity="0.2"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.4;0.1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </line>
            )}
          </g>
        ))}
      </svg>

      {/* Code Brackets Floating */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {['<', '>', '{', '}', '/', '</>'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-6xl font-bold text-purple-500"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `floatCode ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Cursor Glow Effect */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300 text-sm hover:bg-purple-500/20 transition-all duration-300 cursor-pointer group">
          <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          <span>Digital Innovation Studio</span>
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300">
            Transform Your
          </span>
          <br />
          <span className="inline-block text-white hover:text-purple-300 transition-colors duration-500">
            Digital Presence
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          We craft cutting-edge digital experiences that captivate audiences and drive results through innovation and creativity
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Start Project Button */}
          <PopupForm 
          trigger={
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10 flex items-center gap-2">
              Start Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          }
          />

          {/* Contact Us Button */}
          <Link href="/contact">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-pink-500">
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Contact Us
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          </Link>
        </div>

        {/* Stats or Features /}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { num: '500+', label: 'Projects' },
            { num: '98%', label: 'Satisfaction' },
            { num: '24/7', label: 'Support' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="group cursor-pointer"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.num}
              </div>
              <div className="text-gray-400 mt-2 group-hover:text-purple-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Animated Styles */}
      <style jsx>{`
        @keyframes floatCode {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
            opacity: 0.4;
          }
        }
        
        @keyframes binaryFall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }

        .bg-300 {
          background-size: 300%;
        }
      `}</style>
    </div>
  );
}