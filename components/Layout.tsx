import Head from 'next/head'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'
import { Navbar } from './Navbar'
import { styled } from '@/stitches.config'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Chuck Norris Jokes</title>
        <meta
          name="description"
          content="Using chuck norris API to show some jokes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Center>
          <Image
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
            alt="Next.js Logo"
            width={280}
            height={170}
            quality={50}
            priority
          />
        </Center>

        <Navbar />

        {children}
      </Main>
    </>
  )
}

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  minHeight: '100vh',
  maxWidth: '1100px',
})

const Center = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '32px 0 16px',
})
