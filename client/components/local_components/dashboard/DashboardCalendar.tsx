"use client";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
const DashboardCalendar = () => {
  return (
    <Card className="bg-card-secondary w-full h-[230px] overflow-y-auto no-scrollbar">
      <CardContent className="h-full p-0">
        <Calendar
          mode="single"
          selected={new Date()}
          className="w-full h-full !bg-card-secondary"
        />
      </CardContent>
    </Card>
  );
};

export default DashboardCalendar;
