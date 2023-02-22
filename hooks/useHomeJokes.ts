import { useQuery } from 'react-query'
import { APIJoke } from '@/types'

export const getHomeJokes = async (): Promise<APIJoke[]> => {
  const results: APIJoke[] = await Promise.all(
    [...Array(10)].map(async () => {
      const url = new URL('https://api.chucknorris.io/jokes/random')
      const res = await fetch(url, {
        method: 'GET',
      })
      return res.json()
    })
  )
  return results
}

type ParamsType = {
  refetchInterval: number | boolean
}

const useHomeJokes = ({ refetchInterval }: ParamsType) => {
  console.log(refetchInterval)

  return useQuery('homeJokes', getHomeJokes, {
    refetchOnWindowFocus: false,
  })
}

export default useHomeJokes
