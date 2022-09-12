import { useState } from 'react'
import { faTwitter, faLinkedin, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDragon, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import classNames from 'classnames'

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <div className="sticky top-0 h-12 bg-black text-white z-50">
      <div className="container flex items-center justify-between h-full px-4">
        <div className="flex gap-4 items-center w-full">
          <Link href="/" passHref>
            <div className='mr-4 cursor-pointer flex items-center gap-1'>
              <FontAwesomeIcon className='w-5 h-5' icon={faDragon} />
              <span className='ml-2 text-xl'>Import Data</span>
            </div>
          </Link>
          <div className='flex-1'></div>
          <div className='hidden md:flex gap-4'>
            <Link href="/about">
              關於
            </Link>
          </div>
        </div>
        <div className='flex items-center md:hidden' onClick={() => {
          setMenuOpen(prev => !prev)
        }}>
          <FontAwesomeIcon className='w-5 h-5' icon={faBars} />
        </div>
        <div className={classNames({ '-translate-y-full hidden': !menuOpen }, 'text-white w-full grid absolute left-0 top-12 p-4 bg-black text-xl gap-4 transition z-10')}>
          <div className='h-8 md:h-12 flex items-center px-4'>
            <Link href="/about">
              關於
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header