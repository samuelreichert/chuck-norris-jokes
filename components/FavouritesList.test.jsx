import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import useFavourites from '@/hooks/useFavourites'
import { FavouritesList } from './FavouritesList'

jest.mock('@/hooks/useFavourites', () => jest.fn())

describe('FavouritesList', () => {
  it('it should render FavouritesList with 2 favourites', () => {
    const favourites = [
      {
        created_at: '2022-02-02',
        icon_url: 'url',
        id: 'abc',
        updated_at: '2022-02-03',
        url: 'url',
        value: 'Some joke',
      },
      {
        created_at: '2022-02-02',
        icon_url: 'url',
        id: 'def',
        updated_at: '2022-02-03',
        url: 'url',
        value: 'Second joke',
      },
    ]

    const props = {
      favourites,
      favouritesCount: favourites.length,
    }

    useFavourites.mockImplementation(() => props)

    const { getAllByTestId, getByTestId, getAllByText } = render(
      <FavouritesList />
    )

    expect(getByTestId('favourites-list')).toBeInTheDocument()
    const removeButtons = getAllByText('Remove')
    for (const button of removeButtons) {
      expect(button).toBeInTheDocument()
    }
    expect(getAllByTestId('favourites-item')).toHaveLength(2)
  })

  it('it should remove a favourite', () => {
    const favourites = [
      {
        created_at: '2022-02-02',
        icon_url: 'url',
        id: 'abc',
        updated_at: '2022-02-03',
        url: 'url',
        value: 'Some joke',
      },
      {
        created_at: '2022-02-02',
        icon_url: 'url',
        id: 'def',
        updated_at: '2022-02-03',
        url: 'url',
        value: 'Second joke',
      },
    ]

    const props = {
      favourites,
      favouritesCount: favourites.length,
      removeFavourite: jest.fn(),
    }

    useFavourites.mockImplementation(() => props)

    const { getAllByText } = render(<FavouritesList />)
    const removeButton = getAllByText('Remove')[0]

    fireEvent.click(removeButton)
    expect(props.removeFavourite).toHaveBeenCalledWith(props.favourites[0].id)
  })
})
