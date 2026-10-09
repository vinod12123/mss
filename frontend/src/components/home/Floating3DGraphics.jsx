import React, { useEffect, useRef } from 'react';

const Floating3DGraphics = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating 3D elements
    const shapes = [];
    const shapeTypes = ['cube', 'sphere', 'pyramid', 'torus', 'octahedron'];
    
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('div');
      shape.className = `floating-shape ${shapeTypes[i % shapeTypes.length]}`;
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      shape.style.animationDelay = `${Math.random() * 5}s`;
      shape.style.animationDuration = `${15 + Math.random() * 10}s`;
      container.appendChild(shape);
      shapes.push(shape);
    }

    return () => {
      shapes.forEach(shape => shape.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="floating-3d-container">
      {/* CSS-based 3D shapes */}
      <div className="shape-wrapper shape-1">
        <div className="cube-3d">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
      
      <div className="shape-wrapper shape-2">
        <div className="octahedron-3d">
          <div className="oct-face oct-1"></div>
          <div className="oct-face oct-2"></div>
          <div className="oct-face oct-3"></div>
          <div className="oct-face oct-4"></div>
          <div className="oct-face oct-5"></div>
          <div className="oct-face oct-6"></div>
          <div className="oct-face oct-7"></div>
          <div className="oct-face oct-8"></div>
        </div>
      </div>

      <div className="shape-wrapper shape-3">
        <div className="pyramid-3d">
          <div className="pyramid-face pyramid-front"></div>
          <div className="pyramid-face pyramid-back"></div>
          <div className="pyramid-face pyramid-left"></div>
          <div className="pyramid-face pyramid-right"></div>
          <div className="pyramid-face pyramid-bottom"></div>
        </div>
      </div>

      <div className="shape-wrapper shape-4">
        <div className="ring-3d"></div>
      </div>

      <div className="shape-wrapper shape-5">
        <div className="sphere-3d"></div>
      </div>

      <div className="shape-wrapper shape-6">
        <div className="cube-3d small">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>

      <div className="shape-wrapper shape-7">
        <div className="dodecahedron-3d"></div>
      </div>

      {/* Glowing orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="orb orb-4"></div>
      <div className="orb orb-5"></div>

      {/* Connection lines */}
      <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(91, 155, 213, 0)" />
            <stop offset="50%" stopColor="rgba(91, 155, 213, 0.5)" />
            <stop offset="100%" stopColor="rgba(91, 155, 213, 0)" />
          </linearGradient>
        </defs>
        <path className="connection-path path-1" d="M10,50 Q30,20 50,50 T90,50" stroke="url(#lineGradient1)" fill="none" strokeWidth="0.2" />
        <path className="connection-path path-2" d="M20,80 Q50,50 80,20" stroke="url(#lineGradient1)" fill="none" strokeWidth="0.15" />
        <path className="connection-path path-3" d="M5,30 Q25,60 45,30 T85,30" stroke="url(#lineGradient1)" fill="none" strokeWidth="0.2" />
      </svg>

      <style jsx>{`
        .floating-3d-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          perspective: 1000px;
        }

        .shape-wrapper {
          position: absolute;
          transform-style: preserve-3d;
        }

        /* Shape Positions */
        .shape-1 { top: 15%; right: 10%; }
        .shape-2 { top: 60%; right: 25%; }
        .shape-3 { top: 30%; right: 40%; }
        .shape-4 { top: 70%; right: 8%; }
        .shape-5 { top: 20%; right: 55%; }
        .shape-6 { top: 80%; right: 45%; }
        .shape-7 { top: 45%; right: 15%; }

        /* 3D Cube */
        .cube-3d {
          width: 60px;
          height: 60px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 20s infinite linear;
        }

        .cube-3d.small {
          width: 35px;
          height: 35px;
        }

        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(30, 90, 168, 0.3) 0%, rgba(91, 155, 213, 0.1) 100%);
          border: 1px solid rgba(91, 155, 213, 0.4);
          backdrop-filter: blur(2px);
        }

        .cube-3d .front { transform: translateZ(30px); }
        .cube-3d .back { transform: rotateY(180deg) translateZ(30px); }
        .cube-3d .right { transform: rotateY(90deg) translateZ(30px); }
        .cube-3d .left { transform: rotateY(-90deg) translateZ(30px); }
        .cube-3d .top { transform: rotateX(90deg) translateZ(30px); }
        .cube-3d .bottom { transform: rotateX(-90deg) translateZ(30px); }

        .cube-3d.small .front { transform: translateZ(17.5px); }
        .cube-3d.small .back { transform: rotateY(180deg) translateZ(17.5px); }
        .cube-3d.small .right { transform: rotateY(90deg) translateZ(17.5px); }
        .cube-3d.small .left { transform: rotateY(-90deg) translateZ(17.5px); }
        .cube-3d.small .top { transform: rotateX(90deg) translateZ(17.5px); }
        .cube-3d.small .bottom { transform: rotateX(-90deg) translateZ(17.5px); }

        /* Octahedron */
        .octahedron-3d {
          width: 50px;
          height: 50px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateOctahedron 15s infinite linear;
        }

        .oct-face {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 40px solid rgba(91, 155, 213, 0.3);
          transform-origin: center bottom;
        }

        .oct-1 { transform: rotateY(0deg) rotateX(35deg) translateZ(20px); }
        .oct-2 { transform: rotateY(90deg) rotateX(35deg) translateZ(20px); }
        .oct-3 { transform: rotateY(180deg) rotateX(35deg) translateZ(20px); }
        .oct-4 { transform: rotateY(270deg) rotateX(35deg) translateZ(20px); }
        .oct-5 { transform: rotateY(0deg) rotateX(-35deg) translateZ(20px) rotateX(180deg); }
        .oct-6 { transform: rotateY(90deg) rotateX(-35deg) translateZ(20px) rotateX(180deg); }
        .oct-7 { transform: rotateY(180deg) rotateX(-35deg) translateZ(20px) rotateX(180deg); }
        .oct-8 { transform: rotateY(270deg) rotateX(-35deg) translateZ(20px) rotateX(180deg); }

        /* Pyramid */
        .pyramid-3d {
          width: 50px;
          height: 50px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotatePyramid 18s infinite linear;
        }

        .pyramid-face {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 50px solid rgba(30, 90, 168, 0.25);
          transform-origin: center bottom;
        }

        .pyramid-front { transform: rotateX(30deg) translateZ(15px); }
        .pyramid-back { transform: rotateY(180deg) rotateX(30deg) translateZ(15px); }
        .pyramid-left { transform: rotateY(-90deg) rotateX(30deg) translateZ(15px); }
        .pyramid-right { transform: rotateY(90deg) rotateX(30deg) translateZ(15px); }

        /* 3D Ring/Torus */
        .ring-3d {
          width: 80px;
          height: 80px;
          border: 8px solid rgba(91, 155, 213, 0.3);
          border-radius: 50%;
          animation: rotateRing 12s infinite linear;
          transform-style: preserve-3d;
          box-shadow: 0 0 20px rgba(91, 155, 213, 0.2);
        }

        /* Sphere */
        .sphere-3d {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(91, 155, 213, 0.5), rgba(30, 90, 168, 0.2));
          box-shadow: 
            inset -10px -10px 20px rgba(0, 0, 0, 0.2),
            0 0 30px rgba(91, 155, 213, 0.3);
          animation: floatSphere 8s infinite ease-in-out;
        }

        /* Dodecahedron-like shape */
        .dodecahedron-3d {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, rgba(91, 155, 213, 0.3), rgba(30, 90, 168, 0.1));
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          animation: rotateDodeca 25s infinite linear;
          box-shadow: 0 0 20px rgba(91, 155, 213, 0.2);
        }

        /* Glowing Orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
        }

        .orb-1 {
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, rgba(91, 155, 213, 0.8), rgba(91, 155, 213, 0));
          top: 25%;
          right: 30%;
          animation: floatOrb 6s infinite ease-in-out;
        }

        .orb-2 {
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.6), rgba(91, 155, 213, 0));
          top: 55%;
          right: 18%;
          animation: floatOrb 8s infinite ease-in-out 1s;
        }

        .orb-3 {
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, rgba(91, 155, 213, 0.6), rgba(30, 90, 168, 0));
          top: 40%;
          right: 50%;
          animation: floatOrb 7s infinite ease-in-out 2s;
        }

        .orb-4 {
          width: 5px;
          height: 5px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(91, 155, 213, 0));
          top: 75%;
          right: 35%;
          animation: floatOrb 5s infinite ease-in-out 0.5s;
        }

        .orb-5 {
          width: 7px;
          height: 7px;
          background: radial-gradient(circle, rgba(91, 155, 213, 0.7), rgba(91, 155, 213, 0));
          top: 15%;
          right: 45%;
          animation: floatOrb 9s infinite ease-in-out 3s;
        }

        /* Connection Lines */
        .connection-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .connection-path {
          stroke-dasharray: 200;
          animation: dashMove 10s infinite linear;
        }

        .path-2 {
          animation-delay: 2s;
        }

        .path-3 {
          animation-delay: 4s;
        }

        /* Animations */
        @keyframes rotateCube {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }

        @keyframes rotateOctahedron {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        @keyframes rotatePyramid {
          0% { transform: rotateY(0deg) translateY(0px); }
          50% { transform: rotateY(180deg) translateY(-20px); }
          100% { transform: rotateY(360deg) translateY(0px); }
        }

        @keyframes rotateRing {
          0% { transform: rotateX(70deg) rotateZ(0deg); }
          100% { transform: rotateX(70deg) rotateZ(360deg); }
        }

        @keyframes floatSphere {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        @keyframes rotateDodeca {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes floatOrb {
          0%, 100% { 
            transform: translate(0, 0);
            opacity: 0.6;
          }
          25% { 
            transform: translate(10px, -15px);
            opacity: 1;
          }
          50% { 
            transform: translate(-5px, -25px);
            opacity: 0.8;
          }
          75% { 
            transform: translate(15px, -10px);
            opacity: 1;
          }
        }

        @keyframes dashMove {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: -200; }
        }

        /* Floating shape particles */
        .floating-shape {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(91, 155, 213, 0.4);
          border-radius: 50%;
          animation: particleFloat 20s infinite linear;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(50px) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Floating3DGraphics;
