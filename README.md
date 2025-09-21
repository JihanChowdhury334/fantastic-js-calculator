# Modern Calculator

Learning project: an interactive calculator built with **HTML, CSS, and Vanilla JavaScript**.  
Created to practice **DOM manipulation, event handling, state management, and responsive UI design**.

## 🚀 Features
- Perform basic operations: add, subtract, multiply, divide  
- Operator chaining (calculate without pressing `=` each time)  
- Decimal input support  
- Clear button logic:  
  - `CE` clears the current entry  
  - `AC` resets the entire calculator state  
- Repeat calculations by pressing `=` multiple times  
- Responsive design for desktop and mobile  
- Animated gradient background with **glassmorphism** styling  
- Interactive buttons with hover/active states and operator highlighting  

## 🛠️ Tech Stack
- **HTML5** for structure  
- **CSS3** for animations, gradients, and responsive styling  
- **JavaScript (ES6+)** for calculator logic and DOM interaction  

## 📂 Project Structure
```
fantastic-js-calculator/
├── index.html   # HTML structure
├── style.css    # Styles and animations
└── script.js    # Calculator functionality
```

## ⚙️ How It Works
- Buttons use `data-action` attributes (`add`, `subtract`, `multiply`, `divide`, `decimal`, `clear`, `calculate`).  
- State is tracked via `dataset` properties on the root `.calculator` element:  
  - `firstValue` → first operand  
  - `operator` → selected operation  
  - `modValue` → cached operand for repeated calculations  
  - `previousKeyType` → last key type pressed  
- Clear button toggles between `CE` and `AC` depending on context.  
- Active operator button highlights with `.is-depressed`.  

## 📈 Learning Purpose
This project helped me practice:  
- Manipulating the DOM and delegating events  
- Managing UI state in vanilla JavaScript  
- Building clean, responsive layouts with modern CSS  
- Creating polished user interactions without frameworks  

---

⚠️ **Note**: This was built purely as a **learning project** and is not intended for production use.
