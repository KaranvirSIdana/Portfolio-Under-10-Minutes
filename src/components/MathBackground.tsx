
import { useEffect, useRef } from "react";

const MathBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    // Mathematical symbols and formulas
    const symbols = [
      "π", "Σ", "∫", "∞", "≈", "≥", "≤", "≠", "∂", "√",
      "e^x", "y=mx+b", "a²+b²=c²", "f'(x)", "P(A|B)",
      "∇", "∆x", "∑x²", "∫f(x)dx", "μ", "σ", "∝", "∠"
    ];
    
    // Create particles
    const particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      symbol: string;
      opacity: number;
      rotation: number;
      rotationSpeed: number;
    }[] = [];
    
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 10,
        speed: Math.random() * 0.5 + 0.1,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        opacity: Math.random() * 0.12 + 0.03,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particles
        particle.y += particle.speed;
        particle.rotation += particle.rotationSpeed;
        
        // Reset particles that go off screen
        if (particle.y > canvas.height) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }
        
        // Draw symbol
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.font = `${particle.size}px "Courier New", monospace`;
        ctx.fillStyle = `rgba(var(--primary), ${particle.opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(particle.symbol, 0, 0);
        ctx.restore();
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 opacity-60" 
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default MathBackground;
