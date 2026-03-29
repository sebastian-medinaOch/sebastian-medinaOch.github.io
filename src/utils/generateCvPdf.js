import { jsPDF } from 'jspdf';

// ─── Color palette ───────────────────────────────────────────────────────────
const C = {
  bg:       [15,  23,  42],   // #0f172a
  sidebar:  [16,  54,  51],   // #103633
  accent:   [35, 134, 128],   // #238680
  accent2:  [61, 196, 186],   // #3dc4ba
  white:    [255, 255, 255],
  light:    [200, 220, 218],
  muted:    [140, 170, 165],
  dark:     [10,  18,  32],
};

// ─── helpers ─────────────────────────────────────────────────────────────────
const hex = ([r, g, b]) => ({ r, g, b });

function setFill(doc, color)   { doc.setFillColor(...color); }
function setColor(doc, color)  { doc.setTextColor(...color); }
function setDraw(doc, color)   { doc.setDrawColor(...color); }
function setFont(doc, style, size) {
  doc.setFont('helvetica', style);
  doc.setFontSize(size);
}

function rect(doc, x, y, w, h, color) {
  setFill(doc, color);
  doc.rect(x, y, w, h, 'F');
}

function splitLines(doc, text, maxWidth) {
  return doc.splitTextToSize(String(text), maxWidth);
}

// ─── Layout constants ────────────────────────────────────────────────────────
const PAGE_W     = 210;
const PAGE_H     = 297;
const SIDEBAR_W  = 62;
const MAIN_X     = SIDEBAR_W + 8;
const MAIN_W     = PAGE_W - MAIN_X - 8;
const MARGIN_TOP = 8;

// ─── Skills data (static – mirrors Skills/data/index.js percentages) ─────────
const SKILLS = [
  { name: 'Java',                   pct: 100, years: 5 },
  { name: 'Spring Boot',            pct: 100, years: 4 },
  { name: 'Microservicios',         pct: 100, years: 5 },
  { name: 'Arquitectura Hexagonal', pct: 100, years: 5 },
  { name: 'APIs REST',              pct: 100, years: 4 },
  { name: 'SonarQube',              pct: 100, years: 4 },
  { name: 'AWS',                    pct:  80, years: 4 },
  { name: 'Docker',                 pct:  80, years: 4 },
  { name: 'Kubernetes',             pct:  80, years: 4 },
  { name: 'CI/CD',                  pct:  80, years: 4 },
  { name: 'SQL',                    pct:  80, years: 4 },
  { name: 'NoSQL',                  pct:  80, years: 4 },
  { name: 'Git',                    pct:  80, years: 4 },
  { name: 'SQS',                    pct:  80, years: 4 },
  { name: 'SNS',                    pct:  80, years: 4 },
  { name: 'RabbitMQ',               pct:  80, years: 4 },
  { name: 'Kafka',                  pct:  80, years: 4 },
  { name: 'Azure Cloud',            pct:  70, years: 4 },
  { name: 'WebFlux',                pct:  70, years: 4 },
  { name: 'JavaScript',             pct:  40, years: 2 },
];

// level labels
function levelLabel(pct, lang) {
  const es = { 100: 'Experto', 80: 'Avanzado', 70: 'Intermedio', 40: 'Básico' };
  const en = { 100: 'Expert',  80: 'Advanced',  70: 'Intermediate', 40: 'Basic'  };
  const map = lang === 'es' ? es : en;
  if (pct >= 100) return map[100];
  if (pct >=  80) return map[80];
  if (pct >=  70) return map[70];
  return map[40];
}

// ─── Section header helper ────────────────────────────────────────────────────
function sectionHeader(doc, label, x, y, w) {
  setFill(doc, C.accent);
  doc.rect(x, y, 2.5, 4.5, 'F');
  setFont(doc, 'bold', 9);
  setColor(doc, C.accent2);
  doc.text(label.toUpperCase(), x + 5, y + 3.5);
  setDraw(doc, [35, 80, 76]);
  doc.setLineWidth(0.3);
  doc.line(x, y + 5.5, x + w, y + 5.5);
  return y + 9;
}

