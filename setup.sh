#!/bin/bash

echo "🔧 Setting up Timeclock backend..."

# Install dependencies
sudo apt update
sudo apt install -y python3 python3-pip python3-venv

# Setup virtual environment
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

echo "✅ Setup complete!"
echo "To run the app:"
echo "  cd backend"
echo "  source venv/bin/activate"
echo "  python app.py"
