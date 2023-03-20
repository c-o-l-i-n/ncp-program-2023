import Navbar from '@/components/Navbar'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

const stepMessage: Record<number, string | ReactElement> = {
  2: "You found the correct QR code! I'm glad you never gave it up! 😉",
  3: <><p>The NCP&apos;s summer musical for 2023 is <strong>Mean Girls the Musical</strong>!</p> <p>Anyone who has seen Mean Girls knows that on Wednesdays, we wear <span className='pink'>pink</span>. And since you&apos;re so clever, you know that the singer <span className='pink'>P!NK</span> was born on September 8th, 1979.</p></>,

}

export default function Transition (): ReactElement {
  const router = useRouter()
  
  const step = typeof router.query.step === 'string' ? router.query.step : '0'

  return (
    <>
      <Navbar />

      <main>
        <h2>Great Job!</h2>

        <div className='is-flex is-justify-content-center'>
          <ConfettiExplosion
            force={0.4}
            duration={2200}
            particleCount={100}
            width={400}
          />  
        </div>

        <p className='mb-5'>{stepMessage[parseInt(step)]}</p>

        <div className='is-flex is-justify-content-end'>
          <button className='button is-primary right' onClick={() => router.replace(`/${step}`, new Date().getTime().toString())}>
            <span>Step {step}</span>
            <span className='icon'>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </main>
    </>
  ) 
}
 