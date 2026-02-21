# 🌌 Sky Visibility Analyzer 🎯

## Basic Details

**Team Name:** [Lowkey Tech]

### Team Members

- Member 1: [Binet Baby] - [Vishwajyothi College of Engineering and Technology]
- Member 2: [Jyothika k S] - [Vishwajyothi College of Engineering and Technology]

### Hosted Project Link

[Open in Browser](file:///path/to/index.html) - Local deployment

---

## Project Description

Sky Visibility Analyzer is a web-based tool for analyzing and comparing night sky visibility across different locations and times. Upload photos of the night sky to get insights about star visibility, atmospheric clarity, and light pollution levels. Perfect for astronomy enthusiasts, light pollution researchers, and environmental scientists.

---

## The Problem Statement

Light pollution is increasing globally, making it difficult to observe stars and affecting our connection with the night sky. There's a need for a simple tool that allows users to compare sky quality over time and across locations to track pollution trends and identify optimal observation times.

---

## The Solution

Sky Visibility Analyzer provides an intuitive web interface for uploading and comparing night sky images. Users can analyze two nights' worth of data and get instant insights about star visibility, sky clarity, and pollution levels, enabling them to make informed decisions about observation times and locations.

---

## Technical Details

### Technologies/Components Used

**Languages Used:**
- HTML5
- CSS3
- JavaScript (Vanilla)

**Frameworks Used:**
- None (Vanilla JavaScript)

**Libraries Used:**
- FileReader API (Built-in)

**Tools Used:**
- VS Code
- Git
- Browser Developer Tools

---

## Features

- **Feature 1:** Dual Image Upload - Upload and preview two night sky images side-by-side
- **Feature 2:** Sky Analysis - Analyze star count, visibility level, and light pollution metrics
- **Feature 3:** Image Comparison - Compare metrics from two different nights to determine which has clearer skies
- **Feature 4:** Real-time Preview - See uploaded images instantly with image preview functionality
- **Feature 5:** Responsive Design - Beautiful dark-themed interface with gradient background that works on all devices

---

## Implementation

### Installation

No installation required! This is a pure HTML/CSS/JavaScript project.

1. Clone or download the repository:
```bash
git clone [your-repo-url]
cd skyanalyzer
```

2. Open directly in your browser:
```bash
# Simply double-click index.html or open it with your browser
```

Or run a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```

### Run

1. Open `index.html` in your web browser
2. Navigate to `http://localhost:8000` (if using a local server)
3. Upload your night sky images and start analyzing!

---

## Project Documentation

### Screenshots

![Screenshot 1](https://github.com/binet-baby/skyanalyzer/blob/main/Screenshot%201.png) - Comparison of two different skys-output1

![Screenshot 2](https://github.com/binet-baby/skyanalyzer/blob/main/Screenshot%202.png) - Comparison of two different skys-output2

![Screenshot 3](https://github.com/binet-baby/skyanalyzer/blob/main/Screenshot%203.png) - Comparison of two different skys-output3

### Diagrams

#### System Architecture

```
┌─────────────────────┐
│   User Browser      │
├─────────────────────┤
│   HTML5 Interface   │
│   (index.html)      │
├─────────────────────┤
│  CSS Styling        │
│  (style.css)        │
├─────────────────────┤
│  JavaScript Logic   │
│  (script.js)        │
│  - Image Upload     │
│  - Preview Display  │
│  - Analysis Engine  │
│  - Comparison Logic │
└─────────────────────┘
```

The system uses the FileReader API to process images client-side, generating analysis metrics and comparison results without server requirements.

#### Application Workflow

```
User Opens App
    ↓
Upload Night 1 Image → Preview Displays
    ↓
Upload Night 2 Image → Preview Displays
    ↓
Click "Compare Sky" Button
    ↓
Generate Analysis for Both Images
    ↓
Compare Metrics (Star count, Visibility, Pollution)
    ↓
Display Results & Comparison Summary
```

---

## Project Demo

https://drive.google.com/file/d/1ePboJ30BO3bEOQDWIXpfRj1n5TwhZVtJ/view?usp=sharing

## How It Works

1. **Image Upload**: Users select images using file input fields
2. **Preview Generation**: FileReader API loads and displays uploaded images in real-time
3. **Analysis**: Generates analysis metrics for star count, visibility level, and pollution estimation
4. **Comparison**: Compares metrics from both images to determine which night has clearer skies
5. **Results Display**: Shows individual results and a summary comparison

---

## Current Limitations & Future Enhancements

### Current Limitations

- Currently generates simulated analysis data (proof-of-concept)
- Does not perform actual image processing
- Analysis metrics are randomly generated for demonstration

### Future Enhancements

- [ ] Real image analysis using TensorFlow.js or OpenCV.js
- [ ] Machine learning model for accurate star detection
- [ ] Store historical data for tracking pollution trends
- [ ] Location-based data comparison with maps integration
- [ ] Export results as PDF reports
- [ ] Dark/light theme toggle
- [ ] Mobile app version (React Native/Flutter)
- [ ] Backend API for data persistence
- [ ] Weather data integration
- [ ] Astronomical event calendar

---

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

All modern browsers supporting ES6 and FileReader API

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Made with ❤️ by Sky Analyzer Team
