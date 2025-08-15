import { Label } from "@/components/ui/label";
import AwardsTable from "../AwardsTable/AwardsTable";
import SourcesTable from "../SourcesTable/SourcesTable";

const FundingSection = () => {
  return (
    <section className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white">
      <h3 className="px-[1.6rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-black">
        Funding
      </h3>

      <hr className="w-full border-[#dddddd]" />

      <div className="grid grid-cols-1 gap-[4rem] p-[1.6rem]">
        <div className="flex flex-col gap-[1.6rem]">
          <Label variant="light">Related Awards</Label>

          <AwardsTable />
        </div>

        <div className="flex w-1/2 flex-col gap-[1.6rem]">
          <Label variant="light">Non Award Funding Sources</Label>

          <SourcesTable />
        </div>
      </div>
    </section>
  );
};

export default FundingSection;
