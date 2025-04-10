# MusixQuiz 🎵

A fun and interactive music quiz application built with React and Vite. Test your music knowledge by listening to songs and answering questions about them!

## Features ✨

- 🎧 Play songs using YouTube integration
- 🎯 5 questions per song
- 🎮 Interactive quiz interface
- 📊 Score tracking
- 🎨 Modern, Spotify-inspired UI
- 🔄 Random song selection for each new quiz

## Tech Stack 🛠️

- React
- Vite
- React YouTube
- CSS3

## Prerequisites 📋

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation 🚀

1. Clone the repository:

```bash
git clone https://github.com/Pranav-Vinodh/MusixQuiz.git
cd MusixQuiz
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Play 🎮

1. Click the "Start Quiz" button on the landing page
2. A random song will be selected
3. Use the play button to listen to the song
4. Answer 5 questions about the song
5. View your score at the end
6. Click "New Quiz" to try another song

## Project Structure 📁

```
MusixQuiz/
├── src/
│   ├── components/
│   │   └── Quiz.jsx
│   ├── data/
│   │   └── quizData.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## Customization 🎨

### Adding New Songs

To add new songs to the quiz, edit the `quizData.js` file in the `src/data` directory. Follow this format:

```javascript
{
  id: number,
  title: "Song Title",
  artist: "Artist Name",
  youtubeId: "YouTube Video ID",
  questions: [
    {
      question: "Question text",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: "Correct Option"
    },
    // ... more questions
  ]
}
```

### Styling

The app uses CSS variables for theming. You can customize the colors in the `:root` section of `App.css`:

```css
:root {
  --spotify-green: #1db954;
  --spotify-black: #191414;
  --glow-color: rgba(29, 185, 84, 0.2);
}
```

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Inspired by Spotify's design
- Uses the YouTube API for music playback
- Built with React and Vite
