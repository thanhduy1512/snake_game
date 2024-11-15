# 🐍 React Snake Game

A modern implementation of the classic Snake Game built with React, featuring real-time multiplayer chat, high scores, and background music.

## 🎮 Game Features

- Classic snake gameplay with modern graphics
- Real-time multiplayer chat system
- Global high score leaderboard
- Background music and sound effects
- Responsive design for desktop and mobile
- Tutorial for new players
- Pause/Resume functionality
- Device fingerprinting for player identification

## 🚀 Live Demo

[Play the game here](https://snack.netlify.app/)

## 🛠️ Technologies Used

- React.js
- Firebase (Realtime Database)
- FingerprintJS
- Web Audio API
- CSS Modules
- React Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/thanhduy1512/snake_game.git
```

```bash
cd snake-game
```

```bash
npm install
```

4. Create a `.env` file in the root directory and add your Firebase configuration:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
```

5. Start the development server:

```bash
npm start
```

## 🎯 How to Play

1. **Starting the Game**

   - Press any arrow key to start
   - Use arrow keys to control the snake's direction
   - Mobile users can use the on-screen controls

2. **Objective**

   - Eat the food (red dots) to grow longer
   - Avoid hitting the walls and your own tail
   - Try to achieve the highest score possible

3. **Controls**

   - ⬆️ Up Arrow: Move Up
   - ⬇️ Down Arrow: Move Down
   - ⬅️ Left Arrow: Move Left
   - ➡️ Right Arrow: Move Right
   - Space Bar: Pause/Resume
   - M: Mute/Unmute Audio

4. **Scoring**
   - Each food item: +1 point
   - Special food items: +5 points
   - High scores are automatically saved

## 🎨 Customization

You can customize various game aspects by modifying the constants in `src/config/gameConfig.js`:

- Snake speed
- Grid size
- Colors
- Initial snake length
- Special food frequency

## 📱 Mobile Support

The game is fully responsive and supports:

- Touch controls
- Portrait and landscape orientations
- Various screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- Audio may not autoplay on some browsers due to browser policies
- Mobile performance may vary on older devices

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👏 Acknowledgments

- Original Snake Game concept by Nokia
- [React Documentation](https://reactjs.org/)
- [Firebase Documentation](https://firebase.google.com/docs)
- All contributors and testers

## 📧 Contact

Your Name - [lhquan1998@gmail.com](mailto:lhquan1998@gmail.com)

Project Link: [https://github.com/thanhduy1512/snake_game](https://github.com/thanhduy1512/snake_game)
