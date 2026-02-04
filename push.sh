#!/bin/bash
git add .
git commit -m "🔧 Update"
git push origin main
echo "✅ Pushed! Now SSH and run ./deploy.sh"
