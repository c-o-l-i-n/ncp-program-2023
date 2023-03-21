import Layout from '@/components/Layout'
import steps from '@/steps'
import { useRouter } from 'next/router'
import { ReactElement, useState } from 'react'

export default function StepPage (): ReactElement {
  const router = useRouter()
  const [guess, setGuess] = useState('')

  const stepNumber = parseInt(typeof router.query.step === 'string' ? router.query.step : '0')
  const step = steps[stepNumber]

  function submit (): void {
    if ((step.answerOnlyNeedsToContain === true && guess.includes(step.answer)) || guess === step.answer) {
      void router.replace(`complete?step=${stepNumber}`, new Date().getTime().toString())
      return
    }

    alert('That\'s not it 😕 Try again!')
  }

  return (
    <Layout>
      <h2>Step {stepNumber + 1}</h2>

      {step.question}

      <input
        className='input mb-5'
        type={step.inputType}
        onChange={e => setGuess(e.target.value.toUpperCase().trim())}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            submit()
          }
        }}
      />

      <div className='is-flex is-justify-content-end'>
        <button
          className='button is-primary right'
          disabled={guess === ''}
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </Layout>
  )
}
