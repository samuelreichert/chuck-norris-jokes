import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import useFavourites from '@/hooks/useFavourites'
import Favourites from '@/pages/favourites'

jest.mock('@/hooks/useFavourites', () => jest.fn())

describe('Favourites', () => {
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
      removeFavourite: jest.fn(),
      ...testProps,
    }

    useFavourites.mockImplementation(() => props)

    return props
  }

  it('renders favourite page with content', () => {
    setupTest()

    const { getAllByTestId, getByTestId, getByText } = render(<Favourites />)

    expect(getByText('Favourites')).toBeInTheDocument()
    expect(getByTestId('favourites-list')).toBeInTheDocument()
    expect(getAllByTestId('favourites-item')).toHaveLength(2)
  })

  it('renders empty favourite page', () => {
    setupTest({ favourites: [], favouritesCount: 0 })

    const { getByText, queryAllByTestId, queryByTestId } = render(
      <Favourites />
    )

    expect(getByText('Favourites')).toBeInTheDocument()
    expect(queryByTestId('favourites-list')).not.toBeInTheDocument()
    expect(queryAllByTestId('favourites-item')).toHaveLength(0)
  })
})
