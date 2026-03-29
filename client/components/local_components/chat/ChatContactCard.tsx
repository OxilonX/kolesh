import { Card, CardContent } from "@/components/ui/card";
//next imports
import Image from "next/image";
//types imports
import { personProp } from "@/types/chatTypes";
const ChatContactCard = ({ contact }: { contact: personProp }) => {
  return (
    <Card className="w-full py-0 overflow-hidden border-none shadow-none hover:bg-muted/50 transition-colors cursor-pointer">
      <CardContent className=" p-2">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0 w-[60px] h-[60px] overflow-hidden rounded-full border border-muted/20">
            <Image
              src="/images/pfp_default.jpeg"
              alt={contact.name}
              fill
              sizes="50px"
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-center gap-2">
            <div className="flex justify-between items-baseline gap-2">
              <p className="text-sm font-semibold text-foreground truncate">
                {contact.name}
              </p>

              <span className="text-[10px] text-muted-foreground shrink-0">
                {contact.time}
              </span>
            </div>

            <p className="text-xs text-muted-foreground truncate w-full">
              {contact.lastMessage}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatContactCard;
