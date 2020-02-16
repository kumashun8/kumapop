import { Action } from 'react-fetching-library'

export const fetchMyQiitaArticles: Action = {
  method: 'GET',
  endpoint: 'authenticated_user/items',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_QIITA_AUTH}`,
  },
}
