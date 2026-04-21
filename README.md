# Nawa Laugh

> A minimalist React web app that turns a single laughing video into a playful, tap-to-replay experience.

[Live Demo](https://naiwa.vercel.app/)

## Screenshot

![Nawa Laugh screenshot](Vibe_Coding\Nawa Laugh\screen shot.jpg)

## Features

- Clean, minimalist white interface focused entirely on the character video
- Tap anywhere on the page to replay the video from the beginning
- Dedicated play/pause control for quick interaction
- One-tap replay button for instant restart
- Lightweight error handling for missing or unsupported video files
- Responsive layout that works smoothly across desktop and mobile browsers

## Tech Stack

- React
- Vite
- TypeScript
- CSS

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
git clone https://github.com/Fluorine-Brian/Naiwa-Laugh.git
cd Naiwa-Laugh
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

The production build output will be generated in:

```text
dist/
```

## Project Structure

```text
Nawa Laugh/
├─ public/
│  └─ video/
│     └─ naiwa.mp4
├─ src/
│  ├─ components/
│  │  └─ NaiwaVideoPlayer/
│  ├─ hooks/
│  │  └─ useVideoPlayback.ts
│  ├─ styles/
│  ├─ App.tsx
│  └─ main.tsx
├─ package.json
└─ vite.config.ts
```

## Deployment

This project is ready to deploy on Vercel.

### Vercel Settings

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

### Notes

- Make sure the video file exists at `public/video/naiwa.mp4`
- The app expects the video source path to be `/video/naiwa.mp4`

## Roadmap

- Refine the control bar interactions and micro-feedback
- Add optional theme variants while keeping the minimalist layout
- Improve accessibility and keyboard interaction support
- Add a polished demo preview section for the public repo

## License

This project is licensed under the MIT License.
