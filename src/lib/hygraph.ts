export const hygraphClient = () => {
  if (!process.env.HYGRAPH_CMS_API_URL) {
    throw new Error(
      'Please define the HYGRAPH_CMS_API_URL environment variable inside .env.local'
    )
  }

  async function getData<T = unknown>(query: string) {
    const res = await fetch(process.env.HYGRAPH_CMS_API_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.HYGRAPH_CMS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data as T
  }

  return {
    fetch: getData,
  }
}
