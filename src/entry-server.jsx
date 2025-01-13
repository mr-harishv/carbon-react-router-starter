// Third-party imports
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

// App level imports
import './App.scss';
import { Router } from './routes';

/**
 * @param {string} url
 */
export function render(url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <Router />
      </StaticRouter>
    </StrictMode>
  );

  const head = '<meta name="description" content="Server-side rendered page">';

  return { html, head };
}
