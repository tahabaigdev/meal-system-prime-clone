import { ChevronDown, Funnel } from "lucide-react";
import { useState } from "react";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import Select, {
  components,
  type OptionProps,
  type StylesConfig,
} from "react-select";
import {
  activeInactiveProjectsOptions,
  assigneeOptions,
  humanitarianResponseOptions,
  implementingOfficeOptions,
  projectAwardsOptions,
  projectPhaseStatusOptions,
  scFundingOfficeOptions,
  subThemeOptions,
  themeOptions,
} from "../../constant";
import { Button } from "@/components/ui/button";
import type { selectOptionType } from "@/types/global";

const customStyles: StylesConfig<selectOptionType, true> = {
  control: (base, state) => ({
    ...base,
    borderRadius: ".375rem",
    borderColor: state.isFocused ? "#5b6b79" : "#dddddd",
    boxShadow: "none",
    padding: "0px",
    fontSize: "1.4rem",
    minHeight: "3.2rem",
    "&:hover": {
      borderColor: "#5b6b79",
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#0000000a"
      : state.isFocused
        ? "#0000000a"
        : "white",
    ":active": {
      backgroundColor: "#0000000a",
    },
    color: "#5b6b79",
    fontSize: "1.4rem",
    lineHeight: "3.9rem",
    padding: "0px 8px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#f3f4f6",
    borderRadius: "0.4rem",
    padding: "2px",
    fontSize: "1.2rem",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#000000",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#6b7280",
    ":hover": {
      backgroundColor: "#e5e7eb",
      color: "#000000",
    },
  }),
};

// Custom Option Component with native title tooltip
const CustomOption = (props: OptionProps<selectOptionType>) => {
  return (
    <div title={props.data.label}>
      <components.Option {...props}>{props.data.label}</components.Option>
    </div>
  );
};

const FilterMenu = () => {
  const [activeFilter, setActiveFilter] = useState(true);

  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={() => setActiveFilter(!activeFilter)}
          className="group inline-flex h-full cursor-pointer items-center justify-center gap-[.6rem] rounded-[.4rem] px-[1.4rem] py-[1rem] text-[1.4rem] leading-[3.6rem] font-medium outline-0 select-none hover:bg-[#0000000a]"
        >
          <Funnel
            className={`${
              activeFilter ? "text-primary" : ""
            } size-[2rem] transition-all duration-200`}
          />{" "}
          <ChevronDown
            className={`size-[1.8rem] transition-all duration-200 ${
              activeFilter ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      <div
        className={`grid w-full grid-cols-4 gap-x-[1.6rem] gap-y-[3.2rem] ${activeFilter ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="project-name" variant="light">
            Project Name
          </Label>

          <Input type="text" name="project-name" />
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="project-code" variant="light">
            Project Code
          </Label>

          <Input type="text" name="project-code" />
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="humanitarian-response" variant="light">
            Humanitarian Response
          </Label>

          <Select<selectOptionType, true>
            isMulti
            styles={customStyles}
            name="humanitarian-response"
            options={humanitarianResponseOptions}
            components={{ Option: CustomOption }}
            placeholder="Please Select"
          />
        </div>

        <div className="flex flex-col gap-[.6rem]"></div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="implementing-office" variant="light">
            Implementing Office
          </Label>

          <Select<selectOptionType, true>
            styles={customStyles}
            name="implementing-office"
            options={implementingOfficeOptions}
            components={{ Option: CustomOption }}
            isClearable
            isSearchable
            placeholder="Please Select"
          />
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="sc-funding-office" variant="light">
            SC Funding Office
          </Label>

          <Select<selectOptionType, true>
            isMulti
            styles={customStyles}
            name="sc-funding-office"
            options={scFundingOfficeOptions}
            components={{ Option: CustomOption }}
            placeholder="Please Select"
          />
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="project-awards" variant="light">
            Project Awards
          </Label>

          <Select<selectOptionType, true>
            isMulti
            styles={customStyles}
            name="project-awards"
            options={projectAwardsOptions}
            components={{ Option: CustomOption }}
            placeholder="Please Select"
          />
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="assignee" variant="light">
            Assignee
          </Label>

          <Select<selectOptionType, true>
            styles={customStyles}
            name="assignee"
            options={assigneeOptions}
            components={{ Option: CustomOption }}
            isClearable
            isSearchable
            placeholder="Please Select"
          />
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="active-inactive-projects" variant="light">
            Active/Inactive Projects
          </Label>

          <Select<selectOptionType, true>
            styles={customStyles}
            name="active-inactive-projects"
            options={activeInactiveProjectsOptions}
            components={{ Option: CustomOption }}
            isClearable
            isSearchable
            placeholder="Please Select"
          />
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="project-phase-status" variant="light">
            Project Phase/Status
          </Label>

          <Select<selectOptionType, true>
            isMulti
            styles={customStyles}
            name="project-phase-status"
            options={projectPhaseStatusOptions}
            components={{ Option: CustomOption }}
            placeholder="Please Select"
          />
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="theme" variant="light">
            Theme
          </Label>

          <Select<selectOptionType, true>
            isMulti
            styles={customStyles}
            name="theme"
            options={themeOptions}
            components={{ Option: CustomOption }}
            placeholder="Please Select"
          />
        </div>

        <div className="flex flex-col gap-[.6rem]">
          <Label htmlFor="sub-theme" variant="light">
            Sub Theme
          </Label>

          <Select<selectOptionType, true>
            isMulti
            styles={customStyles}
            name="sub-theme"
            options={subThemeOptions}
            components={{ Option: CustomOption }}
            placeholder="Please Select"
          />
        </div>

        <div className="col-span-4 flex justify-end gap-[1rem]">
          <Button variant="transparent" className="h-[3.2rem] min-w-[8.8rem]">
            Reset
          </Button>

          <Button className="h-[3.2rem] min-w-[8.8rem]">Search</Button>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
