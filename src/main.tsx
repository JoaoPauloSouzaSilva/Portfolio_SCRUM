import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const root = document.documentElement as HTMLElement;

const colors = ['#FF7089', '#869cff', 
                '#FFDB70', '#81fc98', 
                '#70FFDB','#E6876E' ];

let currentIndex = -1;

function changeColors() {
  let randomIndex;
  do {
      randomIndex = Math.floor(Math.random() * colors.length);
  } while (randomIndex === currentIndex);
    currentIndex = randomIndex;
    const randomColor = colors[randomIndex];
    root.style.setProperty('--random-color', randomColor);

    //test function
    // root.style.setProperty('--gold', randomColor);

}

changeColors();


