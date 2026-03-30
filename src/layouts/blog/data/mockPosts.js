import imgAI from "assets/images/blog/ai_developer.png";
import imgJunior from "assets/images/blog/junior_dev.png";

const mockPosts = [
  {
    id: 1,
    title: "Inteligencia Artificial: el copiloto que está redefiniendo cómo escribimos código",
    topic: "Inteligencia Artificial",
    date: "30 Mar 2026",
    description:
      "La IA ya no es ciencia ficción. Es el asistente que muchos desarrolladores tienen abierto al lado de su editor de código. ¿Cómo está cambiando la industria y qué tan lejos llegará?",
    body: `La industria del desarrollo de software está viviendo una de sus transformaciones más radicales en décadas. La Inteligencia Artificial ha dejado de ser un concepto abstracto de laboratorio para convertirse en una herramienta cotidiana en los flujos de trabajo de millones de ingenieros alrededor del mundo.

Hoy en día, herramientas como **GitHub Copilot**, **ChatGPT**, **Gemini**, **Cursor** o **Claude** no solo sugieren líneas de código: razonan sobre arquitecturas, detectan errores lógicos, generan tests unitarios, documentan funciones en segundos y proponen refactorizaciones completas que antes requerían horas de análisis.

---

## ¿Cómo la usamos en el día a día?

Personalmente, la IA forma parte de mi flujo de trabajo de múltiples maneras:

- **Generación de boilerplate:** crear la estructura base de un microservicio, un endpoint REST o una configuración de Docker en segundos.
- **Revisión de código:** antes de hacer un pull request, consulto si hay alguna vulnerabilidad, mala práctica o mejora posible.
- **Depuración inteligente:** cuando un error no tiene sentido, describir el contexto a la IA y recibir una hipótesis precisa ahorra horas.
- **Aprendizaje acelerado:** explorar un framework o lenguaje nuevo es mucho más rápido cuando tienes un tutor que responde al instante.

---

## El impacto en la industria

Las empresas ya están adoptando la IA a nivel estratégico. No como un juguete, sino como un **multiplicador de productividad**.

Startups con equipos de 5 personas compiten con estructuras de 50 gracias a este apalancamiento tecnológico. Los tiempos de entrega se comprimen. Los bugs se detectan más temprano. Y los desarrolladores que dominan estas herramientas se vuelven exponencialmente más efectivos.

---

## 💭 Reflexión final: ¿acoplarnos o resistir?

Esta es la pregunta que más escucho en comunidades de desarrolladores. Y mi postura es clara:

*Resistirse a la IA en el desarrollo de software es como resistirse al compilador o al control de versiones. No tiene sentido práctico.*

Pero **adaptarse no significa rendirse** ni perder identidad profesional. Significa evolucionar. El desarrollador que entiende lo que hace la IA —que puede evaluar, corregir y dirigir sus outputs— tiene una ventaja enorme frente a quien la utiliza ciegamente o la rechaza por completo.

La IA no reemplaza el pensamiento crítico, la experiencia de dominio ni la capacidad de entender el negocio. **Reemplaza el trabajo mecánico.** Y eso debería liberarnos para lo que realmente importa: diseñar sistemas que funcionen, escalen y tengan impacto real.

**Adaptarse no es rendirse. Es crecer.**`,
    mediaType: "image",
    mediaData: [imgAI],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sebastian-medinaOch",
    },
  },
  {
    id: 2,
    title: "El muro invisible: por qué los desarrolladores junior no pueden ni entrar a la industria",
    topic: "Mercado Laboral",
    date: "28 Mar 2026",
    description:
      "Las empresas exigen 3+ años de experiencia para posiciones de junior. Una paradoja que está cerrando las puertas a toda una generación de talento. ¿Qué consecuencias trae esto?",
    body: `Si alguna vez has buscado trabajo como desarrollador junior habrás visto el mismo patrón repetido en cientos de ofertas: *"Junior Developer — Requisitos: mínimo 3 años de experiencia"*. La ironía es tan evidente que ya se ha convertido en meme, pero detrás de esa broma hay una crisis real que afecta a miles de personas.

---

## El problema: la paradoja de la experiencia

El mercado laboral tecnológico ha mutado de una manera que hace casi imposible el punto de entrada. Las empresas, especialmente tras la ola de despidos masivos en tech (2022-2024), se volvieron extremadamente selectivas.

Prefieren pagar más por un perfil senior antes que invertir tiempo en formar a alguien desde cero. El resultado es una situación absurda:

*No puedes conseguir experiencia sin un trabajo, y no puedes conseguir un trabajo sin experiencia.*

---

## ¿Qué está causando esto?

- **Automatización y presión por productividad inmediata:** la adopción de IA reduce la necesidad de ciertos perfiles de entrada. Las empresas esperan que incluso un "junior" entregue valor desde el primer sprint.
- **Reducción de programas de onboarding:** el modelo "te enseñamos" está siendo reemplazado por "necesitamos a alguien que ya sepa".
- **Overqualification normalizada:** cuando hay 300 aplicaciones para una posición junior, los reclutadores simplemente filtran hacia los más experimentados.
- **Desconexión educación–mercado:** los bootcamps y universidades forman perfiles sólidos, pero hay un gap entre "aprender" y "producir en un entorno real".

---

## ¿Qué consecuencias trae esta circunstancia?

La acumulación de talento sin salida tiene consecuencias que van más allá del individuo:

1. **Deserción del sector:** muchos jóvenes bien preparados abandonan la tecnología y migran a otros campos. Perdemos talento que tardó años en formarse.
2. **Desigualdad de acceso:** los que logran entrar suelen hacerlo con conexiones o proyectos muy visibles. No por méritos puros en un sistema justo.
3. **Deuda técnica futura:** una industria que no forma activamente a sus próximas generaciones construye sobre bases frágiles.
4. **Frustración y pérdida de confianza:** hay algo profundamente desmotivador en estudiar, practicar y construir proyectos... y seguir recibiendo rechazos automáticos.

---

## ¿Qué se puede hacer?

Mi recomendación para quienes están en esta situación: **no paren de construir**.

El portafolio importa más que nunca. Contribuir a proyectos **open source**, crear APIs reales, desplegar aplicaciones en la nube y tener presencia activa en GitHub habla más que cualquier certificado.

Y a las empresas: apostar por el junior que tiene hambre, capacidad de aprendizaje y actitud puede ser la mejor inversión que hagan.

**El muro existe. Pero los muros se escalan.**`,
    mediaType: "image",
    mediaData: [imgJunior],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sebastian-medinaOch",
    },
  },
];

export default mockPosts;
