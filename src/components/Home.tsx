import * as React from 'react'
import classnames from 'classnames'
import * as css from './Home.css'

export const Home: React.FunctionComponent = props =>
  <div className={classnames('test', css.home)}>
    <ul>
      <li>
        Layout.tsx set background-color hot-pink using global styled jsx
      </li>
    </ul>
  </div>