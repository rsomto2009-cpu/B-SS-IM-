# DevMaster AI - Full Stack Developer Business Platform

## 🚀 Project Overview

**DevMaster AI** is a comprehensive, enterprise-grade web application designed to transform your full-stack development business to the next level. This application combines modern UI design with cutting-edge AI features to help you create stunning visuals, automate workflows, and deliver exceptional results.

## ✨ Key Features

### 1. **AI-Powered Image Generator**
- Generate stunning, unique images from text descriptions
- Multiple style options (realistic, abstract, cinematic, digital art, oil painting, manga, 3D render, watercolor)
- Perfect for hero banners, social media, and marketing materials
- One-click download with high-resolution output

### 2. **AI Video Generator**
- Create professional videos from scripts
- Multiple duration options (15s, 30s, 60s, 120s)
- AI voice-over with multiple languages support
- Auto-generated visuals and smooth transitions
- Royalty-free music library included
- Custom branding and watermarks

### 3. **Smart AI Assistant**
- Natural language interface for AI automation
- Tell the AI what you need and it generates it
- Context-aware responses with copy-to-clipboard
- Quick command suggestions
- Support for code, design, content, and more

### 4. **Modern, Professional UI**
- Dark theme with glassmorphism design
- Animated gradient backgrounds
- Smooth transitions and hover effects
- Fully responsive (mobile, tablet, desktop)
- Enterprise-level design aesthetic

### 5. **Business Features**
- Analytics dashboard for tracking generations
- Bank-level encryption and security
- 99% uptime guarantee
- Lightning-fast processing
- Mobile-optimized experience

🎨 **Modern UI/UX**
- Dark & light theme support
- Responsive design
- Technology-focused aesthetic
- Classic and elegant layout

🚀 **Full-Stack Features**
- Next.js 14 with TypeScript
- Tailwind CSS styling
- API integration (OpenAI, Replicate)
- Zustand state management
- Beautiful component library

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with API keys:
```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
OPENAI_API_KEY=your_openai_key
REPLICATE_API_TOKEN=your_replicate_token
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/         # React components
├── pages/             # API routes
├── styles/            # Global styles
├── lib/               # Utility functions
├── hooks/             # Custom React hooks
└── types/             # TypeScript types
```

## API Endpoints

- `POST /api/generate/image` - Generate images from text
- `POST /api/generate/video` - Generate videos from text
- `POST /api/chat` - AI chat endpoint
- `GET /api/status` - Health check

## Build & Deploy

```bash
npm run build
npm start
```

## Technologies Used

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express
- **AI Services**: OpenAI, Replicate
- **State Management**: Zustand
- **Icons**: Lucide React
- **HTTP Client**: Axios

## License

MIT

## Support

For support, please contact: support@devhub.ai
