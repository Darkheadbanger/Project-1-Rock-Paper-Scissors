# 🎮 Rock Paper Scissors Game

A web-based Rock Paper Scissors game where you compete against the computer. First to win 3 rounds wins the game!

![Project Status](https://img.shields.io/badge/status-in%20development-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 About This Project

This is my first JavaScript project created as part of the **IronHack Web Development Bootcamp** (Week 3, Day 1). The goal is to create an interactive Rock Paper Scissors game using vanilla JavaScript, HTML, and CSS.

**Developer:** David Bouhaben  
**Date:** December 2025  
**Bootcamp:** IronHack WDFT-Nov-2025

---

## 🎯 Project Goals

- Create a fully functional Rock Paper Scissors game
- Practice DOM manipulation with JavaScript
- Implement game logic (win/lose/draw conditions)
- Design a responsive and attractive UI
- Use ES6 modules and classes
- Document AI usage throughout development

---

## ✨ Features

### MVP (Minimum Viable Product)
- ✅ Welcome page with "Play" button
- ✅ Loading animation with countdown
- ✅ Game interface with player choices (Rock, Paper, Scissors)
- ✅ Computer random selection
- ✅ Round result display (Win/Lose/Draw) - Shows winner in same page
- ✅ Winner determination logic with 1-second delay
- 🚧 Play again button (in progress)

### Simplified Approach
Instead of separate end game screen and score tracking to 3 wins, the game shows the winner immediately after each round on the same page. This streamlined approach keeps the game simple and focused.

### Future Enhancements (Post-MVP)
- Score tracking system (best of 3, 5, 7 rounds)
- Dedicated end game screen
- Play again functionality
- Animations for choices
- Sound effects
- Game history/statistics
- Multiple game modes
- Responsive mobile design
- Accessibility improvements

---

## 🚀 How to Play

1. Open `index.html` in your browser
2. Click "Play the Game" button
3. Wait for the loading countdown (3 seconds)
4. Choose Rock, Paper, or Scissors by clicking on an image
5. After 1 second, the computer makes its choice
6. The winner is displayed immediately on the same page
7. Choose again to play another round!

### Game Rules
- 🪨 **Rock** wins against Scissors but loses against Paper
- ✂️ **Scissors** wins against Paper but loses against Rock
- 📄 **Paper** wins against Rock but loses against Scissors

---

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **JavaScript (ES6)** - Game logic and interactivity
  - ES6 Classes
  - ES6 Modules
  - DOM Manipulation
  - Event Listeners

---

## 📁 Project Structure

```
Project-1-Rock-Paper-Scissors/
├── index.html              # Main HTML file
├── js/
│   ├── index.js           # Entry point
│   └── game.js            # Game class and logic
├── styles/
│   └── style.css          # All styles
├── assets/
│   └── images/            # Game images (rock, paper, scissors)
├── README.md              # Project documentation
└── ai-usage-log.md        # AI collaboration log
```

---

## 🧠 Development Process

### Planning Phase
1. Defined MVP requirements
2. Created user stories
3. Set up Trello board for task management
4. Established Git workflow with feature branches

### Implementation Phase
1. ✅ Created project structure and files
2. ✅ Designed welcome page with footer rules
3. ✅ Implemented loading screen with countdown (3 seconds)
4. ✅ Built game page interface with player/computer sides
5. ✅ Implemented core game logic (`playerChoice()`, `getPlayerChoice()`, `computerChoice()`, `winner()`)
6. ✅ Added winner determination with 1-second delay between player and computer choices
7. 🚧 Adding play again functionality (current step)

### Tools Used
- **VS Code** - Code editor
- **GitHub Copilot** - AI pair programmer
- **Trello** - Project management
- **Git/GitHub** - Version control
- **Browser DevTools** - Debugging

---

## 🤖 AI Collaboration

This project was developed with the assistance of **GitHub Copilot Chat** as required by the bootcamp. All AI interactions are documented in [`ai-usage-log.md`](./ai-usage-log.md).

### Honest Assessment of AI Usage

**AI was used for (~10% of project):**
- 📝 Documentation writing (README, AI logs)
- 💡 Some concept explanations
- 🔄 Repetitive code patterns (event listeners)
- 🌐 Translation and professional writing
- 🎨 CSS color suggestions

**I wrote myself (~90% of project):**
- 🧠 **95% of game logic** - All OOP architecture, methods, game flow
- 🎮 **100% of game design** - UX, user flow, strategic decisions
- 💻 **All core JavaScript** - `playerChoice()`, `getPlayerChoice()`, `computerChoice()`, `winner()` logic
- 🐛 **Most debugging** - Including fixing AI's incorrect suggestions
- 🎨 **Most CSS** - Layout, spacing (found and fixed AI's wrong solutions), animations

### Important Note

AI sometimes gave **incorrect solutions** (e.g., CSS spacing issue). I had to debug and fix these myself. The entire game architecture and logic flow came from my own thinking and coding.

**AI = Documentation assistant**  
**Me = Developer who built this game**

---

## 🎨 Design Choices

**Color Scheme:**
- Background: Deep Purple `#26006e`
- Text: Off-white `#F5F5F5`
- Accent: Cyan `#00E5FF`
- Hover effects with shadows and transforms

**Typography:**
- Font: Arial, sans-serif
- Clear hierarchy with different sizes

**Layout:**
- Flexbox for centering and responsive design
- Clean, minimal interface
- Visual feedback on interactions

---

## 📚 What I Learned

### Technical Skills
- JavaScript ES6 class syntax and `this` context
- DOM manipulation and event handling
- CSS animations with `@keyframes`
- Flexbox layout (through trial and error)
- Debugging techniques (including fixing AI mistakes)
- Project organization and file structure

### Soft Skills
- Planning and requirement definition
- Breaking down problems into steps
- Testing and verification
- Working with AI critically (not blindly trusting)
- Documentation and code comments
- Time management on multi-day projects

### Key Insights
1. **Write code yourself first** - Don't rely on AI for logic
2. **Verify all suggestions** - AI makes mistakes (~30% in my case)
3. **Architecture comes from thinking** - AI can't design your app structure
4. **Debugging builds understanding** - Finding bugs yourself teaches more than AI explanations
5. **AI is best for documentation** - README and logs, not core code

---

## 🔮 Next Steps

1. ✅ Complete game page UI
2. ✅ Implement game logic (play round, determine winner)
3. 🚧 Add play again button
4. ⏭️ Implement score tracking system
5. ⏭️ Add animations and polish
6. ⏭️ Test thoroughly across browsers
7. ⏭️ Deploy online

---

## 👨‍💻 Author

**David Bouhaben**  
IronHack Web Development Student  
December 2025

---

## 📄 License

This project is created for educational purposes as part of the IronHack bootcamp.

---

## 🙏 Acknowledgments

- IronHack instructors and TAs
- GitHub Copilot for AI assistance
- [rpsgame.org](https://www.rpsgame.org) for game rules inspiration
- Classmates for support and feedback