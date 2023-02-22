import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import useFetchJoke from '@/hooks/useFetchJoke'
import useHomeJokes from '@/hooks/useHomeJokes'
import Home from '@/pages/index'

jest.mock('@/hooks/useFetchJoke', () => jest.fn())
jest.mock('@/hooks/useHomeJokes', () => jest.fn())

describe('Home', () => {
  it('renders home page', () => {
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
    }))
    useFetchJoke.mockImplementation(() => ({ isLoading: true }))
    const { getAllByTestId, getByTestId, getByText } = render(<Home />)

    expect(getByText('Jokes')).toBeInTheDocument()
    expect(getByTestId('jokes-list')).toBeInTheDocument()
    expect(getAllByTestId('joke-item')).toHaveLength(2)
  })
})
