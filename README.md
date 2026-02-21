# 🌌 Sky Visibility Analyzer

A web-based tool for analyzing and comparing night sky visibility across different locations and times. Upload photos of the night sky to get insights about star visibility, atmospheric clarity, and light pollution levels.

## Features

- **Dual Image Upload**: Compare two night sky photos side-by-side
- **Sky Analysis**: Analyze each image for:
  - Star Count: Estimated number of visible stars
  - Visibility: Overall clarity of the sky
  - Pollution Level: Estimated light pollution
- **Comparison Tool**: Compare two nights to determine which has the clearer sky
- **Image Preview**: View uploaded images with real-time preview
- **Responsive Design**: Beautiful dark-themed interface with gradient background

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or dependencies required

### Usage

1. Open `index.html` in your web browser
2. Click on the file input in "Night 1" card and select a night sky image
3. Click on the file input in "Night 2" card and select another night sky image
4. Click the **🔍 Compare Sky** button to analyze and compare the images
5. View the results for each night and the comparison summary

## Project Structure

```
skyanalyzer/
├── index.html      # HTML structure and UI
├── script.js       # Image upload handling and comparison logic
├── style.css       # Styling and responsive design
└── README.md       # Project documentation
```

## File Descriptions

- **index.html**: Main page with image upload cards and results display
- **script.js**: Handles image preview, analysis simulation, and comparison logic
- **style.css**: Dark theme styling with gradient background and card-based layout

## How It Works

1. **Image Upload**: Users select images using file input fields
2. **Preview Generation**: FileReader API displays uploaded images
3. **Analysis**: Generates analysis metrics (star count, visibility, pollution)
4. **Comparison**: Compares metrics from both images to determine which night has clearer skies

## Current Limitations

- Currently generates simulated analysis data
- Not actual image analysis
- Future versions should implement real image processing with computer vision

## Possible Enhancements

- [ ] Real image analysis using OpenCV or TensorFlow
- [ ] Store historical data for tracking pollution trends
- [ ] Location-based data comparison
- [ ] Export results as PDF reports
- [ ] Dark/light theme toggle
- [ ] Mobile app version

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Open source - feel free to use and modify

## Contributing

Suggestions for improvements are welcome!