// ─── Main export ─────────────────────────────────────────────────────────────
export function generateCvPdf(t, lang) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  // ── BACKGROUND ──────────────────────────────────────────────────────────
  rect(doc, 0, 0, PAGE_W, PAGE_H, C.bg);

  // ── SIDEBAR ──────────────────────────────────────────────────────────────
  rect(doc, 0, 0, SIDEBAR_W, PAGE_H, C.sidebar);

  // ── ACCENT BAR top ───────────────────────────────────────────────────────
  setFill(doc, C.accent);
  doc.rect(0, 0, PAGE_W, 1.5, 'F');

  // ── HEADER BLOCK ─────────────────────────────────────────────────────────
  rect(doc, 0, 0, PAGE_W, 28, C.dark);
  // name
  setFont(doc, 'bold', 20);
  setColor(doc, C.white);
  doc.text('Sebastian Medina Ochoa', MAIN_X, 12);
  // role line
  setFont(doc, 'normal', 9);
  setColor(doc, C.accent2);
  const roleText = lang === 'es'
    ? 'Desarrollador Backend · Java · Spring Boot · Cloud'
    : 'Backend Developer · Java · Spring Boot · Cloud';
  doc.text(roleText, MAIN_X, 18);
  // contact row
  setFont(doc, 'normal', 7.5);
  setColor(doc, C.light);
  const contacts = [
    '✉  sebastianmedinaochoa@gmail.com',
    '📍  ' + t('personalInfo.values.ubicacion'),
    '🔗  github.com/sebastian-medinaOch',
  ];
  contacts.forEach((c, i) => doc.text(c, MAIN_X + i * 66, 23.5));

  // ── AVATAR placeholder in sidebar header ──────────────────────────────────
  setFill(doc, C.accent);
  doc.circle(SIDEBAR_W / 2, 14, 10, 'F');
  setFont(doc, 'bold', 10);
  setColor(doc, C.white);
  doc.text('SM', SIDEBAR_W / 2, 14.8, { align: 'center' });

  // ═══════════════════════════════════════════════════════════════════════════
  //  SIDEBAR CONTENT
  // ═══════════════════════════════════════════════════════════════════════════
  let sy = 32;
  const SX = 4;
  const SW = SIDEBAR_W - SX - 4;

  // helper for sidebar sections
  const sdSection = (label) => {
    setFill(doc, C.accent);
    doc.rect(SX, sy, SW, 0.4, 'F');
    setFont(doc, 'bold', 7.5);
    setColor(doc, C.accent2);
    doc.text(label.toUpperCase(), SX, sy + 4);
    sy += 6;
  };

  // — Skills —
  sdSection(lang === 'es' ? 'Habilidades' : 'Skills');
  SKILLS.forEach(({ name, pct, years }) => {
    if (sy > PAGE_H - 10) return; // guard
    // name + level
    setFont(doc, 'bold', 6.5);
    setColor(doc, C.white);
    doc.text(name, SX, sy);

    const lvl = levelLabel(pct, lang);
    setFont(doc, 'normal', 5.5);
    setColor(doc, C.muted);
    doc.text(`${lvl} · ${years}${lang === 'es' ? 'a' : 'y'}`, SX + SW - doc.getTextWidth(`${lvl} · ${years}${lang === 'es' ? 'a' : 'y'}`), sy);

    // progress bar
    const barY = sy + 1.5;
    const barH = 2;
    setFill(doc, [30, 50, 48]);
    doc.rect(SX, barY, SW, barH, 'F');
    const fillW = (SW * pct) / 100;
    // gradient-like: accent → accent2
    setFill(doc, C.accent);
    doc.rect(SX, barY, fillW, barH, 'F');

    sy += 7;
  });

  sy += 2;

  // — Languages —
  sdSection(t('characteristics.languages.title'));
  const langs = [
    { name: t('characteristics.languages.spanish'), level: t('characteristics.languages.native'), pct: 100 },
    { name: t('characteristics.languages.english'), level: t('characteristics.languages.basic'),  pct: 30  },
  ];
  langs.forEach(({ name, level, pct }) => {
    if (sy > PAGE_H - 8) return;
    setFont(doc, 'bold', 6.5);
    setColor(doc, C.white);
    doc.text(name, SX, sy);
    setFont(doc, 'normal', 5.5);
    setColor(doc, C.muted);
    doc.text(level, SX, sy + 3.5);
    // bar
    setFill(doc, [30, 50, 48]);
    doc.rect(SX, sy + 5, SW, 2, 'F');
    setFill(doc, C.accent);
    doc.rect(SX, sy + 5, (SW * pct) / 100, 2, 'F');
    sy += 11;
  });

  sy += 2;

  // — Education —
  sdSection(t('characteristics.education.title'));
  const degrees = [
    { deg: t('characteristics.education.degree1'), school: t('characteristics.education.school1') },
    { deg: t('characteristics.education.degree2'), school: t('characteristics.education.school2') },
  ];
  degrees.forEach(({ deg, school }) => {
    if (sy > PAGE_H - 10) return;
    const degLines = splitLines(doc, deg, SW);
    setFont(doc, 'bold', 6.5);
    setColor(doc, C.white);
    doc.text(degLines, SX, sy);
    sy += degLines.length * 3.5;
    setFont(doc, 'normal', 6);
    setColor(doc, C.accent2);
    doc.text(school, SX, sy);
    sy += 6;
  });

  sy += 2;

  // — Aptitudes sidebar —
  sdSection(t('characteristics.aptitudes.title'));
  const aptItems = Object.values(t('characteristics.aptitudes.items', { returnObjects: true }));
  aptItems.forEach((item) => {
    if (sy > PAGE_H - 5) return;
    const lines = splitLines(doc, `• ${item}`, SW);
    setFont(doc, 'normal', 5.5);
    setColor(doc, C.light);
    doc.text(lines, SX, sy);
    sy += lines.length * 3 + 0.5;
  });

  // ═══════════════════════════════════════════════════════════════════════════
  //  MAIN CONTENT
  // ═══════════════════════════════════════════════════════════════════════════
  let my = 32;

  // — About / Summary —
  my = sectionHeader(doc, lang === 'es' ? 'Perfil Profesional' : 'Professional Profile', MAIN_X, my, MAIN_W);
  const summary = t('personalInfo.description');
  const summaryLines = splitLines(doc, summary, MAIN_W);
  setFont(doc, 'normal', 7.5);
  setColor(doc, C.light);
  doc.text(summaryLines, MAIN_X, my);
  my += summaryLines.length * 3.8 + 4;

  // — Experience —
  my = sectionHeader(doc, t('experience.title'), MAIN_X, my, MAIN_W);

  const projects = [
    {
      key: 'inditex',
      role: t('experience.roles.backend'),
      color: C.accent2,
    },
    {
      key: 'mercantil',
      role: t('experience.roles.leader'),
      color: C.accent2,
    },
    {
      key: 'itau',
      role: t('experience.roles.backend'),
      color: C.accent2,
    },
    {
      key: 'bancolombia',
      role: t('experience.roles.backend'),
      color: C.accent2,
    },
    {
      key: 'pragma',
      role: t('experience.roles.software'),
      color: C.accent2,
    },
  ];

  projects.forEach(({ key, role, color }) => {
    if (my > PAGE_H - 20) return;

    const title    = t(`experience.projects.${key}.title`);
    const location = t(`experience.projects.${key}.location`);
    const date     = t(`experience.projects.${key}.date`);
    const desc     = t(`experience.projects.${key}.desc`);

    // dot
    setFill(doc, C.accent);
    doc.circle(MAIN_X + 1, my + 1, 1.2, 'F');

    // title + date
    setFont(doc, 'bold', 8);
    setColor(doc, C.white);
    doc.text(title, MAIN_X + 5, my + 2);

    setFont(doc, 'normal', 6.5);
    setColor(doc, C.muted);
    doc.text(date, MAIN_X + MAIN_W - doc.getTextWidth(date), my + 2);

    // role + location
    my += 5;
    setFont(doc, 'bold', 7);
    setColor(doc, color);
    doc.text(role, MAIN_X + 5, my);

    setFont(doc, 'normal', 6.5);
    setColor(doc, C.muted);
    doc.text(`📍 ${location}`, MAIN_X + 5 + doc.getTextWidth(role) + 4, my);

    // description
    my += 4;
    const descLines = splitLines(doc, desc, MAIN_W - 5);
    setFont(doc, 'normal', 7);
    setColor(doc, C.light);
    doc.text(descLines, MAIN_X + 5, my);
    my += descLines.length * 3.3 + 6;

    // hairline separator
    setDraw(doc, [30, 55, 52]);
    doc.setLineWidth(0.2);
    doc.line(MAIN_X, my - 3, MAIN_X + MAIN_W, my - 3);
  });

  // ── FOOTER ───────────────────────────────────────────────────────────────
  setFill(doc, C.accent);
  doc.rect(0, PAGE_H - 1.5, PAGE_W, 1.5, 'F');
  setFont(doc, 'normal', 6);
  setColor(doc, C.muted);
  doc.text('Sebastian Medina Ochoa · Software Developer', PAGE_W / 2, PAGE_H - 4, { align: 'center' });

  // ── SAVE ─────────────────────────────────────────────────────────────────
  const filename = `CV_Sebastian_Medina_${lang.toUpperCase()}.pdf`;
  doc.save(filename);
}
