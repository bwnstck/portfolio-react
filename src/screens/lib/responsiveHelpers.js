const getVw = () =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

export const isMobile = () => getVw() < 760;

export const isInViewPort = (element) => {
  const bounding = element.getBoundingClientRect();
  const viewPortHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const target = viewPortHeight - viewPortHeight / 2 - 200;
  const response = bounding.top <= target && bounding.bottom >= target;
  return response;
};
