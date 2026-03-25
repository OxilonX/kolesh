//data imports
import { socialsData } from "@/data/socials";
//local comps imports
import { Button } from "@/components/ui/button";
//icons imports
import { IconPencil } from "@tabler/icons-react";
const Socials = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs">Social Media</h2>
        <Button size={"xs"}>
          <IconPencil />
          Edit
        </Button>
      </div>

      <ul className="grid grid-cols-3 gap-4 gap-y-8 py-4 ">
        {socialsData.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  rounded-md transition-all"
          >
            <li
              className="w-8 h-8 mx-auto cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ fill: social.color }}
            >
              {social.svg}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
