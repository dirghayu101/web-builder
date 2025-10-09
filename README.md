# 🚀 Web Builder - AI-Powered Website Creation Platform

**Build your wildest ideas with AI** - Create stunning websites by simply chatting with our intelligent assistant. No coding required!

![Web Builder Preview](./images/preview-pic-1.png)

## ✨ Features

- 🤖 **AI-Powered Development**: Chat with AI to build complete websites from any description
- 🎨 **Unlimited Creativity**: Build any website you can imagine - no templates required
- 🔧 **Live Code Editor**: View and edit generated code in real-time
- 📱 **Responsive Design**: Mobile-first, responsive layouts out of the box
- 🌙 **Dark/Light Mode**: Beautiful themes for any preference
- 👤 **User Authentication**: Secure sign-up and project management
- 💳 **Subscription Plans**: Flexible pricing with usage tracking
- 🔄 **Real-time Updates**: See your changes instantly as you build

## 🖼️ Screenshots

### AI Chat Interface

![Chat Interface](./images/preview-pic-2.png)

### Live Preview & Code Editor

![Code Editor](./images/preview-pic-3.png)

### Project Dashboard

![Dashboard](./images/preview-pic-4.png)

### Template Gallery

![Templates](./images/preview-pic-5.png)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI Components
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **AI Integration**: Inngest Agent Kit with OpenAI/Gemini
- **Code Execution**: E2B Code Interpreter
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- OpenAI API key
- Clerk account for authentication

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/web-builder.git
   cd web-builder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/webbuilder"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   OPENAI_API_KEY="your_openai_api_key"
   E2B_API_KEY="your_e2b_api_key"
   INNGEST_EVENT_KEY="your_inngest_key"
   SANDBOX_TEMPLATE_NAME="nextjs"
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How It Works

1. **Create a Project**: Sign up and start a new project with a simple prompt
2. **Chat with AI**: Describe what you want to build in natural language
3. **Watch Magic Happen**: Our AI agent generates complete, functional websites
4. **Preview & Edit**: See live previews and edit the generated code

## � What Can You Build?

Web Builder can build **any website** you can imagine! Simply describe your idea in natural language, and watch as the AI creates a fully functional, responsive website. Here are some popular examples:

- 🎬 **Netflix Clone** - Streaming platform with hero banners and movie grids
- 📦 **Admin Dashboard** - Professional dashboards with charts and tables  
- 📋 **Kanban Board** - Task management with drag-and-drop functionality
- 🗂️ **File Manager** - Document organization with folder navigation
- 📺 **YouTube Clone** - Video platform with thumbnails and categories
- 🛍️ **E-commerce Store** - Shopping experience with cart functionality
- 🏡 **Airbnb Clone** - Property listings with filters and modals
- 🎵 **Spotify Clone** - Music player with playlists and controls

**But that's just the beginning!** You can also create:

- Portfolio websites
- Landing pages
- Blog platforms
- Social media interfaces
- Banking apps
- Weather apps
- Chat applications
- And literally anything else you can describe!

## 📝 Example Prompts

Get creative with your descriptions! Here are some examples:

- "Build a Netflix-style homepage with a hero banner and movie sections"
- "Create an admin dashboard with sidebar, stats cards, and a data table"
- "Make a kanban board with drag-and-drop for task management"
- "Build an e-commerce store with product grid and shopping cart"
- "Design a personal portfolio with dark theme and smooth animations"
- "Create a weather app with location search and 7-day forecast"
- "Build a social media feed with posts, likes, and comments"
- "Make a banking dashboard with account overview and transaction history"
- "Design a recipe sharing platform with search and categories"
- "Create a task management app with calendar integration"

**The possibilities are endless!** Just describe what you want, and the AI will build it.

## 🏛️ Architecture

```text
src/
├── app/                    # Next.js app router
├── components/            # Reusable UI components
├── modules/               # Feature-based modules
│   ├── home/             # Landing page & project creation
│   ├── projects/         # Project management & editor
│   ├── messages/         # Chat functionality
│   └── usage/            # Subscription & usage tracking
├── inngest/              # AI agent functions
├── prompts/              # AI prompts and templates
├── trpc/                 # tRPC API setup
└── lib/                  # Utilities and configurations
```

## 🔧 Development

### Database Operations

```bash
# Generate Prisma client
npm run postinstall

# Apply database changes
npx prisma db push

# View database
npx prisma studio
```

### Code Quality

```bash
# Lint code
npm run lint

# Build for production
npm run build
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Docker

```bash
# Build and run with Docker Compose
docker-compose up -d
```

## 📄 License

Feel free to use, modify, and share this project however you like.

## 📞 Contact

**Dirghayu Joshi** - [LinkedIn](https://www.linkedin.com/in/dirghayu-joshi-b46648204/) - [GitHub](https://github.com/dirghayu101)

**Project Link**: [https://github.com/dirghayu101/portfolio-guided](https://github.com/dirghayu101/web-builder)

**Live Demo**: [Vercel](https://web-builder-gray-one.vercel.app/)

---

## 🙏 Acknowledgments

- [Code with Antonio](https://www.youtube.com/@codewithantonio)
