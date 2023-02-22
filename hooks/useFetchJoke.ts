import { useQuery } from 'react-query'
import { APIJoke } from '@/types'

const REFETCH_MS = 5000

export const getJoke = async (): Promise<APIJoke> => {
  const url = new URL('https://api.chucknorris.io/jokes/random')
  const res = await fetch(url, {
    method: 'GET',
  })
  return res.json()
}

const useFetchJoke = (toggle: boolean) => {
  return useQuery('fetchJoke', getJoke, {
    refetchOnWindowFocus: false,
    enabled: toggle,
    refetchInterval: toggle ? REFETCH_MS : false,
  })
}

export default useFetchJoke
