import { faHome, faSquare, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ActiveLink from '../ActiveLink'

const Sidebar = () => {

  return (
    <div className="flex flex-col w-full px-2 py-3 text-lg gap-1 border-r border-gray-200 font-marvel">
      <ActiveLink href="/marvel-snap" activeClassName='text-red-main border-l-4 border-red-main'>
        <div className='flex items-center gap-2 px-3 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
          <FontAwesomeIcon className='w-4 h-4' icon={faHome} />
          <span>首頁</span>
        </div>
      </ActiveLink>
      <ActiveLink href="/marvel-snap/cards" activeClassName='text-red-main border-l-4 border-red-main'>
        <div className='flex items-center gap-2 px-3 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
        <FontAwesomeIcon className='w-4 h-4' icon={faSquare} />
          <span>Cards</span>
        </div>
      </ActiveLink>
      <ActiveLink href="/marvel-snap/locations" activeClassName='text-red-main border-l-4 border-red-main'>
        <div className='flex items-center gap-2 px-3 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
        <FontAwesomeIcon className='w-4 h-4' icon={faLocationPin} />
          <span>Locations</span>
        </div>
      </ActiveLink>
    </div>
  )
}

export default Sidebar
