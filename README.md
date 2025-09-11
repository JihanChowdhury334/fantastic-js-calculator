# Modern Calculator

A sleek and interactive **calculator app** built with **HTML, CSS, and Vanilla JavaScript**.  
This project focuses on **DOM manipulation, event handling, state management, and responsive UI design**.

## 🚀 Features
- **Basic Operations**: Addition, subtraction, multiplication, division  
- **Operator Chaining**: Perform multiple operations sequentially without pressing `=` each time  
- **Decimal Support**: Enter numbers with decimal precision  
- **Clear Button Logic**:  
  - `CE` clears the current entry  
  - `AC` resets the entire calculator state  
- **Repeat Calculations**: Press `=` repeatedly to repeat the last operation  
- **Responsive Design**: Optimized for desktop and mobile  
- **Animated Gradient Background** and **glassmorphism** styling  
- **Interactive Buttons** with hover/active states and visual operator highlighting

## 🛠️ Tech Stack
- **HTML5** for structure  
- **CSS3** (animated gradient, glassmorphism, grid/flex, media queries)  
- **Vanilla JavaScript (ES6+)** for logic and DOM interactions

## 📂 Project Structure
calculator/  
├── index.html      # HTML structure  
├── style.css       # Styles and animations  
└── script.js       # Calculator functionality

## ⚙️ How It Works
- Buttons use **data-action** attributes: `add`, `subtract`, `multiply`, `divide`, `decimal`, `clear`, `calculate`  
- State is tracked via `dataset` properties on the root `.calculator` element:  
  - `firstValue` → first operand  
  - `operator` → selected operation  
  - `modValue` → cached second operand for repeated `=` presses  
  - `previousKeyType` → last key type pressed (`number`, `operator`, `decimal`, `clear`, `calculate`)  
- Clear button toggles between `CE` and `AC` based on context  
- Active operator button gets `.is-depressed` styling for clear user feedback

## 🎨 Preview
(Add a screenshot or GIF of the calculator UI once deployed)

## 📦 Setup & Usage
1. Clone or download this repository  
2. Open `index.html` in your browser  
3. Start calculating!  
(No build tools or dependencies required)

## 📈 Learning Purpose
Built to practice:
- DOM manipulation & event delegation  
- Managing UI state in plain JavaScript  
- Responsive CSS with modern visual polish (animations, gradients)  
- Clean, accessible interaction patterns

## 🔮 Future Enhancements
- Keyboard input support  
- Scientific functions (square root, exponent, percent)  
- Calculation history tape  
- Light/Dark theme toggle

## 📄 License
This project is open source and free to use.
