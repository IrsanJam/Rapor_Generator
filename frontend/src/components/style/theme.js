const colors = {
  primary: '#3b4154',
  secondary: '#5b6173',
  tertiary: '#888d9d',
  brand: '#2E5EFF',
};

const fontSizes = {
  xxxs: '0.325rem',
  xxs: '0.5rem',
  xs: '0.625rem',
  s: '0.75rem',
  m: '1rem',
  l: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
};

const theme = {
  colors: colors,
  fontSizes: fontSizes,
  header: {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      color: colors.primary,
      paddingBottom: '0.5rem',
    },
    title: {
      color: colors.brand,
      textTransform: 'uppercase',
      fontSize: fontSizes.xl,
      fontWeight: 900,
    },
  },
  subheader: {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      alignItems: 'center',
      gap: '1rem',
      borderTop: '2px solid #e5e5e5',
      padding: '.5rem 0',
    },
    label: {
      color: colors.primary,
      textTransform: 'uppercase',
      fontSize: fontSizes.xs,
      fontWeight: 900,
    },
    value: {
      color: colors.primary,
      fontSize: fontSizes.s,
      fontWeight: 400,
    },
  },
  global: {
    pre: {
      margin: 0,
      wordBreak: 'break-word',
      maxWidth: '48ch',
      whiteSpace: 'pre-wrap',
      fontFamily: '"American Typewriter", monospace',
    },
  },
};

export default theme;
