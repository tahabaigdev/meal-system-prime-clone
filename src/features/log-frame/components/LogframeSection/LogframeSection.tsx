import type { selectOptionType } from "@/types/global";
import { EllipsisVertical, Search, Waypoints, Workflow } from "lucide-react";
import Select, {
  components,
  type OptionProps,
  type StylesConfig,
} from "react-select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import LogframeTreeTable from "../LogframeTreeTable/LogframeTreeTable";

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

const logframeTableOptions: selectOptionType[] = [
  {
    value: "2021",
    label: "2021",
  },
];

const LogframeSection = () => {
  const [showColumns, setShowColumns] = useState(true);
  const [showIndicators, setShowIndicators] = useState(true);

  return (
    <div className="flex flex-col gap-[1.6rem] p-[1.6rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[1rem]">
          <Search className="size-[1.6rem]" />

          <div className="w-[25rem]">
            <Select<selectOptionType, true>
              isMulti
              styles={customStyles}
              name="logframe-table"
              options={logframeTableOptions}
              components={{ Option: CustomOption }}
              placeholder="Overall"
            />
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex size-[3.6rem] cursor-pointer items-center justify-center rounded-[.6rem] !outline-0 hover:bg-gray-100">
            <EllipsisVertical className="size-[2rem]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="w-[30rem]">
            <DropdownMenuLabel className="px-[1.6rem] py-[1.1rem] text-[1.4rem] font-semibold">
              View Options
            </DropdownMenuLabel>

            <DropdownMenuItem className="!bg-transparent px-0">
              <RadioGroup defaultValue="hierarchy" className="w-full">
                <div className="flex items-center justify-between gap-[1rem] px-[1.6rem] hover:bg-[#0000000a]">
                  <div className="flex items-center gap-[1rem]">
                    <Waypoints strokeWidth={1.5} className="size-[1.8rem]" />

                    <Label
                      htmlFor="hierarchy"
                      className="text-[1.3rem] leading-[3.9rem]"
                    >
                      Hierarchy
                    </Label>
                  </div>
                  <RadioGroupItem value="hierarchy" id="hierarchy" />
                </div>

                <div className="flex items-center justify-between gap-[1rem] px-[1.6rem] hover:bg-[#0000000a]">
                  <div className="flex items-center gap-[1rem]">
                    <Workflow strokeWidth={1.5} className="size-[1.8rem]" />

                    <Label
                      htmlFor="diagram"
                      className="text-[1.3rem] leading-[3.9rem]"
                    >
                      Diagram
                    </Label>
                  </div>
                  <RadioGroupItem value="diagram" id="diagram" />
                </div>
              </RadioGroup>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="m-0 bg-[#dddddd]" />

            <DropdownMenuLabel className="px-[1.6rem] py-[1.1rem] text-[1.4rem] font-semibold">
              Configurations
            </DropdownMenuLabel>

            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="justify-between"
            >
              <Label
                htmlFor="show-columns"
                className="text-[1.3rem] leading-[3.9rem]"
              >
                Show Columns
              </Label>

              <Switch checked={showColumns} onCheckedChange={setShowColumns} />
            </DropdownMenuItem>

            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="justify-between"
            >
              <Label
                htmlFor="show-columns"
                className="text-[1.3rem] leading-[3.9rem]"
              >
                Show Indicators
              </Label>

              <Switch
                checked={showIndicators}
                onCheckedChange={setShowIndicators}
              />
            </DropdownMenuItem>

            <DropdownMenuSeparator className="m-0 bg-[#dddddd]" />

            <DropdownMenuLabel className="px-[1.6rem] py-[1.1rem] text-[1.4rem] font-semibold">
              Quick Actions
            </DropdownMenuLabel>

            <DropdownMenuItem className="font-medium">
              Collapse all
            </DropdownMenuItem>

            <DropdownMenuItem className="font-medium">
              Expand all
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <LogframeTreeTable />
    </div>
  );
};

export default LogframeSection;
