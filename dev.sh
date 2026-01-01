#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting React Vite Custom Monorepo...${NC}\n"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo -e "${RED}❌ pnpm is not installed. Please install it first:${NC}"
    echo -e "   npm install -g pnpm"
    exit 1
fi

echo -e "${GREEN}✓ pnpm found${NC}"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    pnpm install
fi

# Check for .env files
if [ ! -f "frontend/.env" ] && [ -f "frontend/.env.example" ]; then
    echo -e "${BLUE}📝 Creating frontend/.env from .env.example${NC}"
    cp frontend/.env.example frontend/.env
fi

if [ ! -f "server/.env" ] && [ -f "server/.env.example" ]; then
    echo -e "${BLUE}📝 Creating server/.env from .env.example${NC}"
    cp server/.env.example server/.env
fi

echo -e "\n${GREEN}✓ Setup complete!${NC}"
echo -e "\n${BLUE}Starting development servers...${NC}"
echo -e "  - Frontend: http://localhost:5173"
echo -e "  - Backend:  http://localhost:3000"
echo -e "  - Health:   http://localhost:3000/api/health\n"

# Start both servers
pnpm dev

