'use client';

import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/50 mb-8 hover:border-blue-600 transition">
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-sm font-medium text-blue-200">AI-Powered Development Platform</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Transform Your <br /> Development Vision
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Harness the power of AI to create stunning visuals, automate workflows, and elevate your full-stack development business to enterprise level.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center gap-2"
          >
            Start Creating Now
            <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-white hover:border-gray-400 transition">
            Watch Demo
          </button>
        </div>

        {/* Image placeholder - Logo area */}
        <div className="relative mx-auto max-w-4xl">
          <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl border border-gray-700 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles size={64} className="text-white" />
              </div>
              <p className="text-gray-300">Your Brand Logo Here</p>
              <p className="text-sm text-gray-500 mt-2">Upload a logo to personalize your dashboard</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
            <p className="text-gray-300">Developers Powered</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
            <p className="text-gray-300">Assets Generated</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
            <div className="text-3xl font-bold text-pink-400 mb-2">99%</div>
            <p className="text-gray-300">Uptime Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
