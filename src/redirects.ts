/**
 * Legacy Wix URL → current site URL map.
 *
 * The old site (nidoefrance.org on Wix) is being migrated to this Astro
 * build. Every URL that search engines or external sites may still point at
 * needs to resolve to its new location so ranking and backlinks are kept.
 *
 * `src/pages/[...wix].astro` turns each entry below into a static page at the
 * OLD path containing a `<meta http-equiv="refresh">`, a `<link rel="canonical">`
 * to the NEW URL, and a visible fallback link. A static host cannot emit a
 * real 301, so this meta-refresh + canonical pair is the standard equivalent.
 *
 * Anything NOT listed here that still starts with `/single-post/` or `/events`
 * (e.g. the two blog posts referenced by the migration spec that were never
 * actually published) is caught by `src/pages/404.astro` and sent to /news.
 *
 * Source of truth: NIDOE_Spec_Migration_Site.xlsx, tabs 02 (Fil d'actualité)
 * and 03 (Mapping redirections), cross-checked against src/content/news/.
 *
 * Note on target paths: tab 03 proposed French paths (/a-propos, /bureau,
 * /adhesion, /actualites). The site was actually built with English paths, so
 * the targets below use the real current structure (/about, /board, /news).
 * The domain also moved from the www host to the apex nidoefrance.org with no
 * sub-directory, so every target is an absolute-from-root path.
 */

export interface Redirect {
  /** Old Wix path, leading slash, no domain. */
  from: string;
  /** Current site path, leading slash. */
  to: string;
  /** Why this mapping exists / anything worth knowing. */
  note?: string;
}

/** The 5 static pages. `/`, `/membership` and `/contact` keep their path in
 *  the new site, so they need no redirect page (one would shadow the real
 *  page). Only the two that changed slug are listed. */
const staticPages: Redirect[] = [
  { from: '/about-us', to: '/about', note: 'About Us page' },
  { from: '/current-executive', to: '/board', note: 'Current Executive page' },
];

/** Blog index + pagination + monthly archives. The blog has 15 posts total,
 *  so there is only one index page — every listing/archive URL folds into
 *  /news. The 11 archive months are the distinct YYYY/MM of the 15 posts. */
const blogListings: Redirect[] = [
  { from: '/events', to: '/news', note: 'Blog index' },
  { from: '/events/page/2', to: '/news', note: 'Blog pagination — only one page of posts now' },
  { from: '/events/archive/2016/07', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2016/11', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2018/08', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2018/09', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2019/02', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2019/03', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2019/06', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2019/09', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2020/03', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2020/04', to: '/news', note: 'Monthly archive' },
  { from: '/events/archive/2021/05', to: '/news', note: 'Monthly archive' },
];

/** The 15 individual posts. `from` is the exact Wix slug (from each article's
 *  `originalUrl` front-matter); `to` is /news/<content-file-slug>. */
const blogPosts: Redirect[] = [
  {
    from: '/single-post/2016/07/19/diaspora-day-2016',
    to: '/news/2016-07-19-diaspora-day-2016',
  },
  {
    from: '/single-post/2016/11/12/2016-nidoe-annual-general-meeting',
    to: '/news/2016-11-12-agm-greece-2016',
  },
  {
    from: '/single-post/2018/08/02/come-and-support-nigerian-women-u-20-world-cup',
    to: '/news/2018-08-02-support-nigerian-women-u20-world-cup',
  },
  {
    from: '/single-post/2018/09/19/annual-general-meeting',
    to: '/news/2018-09-19-annual-general-meeting-2018',
  },
  {
    from: '/single-post/2018/09/27/request-for-the-names-of-nigerians-professionals',
    to: '/news/2018-09-27-request-names-nigerians-professionals',
  },
  {
    from: '/single-post/2019/02/04/disclaiming-john-dole-allegation',
    to: '/news/2019-02-04-disclaiming-john-dole-allegation',
  },
  {
    from: '/single-post/2019/02/07/diasporas-africaines-au-debat-national',
    to: '/news/2019-02-07-diasporas-africaines-au-debat-national',
  },
  {
    // Wix slug carries an accented "é"; external links use the %C3%A9 form.
    from: '/single-post/2019/03/26/national-id-for-all-nigérians-in-france',
    to: '/news/2019-03-26-national-id-for-nigerians-in-france',
  },
  {
    from: '/single-post/2019/03/26/the-french-national-debate',
    to: '/news/2019-03-26-the-french-national-debate',
  },
  {
    from: '/single-post/2019/06/20/nidoe-france-mourn-its-former-leader',
    to: '/news/2019-06-20-nidoe-france-mourns-martin-okeke',
  },
  {
    from: '/single-post/2019/09/02/adieux-ambassador-edward-abiodun-aina',
    to: '/news/2019-09-02-adieux-ambassador-edward-abiodun-aina',
  },
  {
    from: '/single-post/2019/09/29/agm-2019-nidoe-france',
    to: '/news/2019-09-29-agm-2019',
  },
  {
    from: '/single-post/2020/03/17/covid-19-notice-to-applicants-for-passport-and-consular-services',
    to: '/news/2020-03-17-covid-19-notice-passport-consular-services',
  },
  {
    from: '/single-post/2020/04/22/council-of-african-diaspora-of-france-cdaf-fight-against-covid-19',
    to: '/news/2020-04-22-cdaf-fight-against-covid-19',
  },
  {
    // Wix slug has no date segment — the one special case called out in the spec.
    from: '/single-post/nidoe-celebrates-its-20th-anniversary',
    to: '/news/2021-05-26-nidoe-20th-anniversary',
  },
];

export const redirects: Redirect[] = [...staticPages, ...blogListings, ...blogPosts];
