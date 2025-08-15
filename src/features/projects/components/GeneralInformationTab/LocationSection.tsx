import { Label } from "@/components/ui/label";
import SettlementTable from "../SettlementTable/SettlementTable";
import LocationsTable from "../LocationsTable/LocationsTable";

const LocationSection = () => {
  return (
    <section className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white">
      <h3 className="px-[1.6rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-black">
        Location
      </h3>

      <hr className="w-full border-[#dddddd]" />

      <div className="grid grid-cols-1 gap-[4rem] p-[1.6rem]">
        <div className="flex w-1/3 flex-col gap-[1.6rem]">
          <Label variant="light">Settlement</Label>

          <SettlementTable />
        </div>

        <div className="flex flex-col gap-[1.6rem]">
          <Label variant="light">Project Implementing Location(s)</Label>

          <LocationsTable />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
