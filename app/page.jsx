import Movie from './Movie'

export default async function Home() {

  const movie = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  if(!movie.ok) {
    return console.log('error failed to fetch')
  }
  const resp  = await movie.json()
  const results = resp.results

  return (
    <main>
      <div className={divMovie}>
        {results.map(movie => {
          return <Movie
            key={movie.id}
            id={movie.id}
            img={movie.poster_path}
            title={movie.title}
            release={movie.release_date}
            rate={movie.vote_average}
          />
        })}
      </div>
    </main>
  )
}
const divMovie = 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-5 mt-20 gap-5'
