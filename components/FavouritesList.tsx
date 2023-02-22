import { FC } from 'react'
import useFavourites from '@/hooks/useFavourites'
import { styled } from '@/stitches.config'
import { APIJoke } from '@/types'
import { Button } from './Button'

export const FavouritesList: FC = () => {
  const { favourites, removeFavourite, favouritesCount } = useFavourites()

  if (favouritesCount === 0) {
    return <p>No favourites yet...</p>
  }

  return (
    <List data-testid="favourites-list">
      {favourites.map((favourite: APIJoke) => (
        <Row key={favourite.id}>
          <Favourite data-testid="favourites-item">{favourite.value}</Favourite>
          <Button onClick={() => removeFavourite(favourite.id)}>Remove</Button>
        </Row>
      ))}
    </List>
  )
}

const List = styled('ul', {
  listStyleType: 'none',
  marginBottom: '60px',
})

const Favourite = styled('p')

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
