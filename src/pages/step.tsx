import Layout from '@/components/Layout';
import steps from '@/steps';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import { isPink } from '@/utils/color';

export default function StepPage(): ReactElement {
  const router = useRouter();
  const [guess, setGuess] = useState('');

  const stepNumber = parseInt(
    typeof router.query.step === 'string' ? router.query.step : '0',
  );
  const step = steps[stepNumber];

  function submit(): void {
    if (
      (step.answerOnlyNeedsToContain === true && guess.includes(step.answer)) ||
      (step.inputType === 'color' && isPink(guess)) ||
      guess === step.answer
    ) {
      void router.replace(
        stepNumber === steps.length - 1
          ? '/prize'
          : `/complete?step=${stepNumber}`,
        new Date().getTime().toString(),
      );
      return;
    }

    alert("That's not it 😕 Try again!");
  }

  return (
    <Layout>
      <h2>Step {stepNumber + 1}</h2>

      <div className='is-flex is-justify-content-center'>
        <Image
          src={step.questionImage}
          alt={`Step ${stepNumber + 1}`}
          priority
        />
      </div>

      <p className='mt-4 mb-5'>{step.question}</p>

      <input
        className='input mb-5'
        type={step.inputType ?? 'text'}
        inputMode={step.inputType === 'number' ? 'numeric' : undefined}
        onChange={(e) => setGuess(e.target.value.toUpperCase().trim())}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            submit();
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
  );
}
