import Layout from '@/components/Layout'
import ConfettiExplosion from 'react-confetti-explosion'
import Image from 'next/image'
import { ReactElement } from 'react'
import breadsticks from 'images/breadsticks.webp'

export default function Prize (): ReactElement {
  return (
    <Layout>
      <h2>🥳 You did it!!</h2>

      <div className='is-flex is-justify-content-center'>
        <ConfettiExplosion
          force={0.4}
          duration={3000}
          particleCount={1000}
          width={400}
        />
      </div>

      <h3 className='mt-0'>You solved The Great NCP Program Riddle!</h3>
      <h3 className='mt-0'>Here is your prize:</h3>

      <p>Show this coupon to your server to get free unlimited breadsticks with the purchase of a meal when you dine-in at any Olive Garden location 🇮🇹</p>
      <Image
        src={breadsticks}
        alt='Breadsticks'
        height={500}
        width={500}
        priority
      />
      <p className='is-size-7 has-text-grey-lighter'>If you haven&apos;t figured it out yet, this is a joke coupon.</p>

      <h2 className='has-text-centered'>Enjoy the show!</h2>
    </Layout>
  )
}
