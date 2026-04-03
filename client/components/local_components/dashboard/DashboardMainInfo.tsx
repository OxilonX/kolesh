"use client";
//shadcn imports
import { Card, CardContent, CardHeader } from "@/components/ui/card";
//next imports
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import Image from "next/image";
//react imports
import { useState } from "react";
//contexts imports
import { useSessionContext } from "@/app/providers";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

const DashboardMainInfo = () => {
  const { session, isPending } = useSessionContext();
  const router = useRouter();
  const [progessValue, setprogessValue] = useState<number>(29);
  if (isPending)
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner className="size-12" />
      </div>
    );
  const user: userType | undefined = session?.user;
  if (!user) return router.push("/login");
  console.log(user);

  return (
    <Card className="h-full w-full bg-card-secondary">
      <CardContent className="flex flex-col flex-1 min-h-0">
        <CardHeader className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black text-foreground">
              Hello,{" "}
              <span className="text-primary italic  font-normal">
                {user?.name}
              </span>
            </h1>
            <p className="text-xs font-medium leading-5 text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui
              recusandae fuga placeat? Perspiciatis, maxime nihil! Minima est in
              nesciunt?
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <Label htmlFor="goals-progress">Goals</Label>
                <span className="text-sm text-muted-foreground">
                  {progessValue}%
                </span>
              </div>

              <Progress
                className="h-4 rounded-xs"
                id="goals-progress"
                value={progessValue}
              />
            </div>
          </div>
          <div className="relative shrink-0 w-56 h-56 overflow-hidden rounded-full ">
            <Image
              src={
                user?.gender === "FEMALE"
                  ? "/images/profile_female_default.jpeg"
                  : "/images/pfp_default.jpeg"
              }
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
