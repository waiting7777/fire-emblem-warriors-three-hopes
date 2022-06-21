import { faHome, faUserGroup, faFeatherPointed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ActiveLink from '../ActiveLink'

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full px-4 py-3 text-lg gap-1">
      <ActiveLink href="/few" activeClassName='text-red-main outline-l-4 outline-red-main'>
        <div className='flex items-center gap-2 px-2 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
          <FontAwesomeIcon className='w-4 h-4' icon={faHome} />
          <span>Home</span>
        </div>
      </ActiveLink>
      <ActiveLink href="/few/characters" activeClassName='text-red-main border-l-4 border-red-main'>
        <div className='flex items-center gap-2 px-2 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
          <FontAwesomeIcon className='w-4 h-4' icon={faUserGroup} />
          <span>Characters</span>
        </div>
      </ActiveLink>
      <ActiveLink href="/few/classes" activeClassName='text-red-main border-l-4 border-red-main'>
        <div className='flex items-center gap-2 px-2 h-8 border-l-4 border-transparent cursor-pointer hover:bg-red-main hover:text-white'>
          <FontAwesomeIcon className='w-4 h-4' icon={faFeatherPointed} />
          <span>Classes</span>
        </div>
      </ActiveLink>
    </div>
  )
}

export default Sidebar
