import { FC } from 'react'
import { styled } from '@/stitches.config'
import { useHomeJokes } from './useHomeJokes'

export type APIJoke = {
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export const JokesList: FC = () => {
  const { data, isLoading } = useHomeJokes({ refetchInterval: false })

  const setFavourite = (item: APIJoke) => {
    console.log(item)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <List data-testid="jokes-list">
      {data?.map(item => (
        <Row key={item.id}>
          <Joke data-testid="joke-item">{item.value}</Joke>
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
