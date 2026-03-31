//shadcn imports
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectGroup,
  SelectContent,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
//import local comps
import ThemeToggle from "../ThemeToggle";
//icons imports
import { IconLogout, IconPencil } from "@tabler/icons-react";
const SettingsTabContent = () => {
  return (
    <div className="flex flex-col  h-full overflow-hidden">
      <div className="flex flex-col flex-1 pr-2 min-h-0 gap-8 pb-4 h-full overflow-y-auto custom-scrollbar ">
        <div className="flex flex-col gap-2">
          <h2 className="font-black text-2xl">General</h2>
          <hr className="pt-2" />
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-base text-muted-foreground font-medium">
                Edit Profile
              </p>
              <Button className="hover:bg-primary/80">
                <IconPencil /> Edit
              </Button>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-base text-muted-foreground font-medium">
                Display language
              </p>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue
                    defaultValue={"english"}
                    placeholder="Select a Language"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="frensh">Frensh</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-base text-muted-foreground font-medium">
                Country
              </p>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue
                    defaultValue={"dz"}
                    placeholder="Select Your Country"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Countries</SelectLabel>
                    <SelectItem value="dz">Algeria</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-black text-2xl">Interface </h2>
          <hr className="pt-2" />
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-base text-muted-foreground  font-medium">
                Display theme
              </p>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue
                    defaultValue={"default"}
                    placeholder="Select a Theme"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Themes</SelectLabel>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-base text-muted-foreground font-medium">
                Toggle dark mode
              </p>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      <hr className="pb-4 " />
      <div className="flex flex-col gap-2 ">
        <div className="flex items-center justify-between gap-2">
          <p className="text-base text-destructive font-medium">
            End your session
          </p>
          <Button variant={"destructive"} className="hover:bg-destructive/80">
            <IconLogout /> Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsTabContent;
