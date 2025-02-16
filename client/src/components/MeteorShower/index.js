import React, { useState } from 'react';
import './index.scss';

const MeteorShower = () => {
  const [shootingStars, setShootingStars] = useState([]);

  const handleClick = (e) => {
    const { clientX, clientY } = e;

    // Randomly choose one of the four corners of the screen
    const corners = [
      { x: 0, y: 0 }, // top-left
      { x: window.innerWidth, y: 0 }, // top-right
      { x: 0, y: window.innerHeight }, // bottom-left
      { x: window.innerWidth, y: window.innerHeight }, // bottom-right
    ];

    const targetCorner = corners[Math.floor(Math.random() * corners.length)];

    // Calculate the distance to the target corner
    const distanceX = targetCorner.x - clientX;
    const distanceY = targetCorner.y - clientY;

    // Create random shooting star properties
    const randomSpeed = Math.random() * 3 + 2; // Random speed
    const randomSize = 24; // Fixed size (24px)
    const randomTailLength = 100; // Tail length
    const randomAngle = Math.random() * 360; // Random angle for the tail

    // Generate shooting star data
    const star = {
      id: Date.now(),
      x: clientX,
      y: clientY,
      targetX: targetCorner.x,
      targetY: targetCorner.y,
      distanceX,
      distanceY,
      speed: randomSpeed,
      size: randomSize,
      tailLength: randomTailLength,
      angle: randomAngle,
    };

    // Add the shooting star to the list
    setShootingStars((prevStars) => [...prevStars, star]);

    // Remove the star after animation duration
    setTimeout(() => {
      setShootingStars((prevStars) => prevStars.filter((star) => star.id !== star.id));
    }, randomSpeed * 1000); // Duration of animation is based on speed
  };

  return (
    <div className="meteor-shower" onClick={handleClick}>
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.x - star.size / 2}px`,
            top: `${star.y - star.size / 2}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `shoot ${star.speed}s linear forwards`,
            '--distance-x': `${star.distanceX}px`,
            '--distance-y': `${star.distanceY}px`,
            '--speed': `${star.speed}s`,
          }}
        >
          {/* <div
            className="tail"
            style={{
              width: `${star.tailLength}px`,
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              transform: `rotate(${star.angle}deg)`,
              animation: `tail-move ${star.speed}s linear forwards`,
              '--distance-x': `${star.distanceX}px`,
              '--distance-y': `${star.distanceY}px`,
            }}
          ></div> */}
        </div>
      ))}
    </div>
  );
};

export default MeteorShower;
