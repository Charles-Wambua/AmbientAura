import { useEffect } from 'react';

const BouncingBalls = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const balls = [];
    const ballCount = 10;

   
    for (let i = 0; i < ballCount; i++) {
      balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 10 + Math.random() * 10,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach(ball => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();

        // Update ball position
        ball.x += ball.speedX;
        ball.y += ball.speedY;

        // Bounce off walls
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.speedX = -ball.speedX;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.speedY = -ball.speedY;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      id="canvas"
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    />
  );
};

export default BouncingBalls;
