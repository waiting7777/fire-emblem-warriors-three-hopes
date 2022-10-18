import { faHome, faCalculator } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ActiveLink from '../ActiveLink'
import Image from 'next/image'

const Sidebar = () => {

  return (
    <div className="flex flex-col w-full px-2 py-3 text-lg gap-1 border-r border-gray-200 font-marvel">
      <div className='bg-black mb-3'>
        <Image src="/images/torchlight-infinite/season_1.jpeg" width="263" height="124" layout="responsive" alt="logo" />
      </div>
      <ActiveLink href="/torchlight-infinite" activeClassName='text-red-main border-l-4 border-red-main'>
        <div className='flex items-center gap-2 px-3 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
          <FontAwesomeIcon className='w-4 h-4' icon={faHome} />
          <span>首頁</span>
        </div>
      </ActiveLink>
      <ActiveLink href="/torchlight-infinite/calculator" activeClassName='text-red-main border-l-4 border-red-main'>
        <div className='flex items-center gap-2 px-3 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
        <FontAwesomeIcon className='w-4 h-4' icon={faCalculator} />
          <span>天賦模擬器</span>
        </div>
      </ActiveLink>
    </div>
  )
}

export default Sidebar
