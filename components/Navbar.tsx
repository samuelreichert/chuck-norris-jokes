import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { styled } from '@/stitches.config'

export const Navbar: FC = () => {
  const router = useRouter()
  console.log(router)
  return (
    <Nav>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/favourites">Favourites</NavItem>
    </Nav>
  )
}

const Nav = styled('div', {
  marginBottom: '16px',
})

const NavItem = styled(Link, {
  margin: '4px 12px',
})
