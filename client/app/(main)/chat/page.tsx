//local comps imports
import ChatSideMenu from "@/components/local_components/chat/ChatSideMenu";
import ChatDisscussion from "@/components/local_components/chat/ChatDisscussion";
const ChatPage = () => {
  return (
    <div className="h-screen grid grid-cols-[300px_1fr] overflow-y-auto no-scrollbar gap-2 p-2 ">
      <aside className="h-full overflow-y-auto no-scrollbar">
        <ChatSideMenu />
      </aside>
      <div className="h-full overflow-y-auto no-scrollbar">
        <ChatDisscussion />
      </div>
    </div>
  );
};

export default ChatPage;
