import { faHome, faUserGroup, faFeatherPointed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ActiveLink from '../ActiveLink'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full px-2 py-3 text-lg gap-1 border-r border-gray-200">
      <div className='bg-black mb-3'>
        <Image src="/images/marvel-snap/season2.png" width="263" height="124" layout="responsive" alt="logo" />
      </div>
      <ActiveLink href="/marvel-snap" activeClassName='text-red-main outline-l-4 outline-red-main'>
        <div className='flex items-center gap-2 px-3 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
          <FontAwesomeIcon className='w-4 h-4' icon={faHome} />
          <span>首頁</span>
        </div>
      </ActiveLink>
      <ActiveLink href="/marvel-snap/characters" activeClassName='text-red-main border-l-4 border-red-main'>
        <div className='flex items-center gap-2 px-3 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
          <FontAwesomeIcon className='w-4 h-4' icon={faUserGroup} />
          <span>角色一覽</span>
        </div>
      </ActiveLink>
      <ActiveLink href="/marvel-snap/classes" activeClassName='text-red-main border-l-4 border-red-main'>
        <div className='flex items-center gap-2 px-3 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
          <FontAwesomeIcon className='w-4 h-4' icon={faFeatherPointed} />
          <span>Classes</span>
        </div>
      </ActiveLink>
    </div>
  )
}

export default Sidebar
