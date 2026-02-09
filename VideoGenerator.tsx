'use client';

import { useState } from 'react';
import { Video, Download, Loader2 } from 'lucide-react';

export default function VideoGenerator() {
  const [script, setScript] = useState('');
  const [duration, setDuration] = useState('30');
  const [loading, setLoading] = useState(false);
  const [videoGenerated, setVideoGenerated] = useState(false);

  const durations = ['15', '30', '60', '120'];

  const handleGenerate = async () => {
    if (!script.trim()) {
      alert('Please enter a script');
      return;
    }

    setLoading(true);
    try {
      // Simulated video generation
      await new Promise(resolve => setTimeout(resolve, 3000));
      setVideoGenerated(true);
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
          <span className="text-white font-semibold mb-2 block">Write Your Script</span>
          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            placeholder="E.g., Welcome to DevMaster, the ultimate platform for full-stack developers. Watch how AI transforms your creative ideas into stunning visual content..."
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            rows={5}
          />
        </label>

        <label className="block">
          <span className="text-white font-semibold mb-2 block">Video Duration</span>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            {durations.map((d) => (
              <option key={d} value={d}>
                {d} seconds
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Generating Video... {duration}s
            </>
          ) : (
            <>
              <Video size={20} />
              Generate Video
            </>
          )}
        </button>
      </div>

      {/* Video Generated State */}
      {videoGenerated && (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 p-4 aspect-video flex items-center justify-center">
            <div className="text-center">
              <Video size={48} className="text-pink-400 mx-auto mb-2" />
              <p className="text-gray-300">Video Ready: {duration}s</p>
              <p className="text-gray-500 text-sm mt-1">MP4 • Full HD • 60fps</p>
            </div>
          </div>
          <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition">
            <Download size={20} />
            Download Video
          </button>
        </div>
      )}

      {/* Script Templates */}
      <div className="space-y-3">
        <p className="text-gray-400 text-sm">📝 Script templates:</p>
        <div className="space-y-2">
          {[
            { title: 'Product Demo', desc: 'Showcase your software features' },
            { title: 'Tutorial', desc: 'Step-by-step learning content' },
            { title: 'Testimonial', desc: 'Customer success story' },
            { title: 'Promotional', desc: 'Marketing & brand video' },
          ].map((template, i) => (
            <button
              key={i}
              onClick={() => setScript(template.desc)}
              className="w-full text-left p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
            >
              <p className="font-semibold text-white">{template.title}</p>
              <p className="text-sm text-gray-400">{template.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-700/50 p-4 rounded-lg">
        <p className="text-gray-300 text-sm">✨ Features:</p>
        <ul className="text-gray-400 text-sm mt-2 space-y-1">
          <li>✓ AI voice-over with multiple languages</li>
          <li>✓ Auto-generated visuals and transitions</li>
          <li>✓ Royalty-free music library</li>
          <li>✓ Custom branding & watermarks</li>
        </ul>
      </div>
    </div>
  );
}
