// Third-party imports
import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';

// App level imports
import './App.scss';
import { Router } from './routes';

/**
 * @param {string} url
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(url, options) {
  const { pipe, abort } = renderToPipeableStream(
    <StrictMode>
      <StaticRouter location={url}>
        <Router />
      </StaticRouter>
    </StrictMode>,
    options
  );

  const head = '<meta name="description" content="Server-side rendered page">';

  return { pipe, head, abort };
}
