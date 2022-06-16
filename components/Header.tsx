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
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <div className="flex gap-4 items-center">
          <Link href="/" passHref>
            <div className='mr-4 cursor-pointer flex items-center gap-1'>
              <FontAwesomeIcon className='w-5 h-5' icon={faDragon} />
              <span className='ml-2 text-xl'>Fire Emblem Database</span>
            </div>
          </Link>
          {/* <div className='hidden md:block'>
            <Link href="/archive">
              文章列表
            </Link>
          </div> */}
        </div>
        <div className='flex items-center md:hidden' onClick={() => {
          setMenuOpen(prev => !prev)
        }}>
          <FontAwesomeIcon className='w-5 h-5' icon={faBars} />
        </div>
        <div className={classNames({ '-translate-y-full hidden': !menuOpen }, 'text-white w-full grid absolute left-0 top-12 p-8 bg-black text-xl gap-4 transition z-10')}>
          {/* <div>
            <Link href="/archive">
              文章列表
            </Link>
          </div> */}
        </div>
        <div className="gap-4 hidden md:flex">
          {/* <div>
            <a href="https://www.github.com/waiting7777" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header