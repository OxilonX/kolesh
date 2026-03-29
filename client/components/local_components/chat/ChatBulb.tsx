//next imports
import Image from "next/image";
import { chatBulbProps } from "@/types/chatTypes";
const ChatBulb = ({ chatBulbData }: { chatBulbData: chatBulbProps }) => {
  return (
    <div className="flex items-start gap-2 max-w-[70%] ">
      <div className="relative shrink-0 w-[40px] h-[40px] rounded-full overflow-hidden">
        <Image
          src={chatBulbData.image || "/images/profile_male_default.jpeg"}
          alt="pfp"
          fill
          sizes="40px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <div className="flex items-center gap-2">
          <p className="text-xs text-foreground">{chatBulbData.name}</p>
          <span className="text-[0.6rem] text-muted">{chatBulbData.time}</span>
        </div>
        <div className="border  border-muted px-4 py-2 pb-4 rounded-b-3xl rounded-tr-3xl ">
          <p className="text-sm text-foreground">{chatBulbData.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBulb;
