import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'
import { ChangeEvent, ReactElement, useState } from 'react'

export default function Singer (): ReactElement {
  const router = useRouter()
  const [date, setDate] = useState('')

  function submit (): void {
    const correctDate = '1979-09-08'

    if (date === correctDate) {
      void router.replace('transition?step=3', new Date().getTime().toString())
      return
    }

    const guess = parseInt(date.replace(/-/g, ''))
    const correct = parseInt(correctDate.replace(/-/g, ''))

    alert(`It was ${correct > guess ? 'after' : 'before'} that. Try again!`)
  }

  return (
    <Layout>
      <h2>Step 2</h2>

      <p>The NCP is full of nice people. Never a mean girl in sight! On Wednesdays,
        we only listen to one <span className='pink'>colorful</span> singer.
      </p>
      <p>What day was this singer born?</p>

      <input
        className='input mb-5'
        type='date'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
      />

      <div className='is-flex is-justify-content-end'>
        <button
          className='button is-primary right'
          disabled={date === ''}
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </Layout>
  )
}
