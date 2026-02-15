import React, { useRef, useEffect } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20) + 1;
        const yPositions = Array(columns).fill(0);

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        const matrix = () => {
            // Darken the background slightly to create the trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#00FF41'; // Hacker Green
            ctx.font = '14pt "Courier New", Courier, monospace'; // Monospace font for binaries

            yPositions.forEach((y, index) => {
                // Randomly choose 0 or 1
                const text = Math.random() > 0.5 ? '1' : '0';

                const x = index * 20;
                ctx.fillText(text, x, y);

                // Randomly reset the drop to the top
                if (y > height && Math.random() > 0.975) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 20;
                }
            });
        };

        const interval = setInterval(matrix, 50);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Increased opacity for better visibility
    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, opacity: 0.2 }} />;
};

export default MatrixBackground;
