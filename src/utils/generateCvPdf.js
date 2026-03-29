import { jsPDF } from 'jspdf';
import profilePhoto from 'assets/images/profiles/foto-perfil-ia-v2-negro.png';

/**
 * ─── PHOTO LOADING AND PREPARATION ───────────────────────────────────────────
 * Carga la imagen y la procesa para el PDF.
 * Para ajustar el ENCUADRE de la cara, mira la línea con 'ctx.drawImage'.
 */
function loadPhoto(src, size = 400) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      /**
       * AJUSTE DE ENCUADRE:
       * Como la foto original es de cuerpo completo, para que se vea la cara 
       * desplazamos la imagen hacia arriba usando un multiplicador (0.15 = 15%).
       */
      const scale = Math.max(size / img.naturalWidth, size / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      
      // (size - sh) * 0.15 sitúa el "foco" en la parte superior donde está la cara
      ctx.drawImage(img, (size - sw) / 2, (size - sh) * 0.15, sw, sh);

      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

// ─── Color palette ───────────────────────────────────────────────────────────
const C = {
  bg: [15, 23, 42],
  sidebar: [16, 54, 51],
  accent: [35, 134, 128],
  accent2: [61, 196, 186],
  white: [255, 255, 255],
  light: [210, 230, 228],
  muted: [140, 170, 165],
  dark: [10, 18, 32],
  starFull: [61, 196, 186],
  starEmpty: [40, 70, 68],
};

// ─── Layout & Margins ────────────────────────────────────────────────────────
const PAGE_W = 210;
const PAGE_H = 297;
const SB_W = 66;
const MAIN_X = SB_W + 8;
const RIGHT_MARGIN = 10; // Aumentado de 6 a 10 para evitar recortes a la derecha
const MAIN_W = PAGE_W - MAIN_X - RIGHT_MARGIN;
const SX = 5; 
const SW = SB_W - SX - 5;

// ─── Draw helpers ─────────────────────────────────────────────────────────────
const setFill = (d, c) => d.setFillColor(...c);
const setColor = (d, c) => d.setTextColor(...c);
const setDraw = (d, c) => d.setDrawColor(...c);
/**
 * MODIFICAR TAMAÑO DE LETRA:
 * Cambia el tercer parámetro en las llamadas a setFont() en el código de abajo.
 */
const setFont = (d, style, size) => { d.setFont('helvetica', style); d.setFontSize(size); };
const rect = (d, x, y, w, h, c) => { setFill(d, c); d.rect(x, y, w, h, 'F'); };
const split = (d, text, maxW) => d.splitTextToSize(String(text), maxW);

// ─── Draw a 5-star rating ────────────────────────────────────────────────────
function drawStars(doc, x, y, pct) {
  const total = 5;
  const filledCount = Math.round((pct / 100) * total);
  const starRadius = 1.8;
  const spacing = 4.5;

  for (let i = 0; i < total; i++) {
    const cx = x + i * spacing + starRadius;
    const cy = y;
    drawStarShape(doc, cx, cy, 5, starRadius, starRadius / 2.2, i < filledCount);
  }
}

function drawStarShape(doc, cx, cy, spikes, outerRadius, innerRadius, isFilled) {
  const points = [];
  for (let i = 0; i < 11; i++) {
    const r = (i % 2 === 0) ? outerRadius : innerRadius;
    const a = (i * Math.PI) / 5 - Math.PI / 2;
    points.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r });
  }

  if (isFilled) {
    setFill(doc, C.starFull);
    for (let i = 0; i < 10; i++) {
      doc.triangle(cx, cy, points[i].x, points[i].y, points[i + 1].x, points[i + 1].y, 'F');
    }
  } else {
    setDraw(doc, C.starEmpty);
    doc.setLineWidth(0.2);
    for (let i = 0; i < 10; i++) {
      doc.line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    }
  }
}

function sectionHeader(doc, label, x, y, w) {
  setFill(doc, C.accent);
  doc.rect(x, y, 3, 6, 'F');
  setFont(doc, 'bold', 10.5);
  setColor(doc, C.accent2);
  doc.text(label.toUpperCase(), x + 6, y + 4.5);
  setDraw(doc, [35, 80, 76]);
  doc.setLineWidth(0.2);
  doc.line(x, y + 7.5, x + w, y + 7.5);
  return y + 11;
}

function sdSection(doc, label, sy) {
  setFont(doc, 'bold', 9);
  setColor(doc, C.accent2);
  doc.text(label.toUpperCase(), SX, sy);
  setFill(doc, C.accent);
  doc.rect(SX, sy + 1.8, SW, 0.5, 'F');
  return sy + 6;
}

