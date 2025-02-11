const useThemes = () => {
  const theme = 'dark';

  if (theme === 'dark') {
    const primaryTheme = 'g100';
    const secondaryTheme = 'g90';

    return { primaryTheme, secondaryTheme };
  }

  const primaryTheme =  'g10';
  const secondaryTheme =  'white';

  return { primaryTheme, secondaryTheme };
};

export default useThemes;
