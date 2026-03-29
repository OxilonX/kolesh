//shadcn Imports
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
//local comps imports
import ChatLayout from "./ChatLayout";
//icons imports
import {
  IconSend,
  IconLink,
  IconSearch,
  IconDotsVertical,
} from "@tabler/icons-react";

const ChatDisscussion = () => {
  return (
    <Card className="flex flex-col w-full h-full  m-0 border-none shadow-none bg-card-secondary ">
      <CardHeader className="shrink-0 px-4 py-0 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border">
              <Image
                src="/images/profile_male_default.jpeg"
                fill
                alt="Profile Picture"
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-sm font-bold text-foreground leading-none">
                Amine
              </h1>
              <span className="text-[10px] text-green-500 font-medium">
                Online
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Button variant="ghost" size="icon" className="rounded-full">
              <IconSearch className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <IconDotsVertical className="size-5" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col min-h-0 p-4 gap-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto min-h-0 mb-6 custom-scrollbar">
          <ChatLayout />
        </div>

        <div className="sticky bottom-6 shrink-0 pt-2 ">
          <div className="flex items-center gap-2">
            <div className="relative flex-1 group">
              <Input
                className="py-6 rounded-2xl border  focus-visible:ring-1 focus-visible:ring-primary/20"
                placeholder="Type your message..."
              />
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 p-0 group"
                variant="ghost"
              >
                <IconSend className="size-5 text-primary group-hover:rotate-12 transition-all duration-300" />
              </Button>
            </div>

            <Button
              variant="outline"
              className="h-12 w-12 rounded-2xl shrink-0 border-muted/50 hover:bg-primary/10"
            >
              <IconLink className="size-5 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatDisscussion;
