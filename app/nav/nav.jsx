import Link from 'next/link'

export default function nav() {
  return <nav className={navParent}>
    <h1><Link href="/">Logo</Link></h1>

    <ul className={ulList}>
      <li><Link href="/search">Find</Link></li>
      <li><Link href="/about/page">About</Link></li>
    </ul>
  </nav>
}
const navParent = 'flex justify-around w-full py-2 bg-gray-700 fixed top-0'
const ulList = 'flex gap-5'
