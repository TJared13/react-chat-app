import SearchInput from '../sidebar/SearchInput.jsx';
import ConversationList from '../sidebar/ConversationList.jsx';
import Logout from '../sidebar/Logout.jsx';

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <div className="divider px-3"></div>
        <ConversationList />
        <Logout />
    </div>
  )
}

export default Sidebar