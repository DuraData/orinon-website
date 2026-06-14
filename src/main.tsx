import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

// #region debug-point A:startup
const debugUrl = 'http://127.0.0.1:7777/event';
const debugBase = {
  sessionId: 'blank-page',
  runId: 'pre-fix',
  ts: Date.now(),
};
const reportDebugEvent = (hypothesisId: string, msg: string, data: Record<string, unknown> = {}) => {
  fetch(debugUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...debugBase,
      hypothesisId,
      location: 'src/main.tsx',
      msg,
      data,
      ts: Date.now(),
    }),
  }).catch(() => {});
};

window.addEventListener('error', (event) => {
  reportDebugEvent('A', '[DEBUG] window error', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
  });
});

window.addEventListener('unhandledrejection', (event) => {
  reportDebugEvent('A', '[DEBUG] unhandled rejection', {
    reason:
      typeof event.reason === 'object' && event.reason !== null && 'message' in event.reason
        ? String(event.reason.message)
        : String(event.reason),
  });
});

const rootElement = document.getElementById('root');
reportDebugEvent('A', '[DEBUG] root lookup', { found: Boolean(rootElement) });
// #endregion

if (rootElement) {
  // #region debug-point A:render
  reportDebugEvent('A', '[DEBUG] starting react render');
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  // #endregion
}
