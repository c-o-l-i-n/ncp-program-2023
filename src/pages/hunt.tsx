import Layout from '@/components/Layout';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import spotlight from 'images/spotlight.webp';

export default function Hunt(): ReactElement {
  const router = useRouter();

  function start(): void {
    void router.replace('/step?step=0', new Date().getTime().toString());
  }

  return (
    <Layout>
      <h2>Welcome to Playhouse Pursuit!</h2>

      <div className='is-flex is-justify-content-center mb-4'>
        <Image src={spotlight} alt='' priority />
      </div>

      <p>
        Congratulations, intrepid explorer, for answering the call to adventure
        at the North Canton Playhouse!
      </p>

      <p>
        The spotlight is yours, and the adventure awaits! Let&apos;s dive in and
        uncover the magic together!
      </p>

      <div className='is-flex is-justify-content-end'>
        <button className='button is-primary' onClick={start}>
          Start
        </button>
      </div>
    </Layout>
  );
}
