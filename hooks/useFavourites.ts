import useLocalStorage from '@/hooks/useLocalStorage'
import { APIJoke } from '@/types'

const MAX_FAVOURITES = 10

const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage('favourites', [])

  const removeFavourite = (id: string) => {
    const newFavourites = favourites.filter((fav: APIJoke) => fav.id !== id)
    setFavourites(newFavourites)
  }

  const addFavourite = (item: APIJoke) => {
    if (favourites >= MAX_FAVOURITES) {
      return
    }

    if (favourites.find((fav: APIJoke) => fav.id === item.id)) {
      return
    }

    setFavourites([...favourites, item])
  }

  return {
    favourites,
    removeFavourite,
    addFavourite,
    favouritesCount: favourites.length,
  }
}

export default useFavourites
