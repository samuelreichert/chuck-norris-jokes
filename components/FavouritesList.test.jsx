import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import useFavourites from '@/hooks/useFavourites'
import { FavouritesList } from './FavouritesList'

jest.mock('@/hooks/useFavourites', () => jest.fn())

describe('FavouritesList', () => {
  const setupTest = testProps => {
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
      ...testProps,
    }

    useFavourites.mockImplementation(() => props)

    return props
  }

  it('it should render FavouritesList with 2 favourites', () => {
    setupTest()

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
    const props = setupTest({ removeFavourite: jest.fn() })

    const { getAllByText } = render(<FavouritesList />)
    const removeButton = getAllByText('Remove')[0]

    fireEvent.click(removeButton)
    expect(props.removeFavourite).toHaveBeenCalledWith(props.favourites[0].id)
  })
})
