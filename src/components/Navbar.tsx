import { ReactElement } from 'react'
import Image from 'next/image'
import ncpLogo from 'images/ncp.svg'

export default function Navbar (): ReactElement {
  return (
    <nav
      className='navbar is-primary'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand ml-5'>
        <div className='navbar-item px-0'>
          <Image
            src={ncpLogo}
            alt='Logo'
            width={36}
            height={36}
            priority
          />
        </div>
        <span className='navbar-item is-size-3 has-text-weight-bold m-1'>
          Program Riddle
        </span>
      </div>
    </nav>
  )
}
