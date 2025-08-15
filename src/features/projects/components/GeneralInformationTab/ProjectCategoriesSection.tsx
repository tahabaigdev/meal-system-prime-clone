import { Label } from "@/components/ui/label";
import SplitTable from "../SplitTable/SplitTable";
import ImplementationTable from "../ImplementationTable/ImplementationTable";

const ProjectCategoriesSection = () => {
  return (
    <section className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white">
      <h3 className="px-[1.6rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-black">
        Project Categories
      </h3>

      <hr className="w-full border-[#dddddd]" />

      <div className="grid grid-cols-1 gap-[2.4rem] p-[1.6rem]">
        <div className="flex flex-col gap-[.6rem]">
          <Label variant="light">Context</Label>

          <p className="text-[1.4rem]">Development</p>
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label variant="light">Remotely Managed Project?</Label>

          <p className="text-[1.4rem]">No</p>
        </div>

        <div className="flex max-w-1/2 flex-col gap-[1.6rem]">
          <Label variant="light">Project Sub Theme Split Table</Label>

          <SplitTable />
        </div>

        <div className="my-[2rem] flex flex-col gap-[.6rem]">
          <Label variant="light">Cross Cutting Themes</Label>

          <p className="text-[1.4rem]">
            Gender Equality, Migration & Displacement
          </p>
        </div>

        <div className="flex max-w-1/2 flex-col gap-[1.6rem]">
          <Label variant="light">Common Approaches Implementation</Label>

          <ImplementationTable />
        </div>
      </div>
    </section>
  );
};

export default ProjectCategoriesSection;
