import { Router } from "../../routes/index.jsx";
import { GlobalTheme, Theme } from "@carbon/react";
import useThemes from "../../hooks/useThemes.js";

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
