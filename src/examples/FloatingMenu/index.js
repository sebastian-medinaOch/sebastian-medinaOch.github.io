import React, { useState } from 'react';
import { MdTranslate, MdDownload, MdBrightness4, MdBrightness7, MdKeyboardArrowUp, MdClose } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { generateCvPdf } from 'utils/generateCvPdf';

const menuStyle = {
  position: 'fixed',
  bottom: 28,
  right: 28,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '12px',
  zIndex: 9999,
};

const fabStyle = {
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #238680, #3dc4ba)',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 20px rgba(35, 134, 128, 0.5)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  flexShrink: 0,
};

const actionRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  justifyContent: 'flex-end',
};

const actionBtnStyle = {
  width: 44,
  height: 44,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #103633, #105656)',
  border: '1px solid #238680',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
  transition: 'transform 0.2s ease, border-color 0.2s ease',
  flexShrink: 0,
};

const labelStyle = {
  background: 'linear-gradient(135deg, #103633, #105656)',
  color: '#fff',
  fontSize: '0.8rem',
  fontWeight: 600,
  padding: '6px 14px',
  borderRadius: '20px',
  border: '1px solid #238680',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
  whiteSpace: 'nowrap',
  letterSpacing: '0.02em',
  pointerEvents: 'none',
};

const FloatingMenu = ({ onToggleTheme, isLight }) => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleTranslate = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
    setOpen(false);
  };

  const handleTheme = () => {
    onToggleTheme();
    setOpen(false);
  };

  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setOpen(false);
    setDownloading(true);
    try {
      await generateCvPdf(t, i18n.language);
    } finally {
      setDownloading(false);
    }
  };

  const themeLabel = isLight ? t('menu.themeDark') : t('menu.themeLight');
  const ThemeIcon = isLight ? MdBrightness7 : MdBrightness4;

  const downloadIcon = downloading
    ? <span style={{ color: '#3dc4ba', fontSize: 14, fontWeight: 'bold' }}>...</span>
    : <MdDownload size={20} color="#3dc4ba" />;

  const actions = [
    { icon: <MdTranslate size={20} color="#3dc4ba" />, label: t('menu.translate'), action: handleTranslate },
    { icon: downloadIcon, label: t('menu.download'), action: handleDownload },
    { icon: <ThemeIcon size={20} color="#3dc4ba" />, label: themeLabel, action: handleTheme },
  ];

  return (
    <div style={menuStyle}>
      {open && actions.map((action, i) => (
        <div key={i} style={actionRowStyle}>
          <span style={labelStyle}>{action.label}</span>
          <button
            style={actionBtnStyle}
            onClick={action.action}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.borderColor = '#3dc4ba';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = '#238680';
            }}
          >
            {action.icon}
          </button>
        </div>
      ))}
      <button
        style={fabStyle}
        onClick={() => setOpen(o => !o)}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(35, 134, 128, 0.7)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(35, 134, 128, 0.5)';
        }}
        aria-label="Utility menu"
      >
        {open
          ? <MdClose size={24} color="#fff" />
          : <MdKeyboardArrowUp size={28} color="#fff" />
        }
      </button>
    </div>
  );
};

export default FloatingMenu;
