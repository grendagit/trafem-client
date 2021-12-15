import { GatsbyNode } from 'gatsby'

export const onCreatePage: GatsbyNode['onCreatePage'] = async ({
  page,
  actions,
}) => {
  const { createPage } = actions
  if (page.path.match(/^\/auth/)) {
    page.matchPath = '/auth/*'
    createPage(page)
  }
}
