import { FC } from 'react'
import { styled } from '@/stitches.config'
import useHomeJokes from '@/hooks/useHomeJokes'
import useFavourites from '@/hooks/useFavourites'
import { Button } from './Button'

export const JokesList: FC = () => {
  const { data, isLoading } = useHomeJokes({ refetchInterval: false })
  const { addFavourite, favouritesCount } = useFavourites()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <List data-testid="jokes-list">
      {data?.map(item => (
        <Row key={item.id}>
          <Joke data-testid="joke-item">{item.value}</Joke>
          {favouritesCount < 10 && (
            <Button onClick={() => addFavourite(item)}>Favourite</Button>
          )}
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
