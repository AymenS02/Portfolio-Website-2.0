import './Projects.scss'
import React from 'react'
import { motion, Variants } from "framer-motion";

interface Props {
  emoji: React.ReactNode;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 25%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <div className="begin">
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }} // Change the amount to 0.15 for 15% of the screen
        transition={{ delay: 1 }} // Add a 1 second delay
      >
        <motion.div className="splash" style={{ background }} />
        <motion.div className="card" variants={cardVariants}>
          {emoji}
        </motion.div>
      </motion.div>
    </div>
  );
}

const code1 = <div className='card'>
  <h2>Crypto Tracker App with React</h2>
  <h3><a href="https://crypto-tracker-swart-eight.vercel.app/">Click Here for Live Demo</a></h3>
  <h3><a href="https://github.com/AymenS02/Crypto-Tracker">Github Repo</a></h3>
  <img src="/projects/cointracker.png" alt="coin project image" className="image" />
</div>

const code2 = <div className='card'>
  <h2>Pokemon Memory Game with React</h2>
  <h3><a href="https://poke-card-game-qwrrvokam-aymen-shoteris-projects.vercel.app/">Click Here for Live Demo</a></h3>
  <h3><a href="https://github.com/AymenS02/Pokemon-Memory-Game">Github Repo</a></h3>
  <img src="/projects/poke-game.png" alt="pokemon game image" className="image" />
</div>

const code8 = <div className='card'>
  <h2>Hamad's Portfolio Website with React & GSAP</h2>
  <h3><a href="https://aymens02.github.io/Hamads-Website/">Click Here for Live Demo</a></h3>
  <h3><a href="https://github.com/AymenS02/Hamads-Website">Github Repo</a></h3>
  <img src="/projects/hamad.png" alt="hamads website image" className="image" />
</div>

const code9 = <div className='card'>
  <h2>R2R Company Website</h2>
  <h3><a href="https://www.road2righteousness.ca/">Click Here for Live Demo</a></h3>
  <h3><a href="https://github.com/AymenS02/R2R">Github Repo</a></h3>
  <img src="/projects/r2rpage.png" alt="hamads website image" className="image" />
</div>

const code7 = <div className='card'>
  <h2>Limeworth X-ray & Ultrasound with React & Tailwind</h2>
  <h3><a href="https://aymens02.github.io/Limeworth/">Click Here for Live Demo</a></h3>
  <h3><a href="https://github.com/AymenS02/Limeworth">Github Repo</a></h3>
  <img src="/projects/limeworth.png" alt="limeworth image" className="image" />
</div>

const code3 = <div className='card'>
  <h2>Ex-Personal Portfolio</h2>
  <h3><a href="https://aymens02.github.io/AymenShoteri.github.io/">Click Here for Live Demo</a></h3>
  <h3><a href="https://aymens02.github.io/Crypto-Tracker/">Github Repo</a></h3>
  <img src="/projects/personalPort.png" alt="portfolio image" className="image" />
</div>

const code0 = <div className='card'>
  <h2>PvP Library Rankings with Multiple API Integration</h2>
  <h3><a href="https://aymens02.github.io/pvpoke-rankings-generator/">Click Here for Live Demo</a></h3>
  <h3><a href="https://github.com/AymenS02/pvpoke-rankings-generator">Github Repo</a></h3>
  <img src="/projects/poke-rank.png" alt="coin project image" className="image" />
</div>

const code4 = <div className='card'>
    <h2>Solar Systems Graphic Design with C++</h2>
    <h3><a href="https://github.com/AymenS02/Solar-System">Github Repo</a></h3>
    <img src="/projects/solarsystem.gif" alt="solar system image" className="image" />
</div>

const code5 = <div className='card'>
  <h2>Connect 4 with AI</h2>
  <h3><a href="https://github.com/AymenS02/Connect-4-Game">Github Repo</a></h3>
  <img src="/projects/connect4.png" alt="connect 4 image" className="image" />
</div>

const code6 = <div className='card'>
  <h2>Scammer Penalty with Python</h2>
  <h3><a href="https://github.com/AymenS02/Scammer-Penalty">Github Repo</a></h3>
  <img src="/projects/scammer.webp" alt="scammer project image" className="image" />
</div>

const food: [React.ReactNode, number, number][] = [
  [code1, 206, 254],
  [code2, 175, 225],
  [code8, 20, 70],
  [code9, 205, 245],
  [code7, 110, 170],
  [code3, 200, 250],
  [code0, 200, 0],
  [code4, 150, 200],
  [code5, 200, 0],
  [code6, 205, 245],
];

export default function Project() {
  return (
    <div className='shell'>
      <h1 className='header'>Projects</h1>
      {food.map(([emoji, hueA, hueB], index) => (
        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={index} />
      ))}
    </div>
  );
}
