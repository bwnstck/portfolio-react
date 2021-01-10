const getVw = () =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
export const isMobile = () => getVw() < 760;
