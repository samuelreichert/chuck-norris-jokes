import React from 'react'
import * as ReactQuery from 'react-query'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '../../pages/index'

const useMockedQuery = props => {
  return jest.spyOn(ReactQuery, 'useQuery').mockImplementation(() => {
    return props
  })
}

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
    useMockedQuery({ isLoading: false, data })
    const { getAllByTestId, getByTestId, getByText } = render(<Home />)

    expect(getByText('Jokes')).toBeInTheDocument()
    expect(getByTestId('jokes-list')).toBeInTheDocument()
    expect(getAllByTestId('joke-item')).toHaveLength(2)
  })
})
