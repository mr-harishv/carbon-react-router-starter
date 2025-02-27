import { GlobalTheme, Theme } from "@carbon/react";

import useThemes from "../../hooks/useThemes.js";
import { Router } from "../../routes/index.jsx";

export const PageWrapper = () => {
  const {primaryTheme} = useThemes();

  return (
    <GlobalTheme theme={primaryTheme}>
      <Theme theme={primaryTheme}>
        <Router/>
      </Theme>
    </GlobalTheme>
  );
}
