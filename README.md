# 🍯 Pooh - Your Friendly Personal Assistant

> *"Sometimes the smallest things take up the most room in your heart."* - Winnie the Pooh

Meet Pooh, your friendly personal assistant that brings the warmth and helpfulness of everyone's favorite bear to your daily digital life. Like Jarvis, but with the gentle wisdom and caring nature of Pooh Bear.

## ✨ What Pooh Does

Pooh is designed to be your compassionate digital companion, helping you navigate your day with kindness and efficiency. Whether you need help organizing your thoughts, managing tasks, or just want someone to chat with, Pooh is here to help.

### Key Features
- 🎙️ **Natural Voice Interactions** - Talk to Pooh like you would a dear friend
- 🌟 **3D Interactive Experience** - Beautiful immersive interface that feels alive
- 🔄 **Smart Workflow Automation** - Pooh learns your habits and helps streamline your day
- 🔒 **Secure & Personal** - Your data stays private and secure
- 🎨 **Delightful UI** - Clean, modern design that's easy on the eyes

## 🛠️ Tech Stack

- **Frontend**: Three.js + shadcn/ui + React
- **Workflow Engine**: n8n
- **AI Voice**: ElevenLabs
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **Hosting**: Netlify
- **Styling**: Tailwind CSS

## 📁 Project Structure

```
pooh-assistant/
├── README.md
├── .gitignore
├── package.json
├── index.html
├── style.css
├── script.js
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── three/        # Three.js components
│   │   └── voice/        # Voice interaction components
│   ├── lib/
│   │   ├── supabase.js   # Supabase client
│   │   ├── elevenlabs.js # ElevenLabs integration
│   │   └── utils.js      # Utility functions
│   ├── styles/
│   │   └── globals.css   # Global styles
│   └── assets/
│       ├── models/       # 3D models
│       ├── textures/     # 3D textures
│       └── audio/        # Audio files
├── workflows/
│   └── n8n/             # n8n workflow definitions
└── docs/
    ├── SETUP.md
    ├── API.md
    └── DEPLOYMENT.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- ElevenLabs API key
- n8n instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourteam/pooh-assistant.git
   cd pooh-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your API keys and configuration:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_ELEVENLABS_API_KEY=your_elevenlabs_key
   VITE_N8N_WEBHOOK_URL=your_n8n_webhook_url
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` and meet Pooh!

## 🎯 Core Features

### Voice Interaction
- Natural language processing with ElevenLabs
- Warm, friendly voice responses
- Multi-language support
- Emotional intelligence in responses

### 3D Experience
- Interactive 3D environment built with Three.js
- Smooth animations and transitions
- Responsive design that works on all devices
- WebGL-powered visual effects

### Smart Workflows
- Automated task management via n8n
- Custom workflow creation
- Integration with popular productivity tools
- Learning from user behavior patterns

### Security & Privacy
- End-to-end encryption for sensitive data
- Secure authentication with Supabase
- Local processing for sensitive operations
- GDPR compliant data handling

## 🏗️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests
npm run type-check   # TypeScript type checking
```

### Project Architecture

- **Frontend**: React + Vite for fast development
- **3D Rendering**: Three.js with React Three Fiber
- **UI Components**: shadcn/ui for consistent design
- **State Management**: Zustand for simple state management
- **Authentication**: Supabase Auth with social logins
- **Voice Processing**: ElevenLabs for high-quality voice synthesis
- **Workflow Engine**: n8n for complex automation workflows

## 🌟 Contributing

We welcome contributions! Here's how you can help make Pooh even better:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🎨 Design Philosophy

Pooh is designed with these core principles:
- **Kindness First**: Every interaction should feel warm and supportive
- **Simplicity**: Complex tasks should feel effortless
- **Privacy**: Your data is yours, always
- **Accessibility**: Everyone should be able to use Pooh
- **Delight**: Small moments of joy make a big difference

## 🚢 Deployment

### Netlify Deployment

1. **Connect your repository to Netlify**
2. **Set build command**: `npm run build`
3. **Set publish directory**: `dist`
4. **Add environment variables** in Netlify dashboard
5. **Deploy!**

### Environment Variables for Production
```env
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_supabase_key
VITE_ELEVENLABS_API_KEY=your_elevenlabs_key
VITE_N8N_WEBHOOK_URL=your_production_n8n_url
```

## 📚 Documentation

- [Setup Guide](docs/SETUP.md) - Detailed setup instructions
- [API Reference](docs/API.md) - Complete API documentation
- [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment guide

## 🐛 Known Issues

- Voice recognition may require microphone permissions
- 3D models may take time to load on slower connections
- Some older browsers may not support all WebGL features

## 🤝 Team

- **Frontend Development**: [Your names]
- **3D Design**: [Your names]
- **Voice Integration**: [Your names]
- **Workflow Development**: [Your names]
- **UI/UX Design**: [Your names]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the timeless wisdom of Winnie the Pooh
- Built with love for the hackathon community
- Special thanks to all the open-source contributors

---

*"You are braver than you believe, stronger than you seem, and smarter than you think."* - A.A. Milne

Made with 🍯 and ❤️ by the Pooh Team