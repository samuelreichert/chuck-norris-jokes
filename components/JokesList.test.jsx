import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import useFetchJoke from '@/hooks/useFetchJoke'
import useHomeJokes from '@/hooks/useHomeJokes'
import { JokesList } from './JokesList'

jest.mock('@/hooks/useFetchJoke', () => jest.fn())
jest.mock('@/hooks/useHomeJokes', () => jest.fn())

describe('JokesList', () => {
  const setupTest = testProps => {
    const data = [
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

    useHomeJokes.mockImplementation(() => ({
      isLoading: false,
      data,
      ...testProps,
    }))
    useFetchJoke.mockImplementation(() => ({ isLoading: true }))
  }

  it('it should render JokesList with 2 jokes', () => {
    setupTest()
    const { getAllByTestId, getByTestId } = render(<JokesList />)

    expect(getByTestId('jokes-list')).toBeInTheDocument()
    expect(getAllByTestId('joke-item')).toHaveLength(2)
  })

  it('it should render the loading component while jokes are being fetched', () => {
    setupTest({ data: null, isLoading: true })

    const { getByText, queryByTestId } = render(<JokesList />)

    expect(queryByTestId('jokes-list')).not.toBeInTheDocument()
    expect(getByText('Loading...')).toBeInTheDocument()
  })
})
