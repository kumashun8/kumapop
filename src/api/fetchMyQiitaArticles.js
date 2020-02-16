export const fetchMyQiitaArticles = {
  method: 'GET',
  endpoint: 'https://qiita.com/api/v2/authenticated_user/items',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_QIITA_AUTH}`,
  },
}
