import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconLayoutDashboard,
  IconMessages,
  IconTargetArrow,
  IconCalendar,
  IconSettings,
} from "@tabler/icons-react";
export default function Navbar() {
  return (
    <Tabs
      orientation="vertical"
      defaultValue="home"
      className=" h-full w-full p-4"
    >
      <TabsList className="flex !flex-col !gap-2 !p-0 !bg-transparent !h-full !w-full">
        <TabsTrigger className="bg-muted/40 rounded-xl w-full " value="home">
          <IconLayoutDashboard /> Dashboard
        </TabsTrigger>
        <TabsTrigger className="bg-muted/40 rounded-xl" value="chat">
          <IconMessages /> Chat
        </TabsTrigger>
        <TabsTrigger className="bg-muted/40 rounded-xl" value="goals">
          <IconTargetArrow /> Goals
        </TabsTrigger>
        <TabsTrigger className="bg-muted/40 rounded-xl" value="calendar">
          <IconCalendar /> Calendar
        </TabsTrigger>
        <TabsTrigger className="bg-muted/40 rounded-xl" value="settings">
          <IconSettings /> Settings
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
