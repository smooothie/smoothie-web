const urls = {
  home: '/',
  login: '/login',
  account: '/accounts/:accountId',
  stats: '/stats/:statsType?',
};

export const getAccountPageUrl = (accountId: number): string =>
  urls.account.replace(':accountId', accountId.toString());

export const getStatsTabUrl = (tabName: string): string =>
  urls.stats.replace(':statsType?', tabName);

export default urls;
