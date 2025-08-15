import { usePageTitle } from "@/hooks/usePageTitle";
import DetailsHeader from "../projects/components/DetailsHeader/DetailsHeader";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sheet } from "lucide-react";
import LogframeSection from "./components/LogframeSection/LogframeSection";

const LogframePage = () => {
  usePageTitle("Projects");

  return (
    <main>
      <DetailsHeader
        title="Log Frame : 3561012 IND - Strengthening Protection and Education Services for Children during COVID-19 - 2021"
        infoItems={[
          { label: "Last modified on:", value: "01 Apr 2022 10:45" },
          { label: "Last modified by:", value: "Catalina Clarino" },
          { label: "Created on:", value: "17 Mar 2022 06:55" },
          { label: "Created by:", value: "Catalina Clarino" },
        ]}
        secondaryDropdownItems={[
          { label: "Log Frame How-To Guide", link: "/guides/log-frame" },
        ]}
      />

      <div className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white">
        <div className="flex justify-between">
          <div className="grid max-w-1/2 grid-cols-3 gap-[2.4rem] p-[1.6rem]">
            <div className="flex flex-col gap-[.6rem]">
              <Label variant="light">Project Start Date</Label>

              <p className="text-[1.4rem]">16 Jul 2021</p>
            </div>

            <div className="flex flex-col gap-[.6rem]">
              <Label variant="light">Project End Date</Label>

              <p className="text-[1.4rem]">30 Sep 2022</p>
            </div>

            <div className="flex flex-col gap-[.6rem]">
              <Label variant="light">IPTT End Date</Label>

              <p className="text-[1.4rem]">16 Jul 2021</p>
            </div>
          </div>

          <div className="flex gap-[1rem] p-[1.6rem]">
            <Button className="h-[3.2rem] min-w-[8.8rem]">
              Export Log Frame to Analytics
            </Button>

            <Button
              variant="transparent"
              className="flex h-[3.2rem] min-w-[8.8rem] items-center gap-[.6rem]"
            >
              <Sheet className="size-[1.8rem] stroke-[1.5px]" />{" "}
              <span>Export IPTT to Excel</span>
            </Button>
          </div>
        </div>

        <div className="mt-[6rem]">
          <LogframeSection />
        </div>
      </div>
    </main>
  );
};

export default LogframePage;
