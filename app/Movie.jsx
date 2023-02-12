import Link from 'next/link'
import Image from 'next/image'

export default function movieCard({ title, id, release, img, rate}) {
  const imagePath = 'https://image.tmdb.org/t/p/original'

  return <section className={parent}>
    <Image src={imagePath + img} width={500} height={500} alt={title} />

    <Link href={`${id}`}>
      <h1 className={h1Title}>{title}</h1>
    </Link>

    <div className='flex gap-5 text-xs'>
      <p>{release}</p>
      <p className={rating}>#{rate}</p>
    </div>
  </section>
}
const parent = 'px-2 py-2 bg-gray-800 rounded'
const h1Title = 'font-bold my-2 hover:text-cyan-400'
const rating = 'text-yellow-400'
