import FilterMenu from "@/features/projects/components/FilterMenu/FilterMenu";
import { usePageTitle } from "@/hooks/usePageTitle";

import ProjectsDataTable from "./components/ProjectsDataTable/ProjectsDataTable";

const ProjectsPage = () => {
  usePageTitle("Projects");

  return (
    <main className="m-[2.4rem]">
      <div className="rounded-[4px] border border-[#dddddd] bg-white px-[2.4rem] py-[1.6rem]">
        <FilterMenu />

        <div className="mt-[1.6rem]">
          <ProjectsDataTable />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
