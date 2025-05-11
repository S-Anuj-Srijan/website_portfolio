// src/components/GlassCard.jsx
import { motion } from "framer-motion";
import "../styles/glasscard.css";

export default function GlassCard({ title, description, link, backgroundImage }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <motion.div
        className="glass-card"
        initial="rest"
        whileHover="hover"
        animate="rest"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Blur overlay */}
        <motion.div
          className="background-blur-overlay"
          variants={{
            rest: { backdropFilter: "blur(8px)" },
            hover: { backdropFilter: "blur(0px)" }
          }}
          transition={{ duration: 0.0001, ease: "easeInOut" }}
        />

        <motion.div
          className="card-content"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </motion.div>
      </motion.div>
    </a>
  );
}