// ─── Skill data ─────────────────────────────────────────────────────────────
const SKILLS = [
  { name: 'Java', pct: 100, years: 5 },
  { name: 'Spring Boot', pct: 100, years: 4 },
  { name: 'Microservicios', pct: 100, years: 5 },
  { name: 'Arq. Hexagonal', pct: 100, years: 5 },
  { name: 'APIs REST', pct: 100, years: 4 },
  { name: 'SonarQube', pct: 100, years: 4 },
  { name: 'AWS', pct: 80, years: 4 },
  { name: 'Docker', pct: 80, years: 4 },
  { name: 'Kubernetes', pct: 80, years: 4 },
  { name: 'CI/CD', pct: 80, years: 4 },
  { name: 'SQL', pct: 80, years: 4 },
  { name: 'NoSQL', pct: 80, years: 4 },
  { name: 'Git', pct: 80, years: 4 },
  { name: 'SQS / SNS', pct: 80, years: 4 },
  { name: 'RabbitMQ / Kafka', pct: 80, years: 4 },
  { name: 'Azure Cloud', pct: 70, years: 4 },
  { name: 'WebFlux', pct: 70, years: 4 },
  { name: 'JavaScript', pct: 40, years: 2 },
];

function levelLabel(pct, lang) {
  const es = { e: 'Experto', a: 'Avanzado', i: 'Intermedio', b: 'Básico' };
  const en = { e: 'Expert', a: 'Advanced', i: 'Intermediate', b: 'Basic' };
  const m = lang === 'es' ? es : en;
  if (pct >= 100) return m.e;
  if (pct >= 80) return m.a;
  if (pct >= 70) return m.i;
  return m.b;
}

