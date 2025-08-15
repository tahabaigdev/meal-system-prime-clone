import WorkflowHistoryTable from "../WorkflowHistoryTable/WorkflowHistoryTable";

const WorkflowHistorySection = () => {
  return (
    <section className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white px-[1.6rem] py-[.8rem]">
      <WorkflowHistoryTable />
    </section>
  );
};

export default WorkflowHistorySection;
