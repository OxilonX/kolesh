"use client";
//shadcn imports
import { Card, CardContent, CardHeader } from "@/components/ui/card";
//next imports
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
const DashboardMainInfo = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([20]);
  return (
    <Card className="w-full bg-card-secondary">
      <CardContent>
        <CardHeader className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black text-foreground">
              Hello,{" "}
              <span className="text-primary italic  font-normal">
                oxilonx._.16
              </span>
            </h1>
            <p className="text-xs font-medium leading-5 text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui
              recusandae fuga placeat? Perspiciatis, maxime nihil! Minima est in
              nesciunt?
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <Label htmlFor="goals-slider">Goals</Label>
                <span className="text-sm text-muted-foreground">
                  {sliderValue.join(", ")}
                </span>
              </div>

              <Slider id="goals-slider" value={sliderValue} min={0} max={100} />
            </div>
          </div>
          <div className="relative shrink-0 w-56 h-56 overflow-hidden rounded-full ">
            <Image
              src={"/images/pfp_default.jpeg"}
              alt="personal Picture"
              fill
              sizes={"100px"}
              priority
              className="object-cover  w-full h-full"
            />
          </div>
        </CardHeader>
      </CardContent>
    </Card>
  );
};

export default DashboardMainInfo;
