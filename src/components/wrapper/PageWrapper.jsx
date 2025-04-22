import { GlobalTheme, Theme } from '@carbon/react';

import { useThemes } from '../../hooks/useThemes';
import { Router } from '../../routes/index';

export const PageWrapper = () => {
  const { primaryTheme, themeReady } = useThemes();

  return themeReady ? (
    <GlobalTheme theme={primaryTheme}>
      <Theme theme={primaryTheme}>
        <Router />
      </Theme>
    </GlobalTheme>
  ) : (
    <Router />
  );
};
