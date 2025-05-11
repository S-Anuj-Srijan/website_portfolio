// src/components/Canvas3D.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/mainaboutme.css';

function Canvas3D() {
  return (
    <div
      className="canvas-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
      }}
    >
      {/* Background GIF */}
      <img
        src="/images/Coding The Matrix GIF.gif"
        alt="Background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Foreground GIF with animation */}
      <motion.img
        src="/images/rotatingdesk.gif"
        alt="Foreground"
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
    </div>
  );
}

export default Canvas3D;
