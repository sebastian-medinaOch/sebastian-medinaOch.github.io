import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <motion.img
        src={profilePic}
        alt="Foto de perfil"
        className="hero-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Sebastian Medina
      </motion.h1>

      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Desarrollador de Software 🚀
      </motion.h2>

      <motion.p
        className="hero-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Apasionado por construir experiencias digitales modernas, con
        tecnologías futuristas y enfoque en la innovación.
      </motion.p>

      <div className="hero-buttons">
        <motion.a
          href="#projects"
          className="btn primary"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #02F6FA" }}
        >
          Ver Proyectos
        </motion.a>
        <motion.a
          href="#contact"
          className="btn secondary"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #4B0082" }}
        >
          Contactar
        </motion.a>
      </div>
    </section>
  );
}
