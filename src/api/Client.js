import { createClient } from 'react-fetching-library'
import { requestHostInterceptor } from './requestHostInterceptor'

const HOST = 'https://qiita.com/api/v2/'

export const Client = createClient({
  requestInterceptors: [requestHostInterceptor(HOST)],
})
