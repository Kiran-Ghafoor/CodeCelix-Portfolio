export function isProjectsPage() {
  return typeof window !== 'undefined' && window.location.pathname.replace(/\/+$/, '') === '/projects';
}

export function homeHref(href = '') {
  if (href.startsWith('/')) return href;
  return isProjectsPage() ? `/${href}` : href;
}
