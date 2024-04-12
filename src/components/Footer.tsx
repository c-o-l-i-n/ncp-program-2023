import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <footer className='footer has-text-centered is-size-7 py-6'>
      <p className='mb-3'>
        <em>The Great NCP Program Riddle</em> was created and paid for by a 3rd
        party, not the North Canton Playhouse.
      </p>
      <p>
        The author is solely to blame for all shenanigans and any frustration or
        outrage caused by this game.
      </p>
    </footer>
  );
}
