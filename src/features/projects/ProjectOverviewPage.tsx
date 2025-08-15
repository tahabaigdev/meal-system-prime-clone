import { usePageTitle } from "@/hooks/usePageTitle";
import DetailsHeader from "./components/DetailsHeader/DetailsHeader";
import DetailsCard from "./components/DetailsCard/DetailsCard";
import ProgressStepper from "./components/ProgressStepper/ProgressStepper";
import { checkoutSteps } from "./constant";

const ProjectOverviewPage = () => {
  usePageTitle("Projects");

  return (
    <main>
      <DetailsHeader
        title="Project Overview: 3561012 IND - Strengthening Protection and
            Education Services for Children during COVID-19 - 2021"
      />

      <div className="relative min-h-[6.4rem] justify-center border-b border-[#dddddd] bg-white p-[1.6rem]">
        <ProgressStepper stepsConfig={checkoutSteps} />
      </div>

      <div className="m-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white p-[2.4rem]">
        <DetailsCard />
      </div>
    </main>
  );
};

export default ProjectOverviewPage;
