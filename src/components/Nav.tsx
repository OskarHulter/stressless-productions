import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledNav = styled.footer`
  grid-area: nav;
  color: --var(colorText);
  background: --var(colorPrimary);
`

export const Nav: React.FC = props =>
  <StyledNav>
    <h4>Download royalty free music, free forever.</h4>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/SSR">
          <a></a>
        </Link>
      </li>
    </ul>
  </StyledNav>
