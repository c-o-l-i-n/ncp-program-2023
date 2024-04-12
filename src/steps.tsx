import { HTMLInputTypeAttribute, ReactElement } from 'react';
import { StaticImageData } from 'next/image';
import trophies from 'images/trophies.webp';
import stairs from 'images/stairs.webp';
import shine from 'images/shine.webp';
import lights from 'images/lights.webp';
import college from 'images/college.webp';
import cafe from 'images/cafe.webp';
import backRow from 'images/back-row.webp';
import f72 from 'images/f72.webp';
import hallway from 'images/hallway.webp';
import pennants from 'images/pennants.webp';
import trophyCase from 'images/trophy-case.webp';
import oneHundredClub from 'images/100-club.webp';
import foreverNcp from 'images/forever-ncp.webp';
import ncpLights from 'images/ncp-lights.webp';
import ncpStairs from 'images/ncp-stairs.webp';
import hallOfDistinction from 'images/hall-of-distinction.webp';

interface Step {
  question: ReactElement;
  answer: string;
  questionImage: StaticImageData;
  answerImage: StaticImageData;
  answerOnlyNeedsToContain?: boolean;
  inputType?: HTMLInputTypeAttribute;
  completionMessage: string | ReactElement;
}

const steps: Step[] = [
  {
    question: (
      <>
        <p>
          Time to illuminate the stage! Venture forth and count the shimmering
          beacons overhead.
        </p>
        <p>How many overhead stage lights grace our theatrical realm?</p>
      </>
    ),
    questionImage: lights,
    inputType: 'number',
    answer: '10',
    answerImage: ncpLights,
    completionMessage: (
      <>
        <p>Bravo! You&apos;ve got the spotlight shining on you!</p>
        <p>
          Now, it&apos;s time to step into the limelight and explore the wonders
          of the auditorium and lobby. Get ready to rise from your seat and
          embark on the next part of the adventure!
        </p>
      </>
    ),
  },
  {
    question: (
      <>
        <p>
          Prepare for your grand entrance! Take a glance at the path to the
          spotlight.
        </p>
        <p>
          How many stair steps pave the way from the auditorium floor to the
          majestic stage?
        </p>
      </>
    ),
    questionImage: stairs,
    answer: '5',
    inputType: 'number',
    answerImage: ncpStairs,
    completionMessage: (
      <>
        <p>
          You&apos;ve scaled the staircase to success! Your journey to the top
          has begun with this step. But there&apos;s more adventure ahead.
        </p>
        <p>Ready to continue your ascent?</p>
      </>
    ),
  },
  {
    question: (
      <>
        <p>
          Seeking secrets in the shadows? Along the back row of the auditorium,
          messages from generous donors adorn the seats. Among them, one
          declaration rings true: <strong>Forever, NCP!</strong>
        </p>
        <p>Whose heartfelt words echo through the theater halls?</p>
      </>
    ),
    questionImage: backRow,
    answer: 'VANDY',
    answerOnlyNeedsToContain: true,
    answerImage: foreverNcp,
    completionMessage: (
      <>
        <p>
          You&apos;ve uncovered the voice of eternal support! The spirit of the
          NCP echoes through those cherished words. But the journey doesn&apos;t
          end here. More mysteries beckon!
        </p>
        <p>Are you ready to continue unraveling the enigma?</p>
      </>
    ),
  },
  {
    question: (
      <>
        <p>
          Step into the lobby, where history whispers from every corner! Among
          the esteemed names on the <strong>100 Club Charter Members</strong>{' '}
          plaque, one stands as a beacon of support:{' '}
          <strong>Shawn Hershberger</strong>.
        </p>
        <p>
          What numerical legacy accompanies this distinguished individual&apos;s
          name?
        </p>
      </>
    ),
    questionImage: cafe,
    answer: '1320',
    answerImage: oneHundredClub,
    inputType: 'number',
    completionMessage: (
      <>
        <p>
          Your keen eye has revealed the numerical legacy tied to Shawn
          Hershberger of CAFÉ 1320. But the adventure doesn&apos;t pause here...
        </p>
        <p>Are you ready to delve deeper into the mysteries of the NCP?</p>
      </>
    ),
  },
  {
    question: (
      <>
        <p>
          Explore the lobby within the walls of Hoover High School, where
          trophies speak of past triumphs! Among these relics, one from the 1999
          Music Festivals proudly boasts{' '}
          <strong>FIRST PLACE, __________ ENSEMBLE CLASS AAA</strong>.
        </p>
        <p>
          What vibrant musical style took center stage on this auspicious
          occasion?
        </p>
      </>
    ),
    questionImage: trophies,
    answer: 'JAZZ',
    answerImage: trophyCase,
    completionMessage: (
      <>
        <p>
          You&apos;ve struck a chord with the essence of victory! Your keen
          observation has uncovered the musical genre celebrated on the 1999
          Music Festivals trophy. But the journey continues!
        </p>
        <p>Ready to explore further into the depths of the NCP?</p>
      </>
    ),
  },
  {
    question: (
      <>
        <p>
          Explore the hallways near the Guidance Office, where a colorful
          display of college pennants waves in the breeze! Among the array of
          esteemed institutions, find the one that stands between{' '}
          <strong>Hiram College</strong> and <strong>Greenville College</strong>
          .
        </p>
        <p>Which university completes this triumphant trio?</p>
      </>
    ),
    questionImage: college,
    answer: 'VALPARAISO',
    answerImage: pennants,
    completionMessage: (
      <>
        <p>
          You&apos;ve navigated the collegiate landscape with precision! Your
          sharp eye has identified the university nestled between Hiram College
          and Greenville College. But the journey isn&apos;t over yet!
        </p>
        <p>Ready to venture deeper into the wonders of the NCP?</p>
      </>
    ),
  },
  {
    question: (
      <>
        <p>
          Step into the esteemed <strong>HALL OF DISTINCTION</strong>, where
          excellence is immortalized for all to admire! Among the revered
          inductees at the turn of the millennium, one luminary shines bright:{' '}
          <strong>Barbara Russell ______</strong>.
        </p>
        <p>
          What distinguished surname accompanies Barbara&apos;s illustrious
          legacy?
        </p>
      </>
    ),
    questionImage: shine,
    answer: 'DONAHO',
    answerImage: hallOfDistinction,
    completionMessage: (
      <>
        <p>
          You&apos;ve unlocked the <strong>HALL OF DISTINCTION</strong> and
          claimed victory! Barbara Russell Donaho&apos;s name now shines among
          esteemed inductees. But the next question is your final challenge!
        </p>
        <p>Ready for the ultimate mystery?</p>
      </>
    ),
  },
  {
    question: (
      <>
        <p>
          Prepare for your last challenge! Amidst the bustling corridors of the{' '}
          <strong>F</strong> hallway, one mystery remains unsolved:
        </p>
        <p>What is the highest locker number in this labyrinth of lockers?</p>
      </>
    ),
    questionImage: hallway,
    inputType: 'number',
    answer: '72',
    answerImage: f72,
    completionMessage: '',
  },
];

export default steps;
