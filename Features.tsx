'use client';

import { ImageIcon, Video, Zap, Brain, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: ImageIcon,
    title: 'AI Image Generator',
    description: 'Create stunning, unique images from text descriptions. Perfect for hero banners, social media, and marketing materials.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Video,
    title: 'AI Video Generator',
    description: 'Generate professional videos from scripts. Ideal for tutorials, demos, and promotional content.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'Smart AI Assistant',
    description: 'Tell AI what you need and watch it generate it. Natural language automation at your fingertips.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Enterprise-grade performance with AI processing that completes in seconds, not hours.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track your AI generations, usage patterns, and optimize your workflow with detailed insights.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security. Your data is always protected and private.',
    color: 'from-red-500 to-pink-500',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features for Modern Developers
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to scale your development business with cutting-edge AI technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
