import { HTMLInputTypeAttribute, ReactElement } from 'react'
import { StaticImageData } from 'next/image'
import cats from 'images/cats.webp'
import eugene from 'images/eugene.webp'
import gaston from 'images/gaston.webp'
import gaston2 from 'images/gaston2.webp'
import hazel from 'images/hazel.webp'
import mame from 'images/mame.webp'
import meanGirls from 'images/mean-girls.webp'
import nfl from 'images/nfl.webp'
import regina from 'images/regina.webp'
import rick from 'images/rick.webp'
import rotten from 'images/rotten.webp'
import vikings from 'images/vikings.webp'

interface Step {
  question: ReactElement
  answer: string
  questionImage: StaticImageData
  answerImage: StaticImageData
  answerOnlyNeedsToContain?: boolean
  inputType?: HTMLInputTypeAttribute
  completionMessage: string | ReactElement
}

const steps: Step[] = [
  {
    // No question or answer - QR code scan in the physical program
    question: <></>,
    questionImage: rick,
    answer: '',
    answerImage: rick,
    completionMessage: (
      <>
        <p>You found the correct QR code! I&apos;m glad you never gave it up! 😉</p>
        <p>There are 7 steps in this riddle. You already passed the 1st! In the coming steps, you may need to do some sleuthing on the World Wide Web! 🕵️</p>
      </>
    )
  },
  {
    question: (
      <>
        <p>The NCP is full of nice people. Never a mean girl in sight!</p>
        <p>What color do we wear on Wednesdays?</p>
      </>
    ),
    questionImage: regina,
    answer: '', // code uses isPink function because of inputType: 'color', not this answer
    inputType: 'color',
    answerImage: meanGirls,
    completionMessage: (
      <>
        <p>
          The NCP&apos;s summer musical for 2023 is <strong>Mean Girls</strong>!
        </p>
        <p>
          Anyone who has seen Mean Girls knows that on Wednesdays,
          we wear <span className='pink'>pink</span>!
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
    questionImage: rotten,
    answer: 'EUGENE CERNAN',
    answerImage: eugene,
    completionMessage: 'The last person to walk on the moon was Apollo 17 commander Eugene Cernan on December 14, 1972 🌝'
  },
  {
    question: (
      <>
        <p>Speaking of eggs, I know Gaston eats a ton of them!</p>
        <p>If we are to believe his song, how many eggs did Gaston eat every <em>week</em> when he was a lad?</p>
      </>
    ),
    questionImage: gaston,
    answer: '336',
    answerImage: gaston2,
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
    questionImage: cats,
    answer: 'TORT',
    answerOnlyNeedsToContain: true,
    answerImage: hazel,
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
    questionImage: nfl,
    answer: 'PAUL',
    answerOnlyNeedsToContain: true,
    answerImage: vikings,
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
    questionImage: mame,
    answer: 'DENNIS',
    answerImage: mame,
    completionMessage: ''
  }
]

export default steps
