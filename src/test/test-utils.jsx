// eslint-disable-next-line import/namespace
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';
import { PageWrapper } from '../components/wrapper/PageWrapper';

export function render(ui, { route = '/', ...renderOptions } = {}) {
  // Push the route we want to test
  window.history.pushState({}, 'Test page', route);

  function Wrapper({ children }) {
    return (
      <StrictMode>
        <BrowserRouter>
          <PageWrapper>{children}</PageWrapper>
        </BrowserRouter>
      </StrictMode>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
