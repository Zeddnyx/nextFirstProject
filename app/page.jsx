export default async function Home() {

  const movie = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.KEY}`)
  const resp  = await movie.json()
  console.log(resp)
  return (
    <main>
      <h1>heloo</h1>
    </main>
  )
}
