import React from 'react'
import { useSuspenseQuery } from 'react-fetching-library'
import { fetchMyQiitaArticles } from '../api/fetchMyQiitaArticles'
import Writing from 'sections/Writing'

export default () => {
  const { payload, error, query } = useSuspenseQuery(fetchMyQiitaArticles)

  return <Writing error={error} articles={payload} />
}
