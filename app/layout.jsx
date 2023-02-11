import './globals.css'
import Nav from './nav/nav'
// import { Montserrat } from '@next/font/google'
//
// const mont = Montserrat({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   variable: '--font-mont',
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='font-mont'>
        <Nav />
        {children}
      </body>
    </html>
  )
}
