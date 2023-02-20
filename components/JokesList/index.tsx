import { useQuery } from 'react-query'
import { styled } from '@/stitches.config'

type APIJoke = {
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

const getHomeJokes = async () => {
  const results = await Promise.all(
    [...Array(10)].map(async () => {
      const url = new URL(process.env.NEXT_PUBLIC_API_URL || '')
      const res = await fetch(url, {
        method: 'GET',
      })
      return res.json()
    })
  )
  return results
}

export const JokesList = ({}) => {
  const { data, isLoading } = useQuery('homeJokes', getHomeJokes, {
    refetchOnWindowFocus: false,
  })

  const setFavourite = (item: APIJoke) => {
    console.log(item)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <List>
      {data?.map(item => (
        <Row key={item.id}>
          <Joke>{item.value}</Joke>
          <a href="#" onClick={() => setFavourite(item)}>
            Favourite
          </a>
        </Row>
      ))}
    </List>
  )
}

const List = styled('ul', {
  listStyleType: 'none',
  marginBottom: '60px',
})

const Joke = styled('p')

const Row = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid $lightGrey',
  padding: '12px 0',
  '&:last-child': {
    borderBottom: 'none',
  },
})
