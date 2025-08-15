import FundingSection from "./FundingSection";
import GeneralInformationSection from "./GeneralInformationSection";
import LocationSection from "./LocationSection";
import ManagementInformationSection from "./ManagementInformationSection";
import ProjectCategoriesSection from "./ProjectCategoriesSection";
import ProjectEvaluabilitySection from "./ProjectEvaluabilitySection";
import RelatedProjectsSection from "./RelatedProjectsSection";

const GeneralInformationTab = () => {
  return (
    <>
      <GeneralInformationSection />
      <ProjectCategoriesSection />
      <ManagementInformationSection />
      <ProjectEvaluabilitySection />
      <FundingSection />
      <LocationSection />
      <RelatedProjectsSection />
    </>
  );
};

export default GeneralInformationTab;
