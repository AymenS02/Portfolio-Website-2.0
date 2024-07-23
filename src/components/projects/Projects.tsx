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
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
    </div>
  );
}
const code1 = <div className='card'>
  <h2>Crypto Tracker App with React</h2>
  <h3><a href="https://aymens02.github.io/Crypto-Tracker/">Click Here for Live Demo</a></h3>
  <h3><a href="https://github.com/AymenS02/Crypto-Tracker">Github Repo</a></h3>
  <img src="public\projects\cointracker.png" alt="coin project image" className="image" />
</div>

const code2 = <div className='card'>
  <h2>Ex-Personal Portfolio</h2>
  <h3><a href="https://aymens02.github.io/AymenShoteri.github.io/">Click Here for Live Demo</a></h3>
  <h3><a href="https://aymens02.github.io/Crypto-Tracker/">Github Repo</a></h3>
  <img src="public\projects\personalPort.png" alt="coin project image" className="image" />
</div>

const code3 = <div className='card'>
    <h2>Solar Systems Graphic Design with C++</h2>
    <h3><a href="https://github.com/AymenS02/Solar-System">Github Repo</a></h3>
    <img src="public\projects\solarsystem.gif" alt="coin project image" className="image" />
</div>

const code4 = <div className='card'>
  <h2>Connect 4 with AI</h2>
  <h3><a href="https://github.com/AymenS02/Connect-4-Game">Github Repo</a></h3>
  <img src="public\projects\connect4.png" alt="coin project image" className="image" />
</div>

const food: [React.ReactNode, number, number][] = [
  [code1, 200, 0],
  [code2, 200, 0],
  [code3, 200, 0],
  [code4, 200, 0],
  // [code5, 100, 140],
  // [code6, 205, 245],
  // [code7, 260, 290],
  // [code8, 290, 320]
];

export default function Project() {
  return food.map(([emoji, hueA, hueB], index) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={index} />
  ));
}
