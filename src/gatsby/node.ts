import { GatsbyNode } from 'gatsby'

export const onCreatePage: GatsbyNode['onCreatePage'] = async ({
  page,
  actions,
}) => {
  const { createPage } = actions
  if (page.path.match(/^\/auth/)) {
    page.matchPath = '/auth/*'
    createPage(page)
  } else if (page.path.match(/^\/user/)) {
    page.matchPath = '/user/*'
    createPage(page)
  } else if (page.path.match(/^\/forms/)) {
    page.matchPath = '/forms/*'
    createPage(page)
  }
}
