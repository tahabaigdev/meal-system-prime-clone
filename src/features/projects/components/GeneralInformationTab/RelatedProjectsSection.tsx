import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import RelatedWithTable from "../RelatedWithTable/RelatedWithTable";

const RelatedProjectsSection = () => {
  return (
    <section className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white">
      <h3 className="px-[1.6rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-black">
        Related Projects
      </h3>

      <hr className="w-full border-[#dddddd]" />

      <div className="grid grid-cols-1 gap-[4rem] p-[1.6rem]">
        <div className="flex flex-col gap-[1.6rem]">
          <div className="flex items-center gap-[.6rem]">
            <Label variant="light">Project related with </Label>

            <Tooltip>
              <TooltipTrigger>
                <Info className="size-[1.2rem] text-gray-500" />
              </TooltipTrigger>
              <TooltipContent side="top" className="z-[100]">
                <div className="p-[1rem]">
                  <h5 className="mb-[.6rem] text-[1.6rem] leading-[2.6rem] font-bold">
                    Related Project
                  </h5>

                  <p className="w-[50rem] text-[1.4rem]">
                    This functionality allows you to link projects together so
                    that other users of the system are able to quickly locate
                    them. Examples of related projects could include: projects
                    which are split over different phases (e.g. phase 1, phase
                    2); projects which turn from humanitarian projects into
                    development projects
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <RelatedWithTable />
        </div>
      </div>
    </section>
  );
};

export default RelatedProjectsSection;
