import * as React from 'react'
import Link from 'next/link'

export const Nav: React.FC = props =>
  <nav>
    <h4>
      samples
    </h4>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/SSR">
          <a>SSR</a>
        </Link>
      </li>
    </ul>
  </nav>
