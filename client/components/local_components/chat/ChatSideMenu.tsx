//shadcn comps imports
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//icons imports
import { IconSearch, IconUsersGroup } from "@tabler/icons-react";
//local comps imports
import ChatContactCard from "./ChatContactCard";
//types import
import { personProp } from "@/types/chatTypes";
const dummyContacts: personProp[] = [
  {
    name: "Amine",
    lastMessage: "The API endpoint for images is ready.",
    time: "19:34",
  },
  {
    name: "Sarah",
    lastMessage: "Did you finish the XP report?",
    time: "08:15",
  },
  {
    name: "Yacine",
    lastMessage: "Check the Prisma schema in the kolesh repo.",
    time: "22:45",
  },
  {
    name: "Lydia",
    lastMessage: "The task list is finally syncing.",
    time: "14:20",
  },
  {
    name: "Karim",
    lastMessage: "Check your Dell laptop for the logs.",
    time: "00:05",
  },
  {
    name: "Karim",
    lastMessage: "Check your Dell laptop for the logs.",
    time: "00:05",
  },
  {
    name: "Karim",
    lastMessage: "Check your Dell laptop for the logs.",
    time: "00:05",
  },
  {
    name: "Karim",
    lastMessage: "Check your Dell laptop for the logs.",
    time: "00:05",
  },
];
const ChatSideMenu = () => {
  return (
    <Card className="w-full  h-full  m-0 bg-card-secondary ">
      <CardHeader className="w-full px-2 h-[60px]">
        <div className=" flex items-center justify-between gap-2">
          <div className="relative flex-1 flex items-center ">
            <Input
              className="px-4 py-5 w-full "
              placeholder="Search chat or contact..."
            />
            <IconSearch className="absolute right-2" />
          </div>
          <Button className=" py-5">
            <IconUsersGroup className="size-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="h-full px-2 overflow-y-auto">
        <ul className="flex flex-col gap-2">
          {dummyContacts.map((contact, i) => (
            <ChatContactCard key={i} contact={contact as personProp} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChatSideMenu;
