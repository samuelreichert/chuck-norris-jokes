import useLocalStorage from '@/hooks/useLocalStorage'

const MAX_FAVOURITES = 10

const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage('favourites', [])

  const removeFavourite = (id: string) => {
    const newFavourites = favourites.filter((fav: any) => fav.id !== id)
    setFavourites(newFavourites)
  }

  const addFavourite = (item: any) => {
    if (favourites >= MAX_FAVOURITES) {
      return
    }

    if (favourites.find((fav: any) => fav.id === item.id)) {
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
