import { FC, useEffect, useState } from 'react'
import * as Switch from '@radix-ui/react-switch'
import { styled } from '@/stitches.config'
import useFavourites from '@/hooks/useFavourites'
import useFetchJoke from '@/hooks/useFetchJoke'
import useHomeJokes from '@/hooks/useHomeJokes'
import { Button } from './Button'
import { APIJoke } from '@/types'

const MAX_JOKES = 10

export const JokesList: FC = () => {
  const [toggle, setToggle] = useState(false)
  const [jokes, setJokes] = useState<APIJoke[]>([])
  const { addFavourite, favouritesCount } = useFavourites()

  const { data, isLoading } = useHomeJokes()
  const { data: newJoke } = useFetchJoke(toggle)

  useEffect(() => {
    if (data) {
      console.log('data', data)
      setJokes(data)
    }
  }, [data])

  useEffect(() => {
    if (newJoke) {
      console.log('newJoke', newJoke)
      console.log('effect', jokes)
      let newJokes: APIJoke[] = []
      if (jokes.length >= MAX_JOKES) {
        newJokes = [newJoke, ...jokes.slice(0, jokes.length - 1)]
      } else {
        newJokes = [newJoke, ...jokes]
      }
      setJokes(newJokes)
    }
  }, [newJoke])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <SwitchContainer>
        <Label htmlFor="fetch-jokes" css={{ paddingRight: 15 }}>
          Fetch new jokes
        </Label>
        <SwitchRoot
          id="fetch-jokes"
          checked={toggle}
          onCheckedChange={setToggle}
        >
          <SwitchThumb />
        </SwitchRoot>
      </SwitchContainer>
      <List data-testid="jokes-list">
        {jokes.map(item => (
          <Row key={item.id}>
            <Joke data-testid="joke-item">{item.value}</Joke>
            {favouritesCount < 10 && (
              <Button onClick={() => addFavourite(item)}>Favourite</Button>
            )}
          </Row>
        ))}
      </List>
    </>
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

const SwitchContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
})

const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: 'hsla(0, 0%, 0%, 0.439)',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: '0 2px 10px hsla(0, 0%, 0%, 0.141)',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: 'black' },
})

const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: '0 2px 2px hsla(0, 0%, 0%, 0.141)',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
})

const Label = styled('label', {
  color: '$black',
  fontSize: 15,
  lineHeight: 1,
})
