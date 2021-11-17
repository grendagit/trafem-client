import React from 'react'
import { Link } from 'gatsby'

import { Route } from './navigation.type'

type Props = {
  routes: Route[]
}

export const NavigationView = ({ routes }: Props) => {
  const routeItems = routes.map(({ path, text }) => (
    <li key={path}>
      <Link className="ml-5" to={path}>
        {text}
      </Link>
    </li>
  ))

  return (
    <nav data-testid="navigation">
      <div>
        <ul className="flex justify-end items-center">{routeItems}</ul>
      </div>
    </nav>
  )
}
