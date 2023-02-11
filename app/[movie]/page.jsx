import Image from 'next/image'
import Link from 'next/link'

export default async function movieDetail({ params }) {
  const { movie } = params

  const imagePath = 'https://image.tmdb.org/t/p/original'

  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: { revalidate: 60}} )
  const resp = await data.json()

  return <div className={divParent}>
    <Link href='/'><button className={btn}>Back</button></Link>

    <div className={div1}>
      <h1 className={judul1}>{resp.original_title}</h1>
      <p className={p_kecil}>Release: {resp.release_date}</p>
      <p className={p_kecil}>popularity: {resp.popularity}</p>
      <p className={p_kecil}>Langueage: {resp.original_language}</p>

      <div>
        <Image src={imagePath + resp.poster_path }
          width={600} height={600} alt={resp.title}
          className={img}
        />
      </div>

      <p className={judul2}>{resp.title}</p>
      <p className={desc}>{resp.overview}</p>
    </div> 
  </div>
}

const divParent = 'max-w-xl mx-auto text-slate-200 mt-20'
const btn = 'px-5 my-5 outline-none p-1 bg-gray-700'
const div1 = 'px-5 mx-auto'

const judul1 = 'font-bold text-2xl my-2'
const judul2 = 'font-bold text-xl my-2'
const p_kecil = 'text-gray-700 text-xs'
const img = 'w-60 md:w-80 lg:w-96 mx-auto my-3 h-full'
const desc = 'my-2 text-sm'


// to make good seo ( will be generate automatic ) withour render the first page
export async function generateParams() {
 
  const movie = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const resp  = await movie.json()
  const results = resp.results
}
