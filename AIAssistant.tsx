'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Copy } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "👋 Hello! I'm your AI Development Assistant. Tell me what you need and I'll generate it for you. I can help with code, designs, content, and much more!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 1000));

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: generateMockResponse(input),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateMockResponse = (userInput: string): string => {
    const responses: { [key: string]: string } = {
      code: "I'll generate a React component for you:\n\n```tsx\nexport default function MyComponent() {\n  return <div>Your component here</div>;\n}\n```\n\nThis is a clean, reusable component ready for your project!",
      design: "I can help you create beautiful designs. Here's a color scheme recommendation:\n• Primary: #6366F1 (Indigo)\n• Secondary: #EC4899 (Pink)\n• Background: #0F172A (Slate)\n\nThese colors work great together for a modern tech UI!",
      content: "Here's some engaging copy for your business:\n\n🚀 Transform Your Development Vision\n\nElevate your full-stack development business to enterprise level with cutting-edge AI technology. Generate stunning visuals, automate complex workflows, and deliver exceptional results faster than ever.\n\n✨ Power your creativity. Automate your potential.",
      image: "Perfect! I'll generate an image for you. What style would you prefer?\n• Realistic photography\n• Digital art\n• 3D rendering\n• Abstract concept\n\nLet me know and I'll create something amazing!",
      video: "Great idea! I can help you create a video. Here's my suggestion:\n\n📹 Video Outline:\n1. Hook (3 seconds)\n2. Problem statement (5 seconds)\n3. Solution showcase (15 seconds)\n4. Call to action (5 seconds)\n\nWould you like me to generate this?",
    };

    // Find matching response
    const lowerInput = userInput.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
      if (lowerInput.includes(key)) {
        return value;
      }
    }

    return `✨ Great request! I'll help you with that.\n\n${userInput}\n\nI'm processing your request and will generate the best result for your needs. What specific format or style would you prefer?`;
  };

  const handleCopyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
    alert('Copied to clipboard!');
  };

  return (
    <div className="flex flex-col h-[600px] bg-gray-700/30 rounded-lg overflow-hidden">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-600 text-gray-100 rounded-bl-none'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              {message.type === 'assistant' && (
                <button
                  onClick={() => handleCopyMessage(message.content)}
                  className="text-xs text-gray-300 mt-2 hover:text-white flex items-center gap-1"
                >
                  <Copy size={12} />
                  Copy
                </button>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-600 text-gray-100 px-4 py-3 rounded-lg rounded-bl-none flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              <span className="text-sm">AI is thinking...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="border-t border-gray-600 p-4 bg-gray-800/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Tell AI what you need... (e.g., 'generate code for', 'create design for', 'write content about')"
            className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            disabled={loading}
          />
          <button
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
            className="px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
          </button>
        </div>

        {/* Quick Commands */}
        <div className="mt-3 flex flex-wrap gap-2">
          {['Generate Code', 'Create Design', 'Write Content', 'Make Image', 'Create Video'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => setInput(cmd.toLowerCase())}
              className="text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
