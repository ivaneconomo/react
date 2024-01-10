const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getRandomImageUrl = async (fact) => {
  if (!fact) return
  const threeFirstWords = fact.split(' ', 3).join(' ')

  const res = await fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
  const data = await res.json()
  const { url } = data

  return `${CAT_PREFIX_IMAGE_URL}${url}`
}
