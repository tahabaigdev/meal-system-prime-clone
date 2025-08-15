import { Label } from "@/components/ui/label";

const ProjectEvaluabilitySection = () => {
  return (
    <section className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white">
      <h3 className="px-[1.6rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-black">
        Project Evaluability
      </h3>

      <hr className="w-full border-[#dddddd]" />

      <div className="grid grid-cols-1 gap-[2.4rem] p-[1.6rem]">
        <div className="flex flex-col gap-[.6rem]">
          <Label variant="light">Project not Evaluable</Label>

          <p className="text-[1.4rem]">No</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectEvaluabilitySection;
