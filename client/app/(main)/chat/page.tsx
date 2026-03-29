//local comps imports
import ChatSideMenu from "@/components/local_components/chat/ChatSideMenu";
import ChatDisscussion from "@/components/local_components/chat/ChatDisscussion";

const ChatPage = () => {
  return (
    <div className="h-[calc(100vh-3.2rem)] grid grid-cols-[300px_1fr] gap-2 p-2">
      <aside className="overflow-hidden rounded-lg">
        <ChatSideMenu />
      </aside>
      <div className="overflow-hidden rounded-lg">
        <ChatDisscussion />
      </div>
    </div>
  );
};

export default ChatPage;
