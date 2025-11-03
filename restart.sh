#!/bin/bash

echo "🧹 Cleaning up ports..."

# Kill processes on port 5000 (backend)
PORT_5000=$(lsof -ti:5000)
if [ ! -z "$PORT_5000" ]; then
    echo "Killing process on port 5000..."
    kill -9 $PORT_5000
fi

# Kill processes on port 5173 (frontend)
PORT_5173=$(lsof -ti:5173)
if [ ! -z "$PORT_5173" ]; then
    echo "Killing process on port 5173..."
    kill -9 $PORT_5173
fi

# Kill processes on port 5174 (alternate frontend)
PORT_5174=$(lsof -ti:5174)
if [ ! -z "$PORT_5174" ]; then
    echo "Killing process on port 5174..."
    kill -9 $PORT_5174
fi

echo "✅ Ports cleaned!"
echo ""
echo "🚀 Starting portfolio..."
npm run dev
