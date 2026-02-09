'use client';

import { useState } from 'react';
import { ArrowLeft, Loader2, Download } from 'lucide-react';
import ImageGenerator from '@/components/generators/ImageGenerator';
import VideoGenerator from '@/components/generators/VideoGenerator';
import AIAssistant from '@/components/generators/AIAssistant';

type Tab = 'assistant' | 'image' | 'video';

export default function Dashboard({ onBackClick }: { onBackClick: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>('assistant');

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={onBackClick}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-4"
            >
              <ArrowLeft size={20} />
              Back to Home
            </button>
            <h1 className="text-4xl font-bold text-white">
              AI Creation Studio
            </h1>
            <p className="text-gray-400 mt-2">
              Unlock your creative potential with AI-powered generation tools
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('assistant')}
            className={`px-6 py-3 font-semibold transition border-b-2 ${
              activeTab === 'assistant'
                ? 'text-blue-400 border-blue-400'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            🤖 AI Assistant
          </button>
          <button
            onClick={() => setActiveTab('image')}
            className={`px-6 py-3 font-semibold transition border-b-2 ${
              activeTab === 'image'
                ? 'text-purple-400 border-purple-400'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            🎨 Image Generator
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-6 py-3 font-semibold transition border-b-2 ${
              activeTab === 'video'
                ? 'text-pink-400 border-pink-400'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            🎬 Video Generator
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
          {activeTab === 'assistant' && <AIAssistant />}
          {activeTab === 'image' && <ImageGenerator />}
          {activeTab === 'video' && <VideoGenerator />}
        </div>

        {/* Quick Tips */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-900/20 border border-blue-700/50 rounded-lg">
            <h3 className="font-bold text-blue-300 mb-2">💡 Pro Tip</h3>
            <p className="text-sm text-gray-300">
              Be specific in your prompts for better results. Include style, mood, and technical details.
            </p>
          </div>
          <div className="p-6 bg-purple-900/20 border border-purple-700/50 rounded-lg">
            <h3 className="font-bold text-purple-300 mb-2">⚡ Speed</h3>
            <p className="text-sm text-gray-300">
              Most generations complete in under 30 seconds. Video processing may take longer.
            </p>
          </div>
          <div className="p-6 bg-green-900/20 border border-green-700/50 rounded-lg">
            <h3 className="font-bold text-green-300 mb-2">🎁 Bonus</h3>
            <p className="text-sm text-gray-300">
              Download all your creations instantly. Full commercial license included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
