import Layout from '@/components/Layout'
import steps from '@/steps'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import Image from 'next/image'
import ConfettiExplosion from 'react-confetti-explosion'

export default function CompletePage (): ReactElement {
  const router = useRouter()

  const stepNumber = parseInt(typeof router.query.step === 'string' ? router.query.step : '0')
  const step = steps[stepNumber]

  return (
    <Layout>
      <h2>Great Job!</h2>

      <div className='is-flex is-justify-content-center'>
        <ConfettiExplosion
          force={0.4}
          duration={2200}
          particleCount={100}
          width={400}
        />
      </div>

      <Image
        src={step.answerImage}
        alt='Great Job!'
      />

      <p className='mt-3 mb-5'>
        {step.completionMessage}
      </p>

      {
        stepNumber < steps.length - 1 &&
          <div className='is-flex is-justify-content-end'>
            <button
              className='button is-primary right'
              onClick={() => {
                void router.replace(`/step?step=${stepNumber + 1}`, new Date().getTime().toString())
              }}
            >
              <span>Step {stepNumber + 2}</span>
              <span className='icon'>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
      }
    </Layout>
  )
}
