import Image from "next/image";
const PersonalInfosUI = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="relative shrink-0 w-20 h-20 overflow-hidden rounded-full ">
          <Image
            src={"/images/profile_male_default.jpeg"}
            alt="personal Picture"
            fill
            sizes={"100px"}
            priority
            className="object-cover  w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1 font-medium text-xs dark:text-muted-foreground">
          <p>Name : Boulmehad Mehdi</p>
          <p>Country : Algeria</p>
          <p>Age : 19</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfosUI;