// ─── Main entry point ─────────────────────────────────────────────────────────
export async function generateCvPdf(t, lang) {
  /**
   * TAMAÑO DE FOTO:
   * Cambia el primer valor (360) para la resolución de carga
   * y la variable 'photoSize' (abajo) para la dimensión en el PDF.
   */
  const photoData = await loadPhoto(profilePhoto, 360);
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  // ── BACKGROUNDS ─────────────────────────────────────────────────────────────
  rect(doc, 0, 0, PAGE_W, PAGE_H, C.bg);
  rect(doc, 0, 0, SB_W, PAGE_H, C.sidebar);

  // ── TOP ACCENT BAR ───────────────────────────────────────────────────────────
  setFill(doc, C.accent);
  doc.rect(0, 0, PAGE_W, 1.5, 'F');

  // ══════════════════════════════════════════════════════════════════════════════
  // HEADER
  // ══════════════════════════════════════════════════════════════════════════════
  const headerH = 36;
  rect(doc, 0, 0, PAGE_W, headerH, C.dark);
  setFill(doc, C.accent);
  doc.rect(SB_W, 0, 1.2, headerH, 'F');

  // Name
  setFont(doc, 'bold', 22);
  setColor(doc, C.white);
  doc.text('Sebastian Medina Ochoa', MAIN_X + 2, 14);

  // Role
  setFont(doc, 'normal', 10.5);
  setColor(doc, C.accent2);
  const roleText = lang === 'es'
    ? 'Desarrollador Backend  |  Java  |  Spring Boot  |  Cloud'
    : 'Backend Developer  |  Java  |  Spring Boot  |  Cloud';
  doc.text(roleText, MAIN_X + 2, 21);

  // Contact
  setFont(doc, 'normal', 8.5);
  setColor(doc, C.light);
  doc.text('Email: sebasthyy1@gmail.com', MAIN_X + 2, 28);
  doc.text(t('personalInfo.labels.ubicacion') + ': ' + t('personalInfo.values.ubicacion'), MAIN_X + 2, 32);
  
  // Teléfono (Alineado a la derecha con margen de seguridad)
  const phoneLabel = t('personalInfo.labels.telefono');
  const phoneValue = t('personalInfo.values.telefono');
  const fullPhone = `${phoneLabel}: ${phoneValue}`;
  doc.text(fullPhone, PAGE_W - RIGHT_MARGIN, 32, { align: 'right' });

  // Photo
  /**
   * MODIFICAR TAMAÑO DE FOTO EN PDF:
   * Cambia el valor de photoSize (mm). El valor de photoX centra la foto en el sidebar.
   */
  const photoSize = 28; 
  const photoX = (SB_W - photoSize) / 2;
  const photoY = 4;
  if (photoData) {
    doc.addImage(photoData, 'PNG', photoX, photoY, photoSize, photoSize);
    // Borde circular eliminado a petición del usuario
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // SIDEBAR
  // ══════════════════════════════════════════════════════════════════════════════
  let sy = 40;

  sy = sdSection(doc, lang === 'es' ? 'Habilidades' : 'Skills', sy);
  SKILLS.forEach(({ name, pct, years }) => {
    if (sy > PAGE_H - 12) return;
    setFont(doc, 'bold', 8);
    setColor(doc, C.white);
    doc.text(name, SX, sy);
    const yrsStr = years + (lang === 'es' ? 'a' : 'y');
    setFont(doc, 'normal', 6.5);
    setColor(doc, C.muted);
    doc.text(yrsStr, SB_W - SX, sy, { align: 'right' });
    sy += 2.8;
    drawStars(doc, SX, sy, pct);
    const lvl = levelLabel(pct, lang);
    setFont(doc, 'normal', 6.5);
    setColor(doc, C.accent2);
    doc.text(lvl, SB_W - SX, sy + 0.6, { align: 'right' });
    sy += 5.8;
  });

  sy += 2;
  if (sy < PAGE_H - 20) {
    sy = sdSection(doc, t('characteristics.languages.title'), sy);
    const langs = [
      { name: t('characteristics.languages.spanish'), level: t('characteristics.languages.native'), pct: 100 },
      { name: t('characteristics.languages.english'), level: t('characteristics.languages.basic'), pct: 30 },
    ];
    langs.forEach(({ name, level, pct }) => {
      setFont(doc, 'bold', 8);
      setColor(doc, C.white);
      doc.text(name, SX, sy);
      setFont(doc, 'normal', 6.5);
      setColor(doc, C.muted);
      doc.text(level, SB_W - SX, sy, { align: 'right' });
      sy += 2.8;
      drawStars(doc, SX, sy, pct);
      sy += 7;
    });
  }

  sy += 2;
  if (sy < PAGE_H - 15) {
    sy = sdSection(doc, t('characteristics.education.title'), sy);
    const degrees = [
      { deg: t('characteristics.education.degree1'), school: t('characteristics.education.school1') },
      { deg: t('characteristics.education.degree2'), school: t('characteristics.education.school2') },
    ];
    degrees.forEach(({ deg, school }) => {
      setFont(doc, 'bold', 7.5);
      setColor(doc, C.white);
      const lines = split(doc, deg, SW);
      doc.text(lines, SX, sy);
      sy += lines.length * 4;
      setFont(doc, 'normal', 7);
      setColor(doc, C.accent2);
      doc.text(school, SX, sy);
      sy += 6;
    });
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // MAIN COLUMN
  // ══════════════════════════════════════════════════════════════════════════════
  let my = 42;

  my = sectionHeader(doc, lang === 'es' ? 'Perfil Profesional' : 'Professional Profile', MAIN_X, my, MAIN_W);
  const summary = t('personalInfo.description');
  const summaryLines = split(doc, summary, MAIN_W);
  setFont(doc, 'normal', 9);
  setColor(doc, C.light);
  doc.text(summaryLines, MAIN_X, my);
  my += summaryLines.length * 5.2 + 8;

  // ── EXPERIENCE ───────────────────────────────────────────────────────────────
  my = sectionHeader(doc, t('experience.title'), MAIN_X, my, MAIN_W);

  const projectKeys = [
    { key: 'inditex', role: t('experience.roles.backend') },
    { key: 'mercantil', role: t('experience.roles.leader') },
    { key: 'itau', role: t('experience.roles.backend') },
    { key: 'bancolombia', role: t('experience.roles.backend') },
    { key: 'pragma', role: t('experience.roles.software') },
  ];

  projectKeys.forEach(({ key, role }) => {
    if (my > PAGE_H - 30) return;

    const title = t(`experience.projects.${key}.title`);
    const date = t(`experience.projects.${key}.date`);
    const location = t(`experience.projects.${key}.location`);
    const desc = t(`experience.projects.${key}.desc`);

    // Bullet
    setFill(doc, C.accent);
    doc.circle(MAIN_X + 1.5, my + 1.5, 1.8, 'F');

    // Job Title
    setFont(doc, 'bold', 11);
    setColor(doc, C.white);
    doc.text(title, MAIN_X + 7, my + 3);

    // Date (Margen ajustado para evitar corte)
    setFont(doc, 'normal', 9);
    setColor(doc, C.muted);
    doc.text(date, PAGE_W - RIGHT_MARGIN, my + 3, { align: 'right' });

    my += 7;

    // Role
    setFont(doc, 'bold', 10);
    setColor(doc, C.accent2);
    doc.text(role, MAIN_X + 7, my);

    // Location
    const roleWidth = doc.getTextWidth(role);
    setFont(doc, 'normal', 9);
    setColor(doc, C.muted);
    doc.text(' | ' + location, MAIN_X + 7 + roleWidth, my);

    my += 5;

    // Description
    const descLines = split(doc, desc, MAIN_W - 10);
    setFont(doc, 'normal', 10);
    setColor(doc, C.light);
    doc.text(descLines, MAIN_X + 7, my);
    my += descLines.length * 4.4 + 8;

    // Separator line
    setDraw(doc, [30, 55, 52]);
    doc.setLineWidth(0.3);
    doc.line(MAIN_X, my - 4, MAIN_X + MAIN_W, my - 4);
  });

  // ── FOOTER ───────────────────────────────────────────────────────────────────
  setFill(doc, C.accent);
  doc.rect(0, PAGE_H - 2.5, PAGE_W, 2.5, 'F');
  setFont(doc, 'normal', 8);
  setColor(doc, C.muted);
  doc.text(
    'Sebastian Medina Ochoa  |  ' + roleText,
    PAGE_W / 2, PAGE_H - 6, { align: 'center' }
  );

  // ── SAVE ─────────────────────────────────────────────────────────────────────
  doc.save(`CV_Sebastian_Medina_${lang.toUpperCase()}.pdf`);
}
