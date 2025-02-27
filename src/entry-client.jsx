// Third-party imports
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

// App level imports
import { PageWrapper } from "./components/wrapper/PageWrapper.jsx";

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
      <BrowserRouter>
        <PageWrapper />
      </BrowserRouter>
  </StrictMode>
);
