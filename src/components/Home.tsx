import { ReactElement } from 'react'
import Image from 'next/image'
import Footer from './Footer'

export default function Home (): ReactElement {
  return (
    <>
      <main className='has-text-centered'>
        <Image
          src='/images/ncp-color.svg'
          alt='North Canton Playhouse Logo'
          width={192}
          height={192}
          priority
          className='mt-5 no-border-radius'
        />

        <h1 className='has-text-weight-bold'>The Great NCP Program Riddle</h1>
        <p>Do you have what it takes to solve the puzzles and win the prize?</p>
        <h3>Scan the QR codes in the program to get started!</h3>
      </main>
      <Footer />
    </>
  )
}
