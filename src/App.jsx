import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
const BIRD_HEIGHT = 50;
const BIRD_WIDTH = 50;
const GRAVITY = 5;

const App = () => {
  const [birdPosition, setBirdPosition] = useState(300);

  useEffect(() => {
    let birdval;
    if (birdPosition < WALL_HEIGHT - BIRD_HEIGHT) {
      birdval = setInterval(() => {
        setBirdPosition((prev) => prev + GRAVITY);
      }, 24);
    }
    return () => clearInterval(birdval);

  });

  const handler = () => {
    setBirdPosition((prev) => prev - 50);
  }

  return (
    <Home onClick={handler}>
      <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
        <Bird
          height={BIRD_HEIGHT}
          width={BIRD_WIDTH}
          top={birdPosition}
          left={100}
        />
      </Background>
    </Home>
  );
}

export default App;

const Home = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  background-image: url('https://i.pinimg.com/736x/72/5e/5d/725e5dc00ba49c240cd489e7b87e0496.jpg');
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 1px solid black;
  position: relative;
`;

const Bird = styled.div`
  background-image: url('https://img.itch.zone/aW1nLzE0NDQ5NzY4LnBuZw==/315x250%23c/TVnPC7.png');
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;