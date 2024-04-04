import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { prettyDOM } from '@testing-library/dom';

afterEach(() => {
  cleanup();
});

const debug = (dom?: Element | Document) => {
  return prettyDOM(dom);
};

const customRender = (ui: React.ReactElement, options = {}) => {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
export { debug };
