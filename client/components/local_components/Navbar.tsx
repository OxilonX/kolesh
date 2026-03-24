import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDisabled() {
  return (
    <Tabs orientation="vertical" defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">Dashboard</TabsTrigger>
        <TabsTrigger value="chat" >
          Chat
        </TabsTrigger>
        <TabsTrigger value="goals" >
          Goals
        </TabsTrigger>
        <TabsTrigger value="calendar" >
          Calendar
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
