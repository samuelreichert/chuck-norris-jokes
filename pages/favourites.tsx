import Head from 'next/head'
import { Box } from '@/components/Box'
import { FavouritesList } from '@/components/FavouritesList'

export default function Favourites() {
  return (
    <>
      <Head>
        <title>Favourites | Chuck Norris Jokes</title>
      </Head>

      <Box>
        <h2>Favourites</h2>

        <FavouritesList />
      </Box>
    </>
  )
}
