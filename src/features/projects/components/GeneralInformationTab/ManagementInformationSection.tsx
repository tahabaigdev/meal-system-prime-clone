import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ManagementInformationSection = () => {
  return (
    <section className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white">
      <h3 className="px-[1.6rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-black">
        Management Information
      </h3>

      <hr className="w-full border-[#dddddd]" />

      <div className="grid grid-cols-1 gap-[2.4rem] p-[1.6rem]">
        <div className="flex flex-col gap-[1.6rem]">
          <Label variant="light">Programme Office(s)</Label>

          <div className="flex flex-wrap gap-[1rem]">
            <Tooltip>
              <TooltipTrigger className="h-[3.2rem] w-[25.4rem] overflow-hidden rounded-[2.4rem] bg-[#E0E0E0] px-[1.2rem] py-[.7rem] text-[1.3rem] leading-[1.8rem] text-ellipsis whitespace-nowrap text-black">
                35667/South Hub Programme Operations
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="w-[25.4rem] p-[1rem] text-center text-[1.2rem]">
                  35667/South Hub Programme Operations
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger className="h-[3.2rem] w-[25.4rem] overflow-hidden rounded-[2.4rem] bg-[#E0E0E0] px-[1.2rem] py-[.7rem] text-[1.3rem] leading-[1.8rem] text-ellipsis whitespace-nowrap text-black">
                35669/Telangana/Andhra Pradesh Programme Admin
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="w-[25.4rem] p-[1rem] text-center text-[1.2rem]">
                  35669/Telangana/Andhra Pradesh Programme Admin
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger className="h-[3.2rem] w-[25.4rem] overflow-hidden rounded-[2.4rem] bg-[#E0E0E0] px-[1.2rem] py-[.7rem] text-[1.3rem] leading-[1.8rem] text-ellipsis whitespace-nowrap text-black">
                35670/Telangana/Andhra Pradesh Programme Operations
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="w-[25.4rem] p-[1rem] text-center text-[1.2rem]">
                  35670/Telangana/Andhra Pradesh Programme Operations
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementInformationSection;
