import React from 'react'
import * as ReactQuery from 'react-query'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { JokesList } from '.'

const useMockedQuery = props => {
  return jest.spyOn(ReactQuery, 'useQuery').mockImplementation(() => {
    return props
  })
}

describe('JokesList', () => {
  it('it should render JokesList with 2 jokes', () => {
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
    useMockedQuery({ isLoading: false, data })
    const { getAllByTestId, getByTestId } = render(<JokesList />)

    expect(getByTestId('jokes-list')).toBeInTheDocument()
    expect(getAllByTestId('joke-item')).toHaveLength(2)
  })

  it('it should render the loading component while jokes are being fetched', () => {
    useMockedQuery({ isLoading: true })
    const { getByText, queryByTestId } = render(<JokesList />)

    expect(queryByTestId('jokes-list')).not.toBeInTheDocument()
    expect(getByText('Loading...')).toBeInTheDocument()
  })
})
