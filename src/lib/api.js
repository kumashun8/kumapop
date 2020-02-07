export const fetchQiitaArticles = async props => {
  const { handleGetArticles } = props
  await fetchGet({
    auth: process.env.REACT_APP_QIITA_AUTH,
    url: 'https://qiita.com/api/v2/authenticated_user/items',
    successAction: handleGetArticles,
  })
}

const fetchGet = async props => {
  const { auth, url, successAction, failureAction } = props
  console.log(auth)
  console.log(process.env.NODE_ENV)

  return await fetch(url, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson)
      if (successAction) {
        successAction(responseJson)
      }
    })
    .catch(error => {
      console.error(error)
      if (failureAction) {
        failureAction()
      }
    })
}
