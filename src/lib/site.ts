/** Join a site-relative path with the configured BASE_URL, regardless of
 * whether either side has a leading/trailing slash. `url()` with no
 * argument returns the site root with no trailing slash (e.g.
 * "/nido-france-site"), matching the `trailingSlash: 'never'` build config —
 * a trailing slash here 404s against the actual generated route.
 * BASE_URL of "/" normalizes to an empty base so joining never produces a
 * "//" prefix, which browsers parse as a protocol-relative URL. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}/${clean}` : base || '/';
}
