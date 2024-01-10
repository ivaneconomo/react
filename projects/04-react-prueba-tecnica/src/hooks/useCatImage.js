import { useEffect, useState } from 'react'
import { getRandomImageUrl } from '../services/sercvices'

export default function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  // para recuperar la imágen cada vez que tenemos una cita nueva
  useEffect(() => {
    getRandomImageUrl(fact).then(newImage => setImageUrl(newImage))
  }, [fact])

  return { imageUrl }
}
