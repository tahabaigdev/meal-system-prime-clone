import { Button } from "@/components/ui/button";
import { ChevronsDown, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ColumnDef } from "@tanstack/react-table";
import { ProjectRolesTable } from "../ProjectRolesTable/ProjectRolesTable";
import { useState } from "react";
import type { projectRolesTableType } from "../../types";
import { projectRolesAccordionData } from "../../constant";

const projectRolesTableColumns: ColumnDef<projectRolesTableType>[] = [
  {
    accessorKey: "assignee",
    header: "Assignee",
  },
  {
    accessorKey: "emailAddress",
    header: "Email Address",
  },
  {
    accessorKey: "assignmentName",
    header: "Assignment Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
];

const ProjectRolesSection = () => {
  const allItemIds = projectRolesAccordionData.map((item) => item.id);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleAll = () => {
    setOpenItems((prev) => (prev.length === 0 ? allItemIds : []));
  };

  return (
    <section className="mx-[1.6rem] my-[.8rem] rounded-[.4rem] border border-[#dddddd] bg-white px-[1.6rem] py-[.8rem]">
      <Button
        variant="transparent"
        className="h-[3.2rem] min-w-[12rem] gap-[.5rem]"
        onClick={toggleAll}
      >
        <ChevronsDown size={12} />
        <span>{openItems.length === 0 ? "Expand All" : "Collapse All"}</span>
      </Button>

      <div className="mt-[1.6rem]">
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
        >
          {projectRolesAccordionData.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-[#dadada]"
            >
              <AccordionTrigger className="justify-start gap-[1.5rem] py-[1.6rem] !no-underline">
                <div className="flex items-center gap-[.6rem]">
                  <span className="text-[1.3rem] font-medium text-black">
                    {item.title}
                  </span>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="size-[1.4rem] text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="z-[100]">
                      <div className="p-[1rem]">
                        <ul className="flex w-[50rem] flex-col gap-[1rem] text-[1.4rem]">
                          {item.tooltip.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <ProjectRolesTable
                  data={item.tableData}
                  columns={projectRolesTableColumns}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ProjectRolesSection;
