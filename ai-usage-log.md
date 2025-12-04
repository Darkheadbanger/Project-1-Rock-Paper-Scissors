# AI Usage Log

## Project: Rock Paper Scissors Game
**Developer:** David Bouhaben  
**Date:** December 1-4, 2025

---

## December 1, 2025

### Initial Project Setup
**Prompt:** "Create necessary files for Rock Paper Scissors project - index.html, CSS, JS, assets folder"  
**Tool:** GitHub Copilot Chat  
**Result:** Generated complete project structure with organized folders

**Prompt:** "Help define MVP for Rock Paper Scissors game"  
**Tool:** GitHub Copilot Chat  
**Result:** Defined core features: basic interface, game logic, score system, reset button

**Prompt:** "Translate MVP definition and user stories to English"  
**Tool:** GitHub Copilot Chat  
**Result:** Professional English translation for documentation

### Design Decisions
**Prompt:** "What text color harmonizes with purple background #26006e?"  
**Tool:** GitHub Copilot Chat  
**Result:** Recommended #F5F5F5 (off-white) for text, #FFD700 (gold) for accents

**Prompt:** "Best button color for purple background"  
**Tool:** GitHub Copilot Chat  
**Result:** Suggested cyan #00E5FF with hover effects

---

## December 4, 2025

### CSS Challenges
**Prompt:** "How to center logo in the middle of page with flexbox"  
**Tool:** GitHub Copilot Chat  
**Result:** Used `align-items: center` with `width: 100%` on container

**Prompt:** "Change GIF dot color from black to white in CSS"  
**Tool:** GitHub Copilot Chat  
**Result:** Used `filter: invert(1)` or created CSS loader animation

**Prompt:** "Explain CSS loader animation with radial-gradient"  
**Tool:** GitHub Copilot Chat  
**Result:** Detailed explanation of `aspect-ratio`, `clip-path`, and `@keyframes`

### JavaScript Debugging
**Prompt:** "Why does button not work after adding game.startGame()?"  
**Tool:** GitHub Copilot Chat  
**Result:** Identified auto-execution issue - removed immediate call, kept only class instantiation

**Prompt:** "Why is 'loadingTime is not defined'?"  
**Tool:** GitHub Copilot Chat  
**Result:** Missing `this.` prefix for class method call

**Prompt:** "textContent vs innerText - which is better?"  
**Tool:** GitHub Copilot Chat  
**Result:** Recommended `textContent` for better performance and reliability

**Prompt:** "Why is loading page visible on first load?"  
**Tool:** GitHub Copilot Chat  
**Result:** Found duplicate CSS class definition and missing `display: none` on `#loading-page`

**Prompt:** "Infinite loop in showGamePage() method"  
**Tool:** GitHub Copilot Chat  
**Result:** Identified duplicate method name causing recursion - renamed to `transitionToGamePage()`

### HTML/CSS Issues
**Prompt:** "Button type attribute warning in Edge DevTools"  
**Tool:** GitHub Copilot Chat  
**Result:** Added `type="button"` to prevent default form submission behavior

**Prompt:** "How to align text vertically with image in flexbox"  
**Tool:** GitHub Copilot Chat  
**Result:** Applied `align-items: center` to parent flex container

---

## AI Collaboration Summary

### What AI Helped With:
- ✅ Project structure and boilerplate code
- ✅ CSS color theory and design recommendations
- ✅ Debugging JavaScript scope issues (`this.` references)
- ✅ CSS layout problems (flexbox centering)
- ✅ Code explanations (loader animation, CSS properties)
- ✅ Best practices (textContent vs innerText, button types)
- ✅ Translation and documentation

### What I Did Myself:
- 🎯 Defined project requirements and user stories
- 🎯 Designed game flow and UX
- 🎯 Wrote game logic structure
- 🎯 Made design decisions (colors, layout)
- 🎯 Troubleshooting and testing
- 🎯 Code organization and refactoring

### Key Learnings:
1. Always use `this.` when calling class methods in JavaScript
2. `textContent` is more reliable than `innerText`
3. CSS `!important` helps override default styles when needed
4. Duplicate CSS definitions cause unexpected behavior
5. Class method names must be unique to avoid recursion

---

## Reflection

Using AI (GitHub Copilot) was extremely helpful for:
- Quickly setting up project structure
- Getting unstuck on CSS/JavaScript bugs
- Learning best practices and explanations
- Translating content professionally

The AI acted as a mentor and debugger, but all creative decisions and project direction came from me. This collaboration sped up development significantly while keeping me in control of the project vision.
