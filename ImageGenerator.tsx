'use client';

import { useState } from 'react';
import { Sparkles, Download, Loader2 } from 'lucide-react';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const styles = [
    'realistic',
    'abstract',
    'cinematic',
    'digital art',
    'oil painting',
    'manga',
    '3D render',
    'watercolor',
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert('Please enter a description');
      return;
    }

    setLoading(true);
    try {
      // Simulated AI generation - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a gradient placeholder for demo
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#1e1b4b';
        ctx.fillRect(0, 0, 512, 512);
        ctx.fillStyle = '#6366f1';
        ctx.fillText(`AI Generated: ${prompt.substring(0, 30)}...`, 20, 50);
      }
      setGeneratedImage(canvas.toDataURL());
    } catch (error) {
      alert('Generation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="space-y-4">
        <label className="block">
          <span className="text-white font-semibold mb-2 block">Describe Your Image</span>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., A futuristic software development office with glowing neon lights, cyberpunk aesthetic, high resolution..."
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            rows={4}
          />
        </label>

        <label className="block">
          <span className="text-white font-semibold mb-2 block">Style</span>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            {styles.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              Generate Image
            </>
          )}
        </button>
      </div>

      {/* Generated Image Display */}
      {generatedImage && (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 p-4">
            <img
              src={generatedImage}
              alt="Generated"
              className="w-full rounded-lg"
            />
          </div>
          <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition">
            <Download size={20} />
            Download Image
          </button>
        </div>
      )}

      {/* Inspirations */}
      <div className="space-y-3">
        <p className="text-gray-400 text-sm">💡 Inspiration prompts:</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            'Modern tech startup office',
            'AI code assistant interface',
            'Digital transformation concept',
            'Cloud computing architecture',
          ].map((inspiration, i) => (
            <button
              key={i}
              onClick={() => setPrompt(inspiration)}
              className="text-left p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-gray-300 transition"
            >
              {inspiration}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
