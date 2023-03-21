import { HTMLInputTypeAttribute, ReactElement } from 'react'

interface Step {
  question: ReactElement
  answer: string
  answerOnlyNeedsToContain?: boolean
  inputType: HTMLInputTypeAttribute
  completionMessage: string | ReactElement
}

const steps: Step[] = [
  {
    question: <>(QR Code scan in the program)</>,
    answer: '',
    inputType: '',
    completionMessage: "You found the correct QR code! I'm glad you never gave it up! 😉"
  },
  {
    question: (
      <>
        <p>
          The NCP is full of nice people. Never a mean girl in sight! On Wednesdays,
          we only listen to one <span className='pink'>colorful</span> singer.
        </p>
        <p>What day was this singer born?</p>
      </>
    ),
    answer: '1979-09-08',
    inputType: 'date',
    completionMessage: (
      <>
        <p>
          The NCP&apos;s summer musical for 2023 is <strong>Mean Girls</strong>!
        </p>
        <p>
          Anyone who has seen Mean Girls knows that on Wednesdays, we wear
          {' '}<span className='pink'>pink</span>. And since you&apos;re so
          clever, you know that the singer <span className='pink'>P!NK</span>
          {' '}was born on September 8th, 1979.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>I smell something rotten! Last person on the moon is a rotten egg!</p>
        <p>Who is the rotten egg?</p>
      </>
    ),
    answer: 'EUGENE CERNAN',
    inputType: 'text',
    completionMessage: 'The last person to walk on the moon was Apollo 17 commander Eugene Cernan on December 14, 1972 🌝'
  },
  {
    question: (
      <>
        <p>Speaking of eggs, I know Gaston eats a ton of them!</p>
        <p>If we are to believe his song, how many eggs did Gaston eat every <em>week</em> when he was a lad?</p>
      </>
    ),
    answer: '336',
    inputType: 'number',
    completionMessage: "When Gaston was a lad, he ate 4 dozen eggs every morning to help him get large. That's over 3,700 calories! That's enough eggs to feed an entire 18th-century French provincial town 🍳"
  },
  {
    question: (
      <>
        <p>
          The NCP is <em>not</em> doing <em>Cats the Musical</em> this year.
          However, there is a cat named Hazel in today&apos;s program.
        </p>
        <p>
          Hazel&apos;s fur pattern has a special name. What is it? (Don&apos;t
          think too hard. Slow and steady wins the race.)
        </p>
      </>
    ),
    answer: 'TORT',
    answerOnlyNeedsToContain: true,
    inputType: 'text',
    completionMessage: 'In Japan, "torties" are thought to protect ships from bad storms and shipwrecks, and even ghosts 👻'
  },
  {
    question: (
      <>
        <p>
          In 1995, the NCP moved to Hoover High School. Hoover shares a mascot
          with an NFL team.
        </p>
        <p>
          What is the capital city of this NFL team&apos;s state?
        </p>
      </>
    ),
    answer: 'PAUL',
    answerOnlyNeedsToContain: true,
    inputType: 'text',
    completionMessage: (
      <>
        <p>
          Historians say that Vikings didn&apos;t actually wear horned helmets. But
          I&apos;d like to think they did! 😜
        </p>
        <p>
          There&apos;s only 1 step left!
        </p>
      </>
    )
  },
  {
    question: (
      <p>
        What is the last name of the main character of the NCP&apos;s first
        ever production in 1976?
      </p>
    ),
    answer: 'DENNIS',
    inputType: 'text',
    completionMessage: 'You did it!'
  }
]

export default steps
