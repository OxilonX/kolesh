//shadcn imports
//local comps imports
import ChatBulb from "./ChatBulb";
//types imports

import { chatBulbProps } from "@/types/chatTypes";

export const dummyMessages: chatBulbProps[] = [
  {
    name: "Amine",
    time: "10:15",
    isSender: false,
    message:
      "Yo! Did you manage to fix the Prisma connection error on your Linux Mint setup?",
  },
  {
    name: "You",
    time: "10:17",
    isSender: true,
    image: "/images/profile_female_default.jpeg", // Added for YOU
    message:
      "Yeah, I had to reset the migrations. I'll push the updated schema to the kolesh repo in a bit.",
  },
  {
    name: "Amine",
    time: "10:20",
    isSender: false,
    message:
      "Perfect. Also, the Soft UI buttons look clean on the Latitude 5490 screen.",
  },
  {
    name: "You",
    time: "10:25",
    isSender: true,
    image: "/images/profile_female_default.jpeg", // Added for YOU
    message:
      "For sure. I've already drafted the XP report introduction. I'll bring my laptop to the library.",
  },
  {
    name: "Amine",
    time: "10:26",
    isSender: false,
    message: "Cool. I'll handle the 'TDD' slides then. See you later! 🚀",
  },
];
const ChatLayout = () => {
  return (
    <div className="h-full">
      <ul className="flex flex-col gap-4">
        <li>
          {dummyMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col pb-6 ${msg.isSender ? "items-end" : "items-start"}`}
            >
              <ChatBulb chatBulbData={msg} />
            </div>
          ))}{" "}
        </li>
      </ul>
    </div>
  );
};

export default ChatLayout;
