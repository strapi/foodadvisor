window.BACKEND_URL = (function generateBackend() {
  if (window.BACKEND_URL && window.BACKEND_URL !== '%BACKEND_URL%') {
    return window.BACKEND_URL;
  }
  return process.env.REACT_APP_BACKEND_URL;
})();
