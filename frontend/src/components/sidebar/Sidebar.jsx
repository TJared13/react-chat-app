import SearchInput from '../sidebar/SearchInput';
import Conversations from '../sidebar/Conversations';
import LogOut from '../sidebar/Logout';

const Sidebar = () => {
  return (
    <div>
        <SearchInput />
        <div className="divider px-3" />
        <Conversations />
        <LogOut />
    </div>
  )
}

export default Sidebar