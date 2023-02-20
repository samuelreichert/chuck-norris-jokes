import { useQuery } from 'react-query'
import { APIJoke } from '.'

export const getHomeJokes = async (): Promise<APIJoke[]> => {
  const results: APIJoke[] = await Promise.all(
    [...Array(10)].map(async () => {
      const url = new URL(process.env.NEXT_PUBLIC_API_URL || '')
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

export const useHomeJokes = ({ refetchInterval }: ParamsType) => {
  console.log(refetchInterval)

  return useQuery('homeJokes', getHomeJokes, {
    refetchOnWindowFocus: false,
  })
}
