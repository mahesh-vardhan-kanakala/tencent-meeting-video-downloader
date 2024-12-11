A Chrome browser extension that helps you easily download Tencent Meeting recording videos with just a few clicks. No more complicated steps - just install, detect, and download!

![Screenshot 2024-12-02 104051](https://github.com/user-attachments/assets/ccc3775f-b395-4bdd-a474-7d286086d012)

![Screenshot 2024-12-08 194355](https://github.com/user-attachments/assets/22949259-5d14-4270-9d31-0f290e8fbc81)

# ✨ Features

- 🎯 **Auto Detection** - Automatically detect video URLs on Tencent Meeting playback pages
- 📂 **Custom Save Path** - Choose your preferred location to save downloaded videos
- 🚀 **Reliable Downloads** - Generate optimized curl download commands
- 💻 **Clean Interface** - Simple and intuitive user experience
- 🔒 **Privacy First** - No data collection, completely secure and private

# 📥 Installation

### Method 1: Direct Installation (Recommended)

1. Download the latest release
   - Visit [Releases](https://github.com/mahesh-vardhan-kanakala/tencent-meeting-video-downloader/releases)
   - Download `tencent-meeting-video-downloader.zip`

2. Prepare Chrome Browser
   - Open Chrome
   - Enter `chrome://extensions/` in the address bar
   - Enable "Developer mode" in the top-right corner

3. Install Extension
   - Unzip the downloaded file
   - Click "Load unpacked"
   - Select the unzipped folder
   - Extension icon appears in the toolbar

### Method 2: Build from Source

```bash
# Clone repository 
git clone https://github.com/mahesh-vardhan-kanakala/tencent-meeting-video-downloader.git

# Install dependencies
cd tencent-meeting-video-downloader
npm install

# Build extension
npm run build
```

Then load the `dist` folder as an unpacked extension.

# 🎮 Usage Guide

1. **Open Recording** 
   - Navigate to Tencent Meeting recording page
   - Start playing the video

2. **Generate Command**
   - Click the extension icon
   - Wait for "Video detected"
   - Enter the save path
   - Click "Generate Download Command"

3. **Download**
   - Copy the generated command
   - Open Git Bash
   - Paste and run the command
   - Wait for the download to complete

# 🛠️ Development

### Prerequisites
- Node.js >= 14
- Git Bash

### Project Structure
```
├── src/
│   ├── assets/    # Icons & resources
│   ├── background/# Background scripts
│   ├── content/   # Content scripts
│   ├── popup/     # Popup UI
│   └── utils/     # Utilities
├── dist/          # Build output
├── manifest.json  # Extension config
└── webpack.config.js
```

### Scripts
```bash
# Development
npm run watch

# Production build
npm run build
```

# 🚀 Tech Stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Chrome](https://img.shields.io/badge/chrome-%234285F4.svg?style=for-the-badge&logo=google-chrome&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

# ⚖️ License

[Apache-2.0 license](LICENSE)

# 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# 📞 Contact

**Chan Meng**

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=normal&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mahesh-vardhan-kanakala/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=normal&logo=github&logoColor=white)](https://github.com/mahesh-vardhan-kanakala)

For issues and suggestions, please submit an Issue.
```

This version contains everything in English, including the feature descriptions and installation instructions.
