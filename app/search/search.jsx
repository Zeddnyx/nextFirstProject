'use client'
import { useEffect } from 'react'

export default function search() {

  const api = async title => {
    const resp = await fetch(` https://api.themoviedb.org/3/search/keyword?api_key=${process.env.API_KEY}&query=${title}&page=1`)
    const data = await resp.json()
    console.log(data)
  }

  useEffect(() => {
    api('avatar')
  }, [])

  return <div>
    holaaa sera
  </div>
}
