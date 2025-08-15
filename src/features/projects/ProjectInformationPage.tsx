import DetailsHeader from "./components/DetailsHeader/DetailsHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralInformationTab from "./components/GeneralInformationTab/GeneralInformationTab";
import ProjectRolesTab from "./components/ProjectRolesTab/ProjectRolesTab";
import WorkflowHistoryTab from "./components/WorkflowHistoryTab/WorkflowHistoryTab";
import { Minus } from "lucide-react";

const tabListData = [
  {
    id: 0,
    value: "tab-1",
    text: "General Information",
  },
  {
    id: 1,
    value: "tab-2",
    text: "Project Roles",
  },
  {
    id: 2,
    value: "tab-3",
    text: "Workflow History",
  },
];

const tabContentData = [
  {
    id: 0,
    value: "tab-1",
    component: <GeneralInformationTab />,
  },
  {
    id: 1,
    value: "tab-2",
    component: <ProjectRolesTab />,
  },
  {
    id: 2,
    value: "tab-3",
    component: <WorkflowHistoryTab />,
  },
];

const ProjectInformationPage = () => {
  const defaultTabValue = tabListData[0].value;

  return (
    <main>
      <DetailsHeader
        title="Project Information : 3561012 IND - Strengthening Protection and Education Services for Children during COVID-19 - 2021"
        infoItems={[
          { label: "Last modified on:", value: "11 Apr 2022 17:04" },
          { label: "Last modified by:", value: "Subhashish Neogi" },
          { label: "Created on:", value: "24 Feb 2022 08:51" },
          { label: "Created by:", value: "Catalina Clarino" },
        ]}
        secondaryDropdownItems={[
          {
            label: "Project Information How-To Guide",
            link: "/guides/log-frame",
          },
        ]}
      />

      <Tabs defaultValue={defaultTabValue}>
        <TabsList className="inline-flex h-[3.9rem] w-fit items-center justify-start gap-[.6rem] rounded-none px-[1.6rem]">
          {tabListData.map((item, idx) => (
            <TabsTrigger
              className="m-0 inline-flex items-center justify-center rounded-none bg-[transparent] p-0 text-[1.4rem] leading-[2.2rem] font-normal whitespace-nowrap text-[#999999] uppercase !shadow-none data-[state=active]:font-medium data-[state=active]:text-black"
              key={item.id}
              value={item.value}
            >
              {item.text}

              {idx < tabListData.length - 1 && (
                <Minus
                  strokeWidth={1.5}
                  className="size-[2rem] rotate-90 text-[#999999]"
                />
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        <hr className="w-full border-[#dddddd]" />

        {tabContentData.map((item) => (
          <TabsContent key={item.id} value={item.value}>
            {item.component}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
};

export default ProjectInformationPage;
