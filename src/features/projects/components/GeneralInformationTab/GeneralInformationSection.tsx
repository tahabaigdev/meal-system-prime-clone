import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GeneralInformationSection = () => {
  return (
    <section className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white">
      <h3 className="px-[1.6rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-black">
        General Information
      </h3>

      <hr className="w-full border-[#dddddd]" />

      <div className="grid grid-cols-4 gap-[2.4rem] p-[1.6rem]">
        <div className="flex flex-col gap-[.6rem]">
          <Label variant="light">Implementing Office</Label>

          <p className="text-[1.4rem]">356/SCIN</p>
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label variant="light">Project Code</Label>

          <p className="text-[1.4rem]">3561012</p>
        </div>

        <div></div>

        <div></div>

        <div className="col-span-4 flex flex-col gap-[.6rem]">
          <Label variant="light">Name</Label>

          <p className="text-[1.4rem]">
            IND - Strengthening Protection and Education Services for Children
            during COVID-19 - 2021
          </p>
        </div>

        <div className="col-span-4 flex flex-col gap-[.6rem]">
          <Label variant="light">Description</Label>

          <p className="text-[1.4rem]">Child Protection and Education</p>
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <div className="flex items-center gap-[.6rem]">
            <Label variant="light">Project Design Start Date </Label>

            <Tooltip>
              <TooltipTrigger>
                <Info className="size-[1.2rem] text-gray-500" />
              </TooltipTrigger>
              <TooltipContent side="top" className="z-[100]">
                <div className="p-[1rem]">
                  <p className="w-[50rem] text-[1.4rem]">
                    The Project Design Start Date is the date on which the
                    Project entered the Design phase of the Project Lifecycle.
                    This is usually the date of the go/no go decision meeting or
                    the date the organisation decided to respond to a
                    humanitarian emergency. It cannot be set later than the date
                    a record is created in PRIME as a Project Record is created
                    after the decision to move from the Identification to the
                    Design phase.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <p className="text-[1.4rem]">16 Jul 2021</p>
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <div className="flex items-center gap-[.6rem]">
            <Label variant="light">Project Delivery Start Date </Label>

            <Tooltip>
              <TooltipTrigger>
                <Info className="size-[1.2rem] text-gray-500" />
              </TooltipTrigger>
              <TooltipContent side="top" className="z-[100]">
                <div className="p-[1rem]">
                  <p className="w-[50rem] text-[1.4rem]">
                    The date when a project intends to/does start delivery of
                    project interventions/activities to the targeted populations
                    and when expenditure on a project is allowed to commence.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <p className="text-[1.4rem]">01 Apr 2022</p>
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label variant="light">Project End Date</Label>

          <p className="text-[1.4rem]">30 Sep 2022</p>
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label variant="light">Duration</Label>

          <p className="text-[1.4rem]">442 day(s)</p>
        </div>
      </div>
    </section>
  );
};

export default GeneralInformationSection;
