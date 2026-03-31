//shadcn imports
import { Card, CardContent } from "@/components/ui/card";
//local comps imports
import SettingsTabContent from "@/components/local_components/settings/SettingsTabContent";
const page = () => {
  return (
    <div className="h-[calc(100vh-2.5rem)] px-4 py-4">
      <Card className="w-full h-full ">
        <CardContent className="flex flex-col h-full">
          <div className="pt-4 h-full min-h-0">
            <SettingsTabContent />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
