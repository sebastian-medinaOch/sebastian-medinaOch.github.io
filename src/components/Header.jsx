import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">🚀 SMO</div>

      {/* Menú Desktop */}
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <a href="#hero">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>

      {/* Botón hamburguesa para móvil */}
      <motion.div
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <span />
        <span />
        <span />
      </motion.div>
    </header>
  );
}
