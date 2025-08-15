import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify, EllipsisVertical, Info } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { detailsHeaderData } from "../../constant";

// Props only for reusable parts
type InfoItem = {
  label: string;
  value: string;
};

type DetailsHeaderProps = {
  title: string;
  infoItems?: InfoItem[];
  secondaryDropdownItems?: { label: string; link: string }[];
};

const DetailsHeader = ({
  title,
  infoItems = [],
  secondaryDropdownItems = [],
}: DetailsHeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOverviewPage = location.pathname === "/projects/project-overview";

  return (
    <div className="sticky top-0 left-0 z-[10] flex items-center justify-between border-b border-[#dddddd] bg-white p-[1.6rem]">
      {/* Left Section: Static Dropdown + Title + Info Icon */}
      <div className="flex items-center gap-[1rem]">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex size-[3.6rem] cursor-pointer items-center justify-center rounded-[.6rem] border border-black !outline-0">
            <AlignJustify className="size-[2rem]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start">
            {detailsHeaderData.map((item, idx) => (
              <DropdownMenuItem asChild key={idx}>
                <NavLink
                  to={item.link}
                  className="flex cursor-pointer items-center gap-[1rem] text-[1.4rem] font-medium"
                >
                  <item.icon className={`size-[2rem] ${item.iconColor}`} />
                  <span>{item.label}</span>
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex min-w-[8rem] flex-col gap-[.6rem]">
          <div className="flex items-center gap-[1rem]">
            <h3
              title={title}
              className="text-[1.8rem] leading-[1.9rem] font-medium text-black"
            >
              {title}
            </h3>

            {infoItems.length > 0 && (
              <Tooltip>
                <TooltipTrigger>
                  <Info className="size-[1.6rem]" />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <ul className="flex flex-col gap-[.6rem] p-[1.6rem] text-[1.6rem]">
                    {infoItems.map((item, index) => (
                      <li key={index}>
                        <span className="text-[1.2rem] text-gray-600">
                          {item.label}
                        </span>{" "}
                        {item.value}
                      </li>
                    ))}
                  </ul>
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          <h6 className="text-[1.2rem] leading-[1.2rem] font-medium text-[#747474] capitalize">
            Project Phase - Status:{" "}
            <span className="text-black">Implementation - In Progress</span>
          </h6>
        </div>
      </div>

      {/* Right Section: Conditional Close + Secondary Dropdown */}
      <div className="flex h-[3.2rem] gap-[.8rem]">
        {isOverviewPage && (
          <Button
            onClick={() => navigate("/projects")}
            variant="transparent"
            className="min-w-[8.8rem]"
          >
            Close
          </Button>
        )}

        {secondaryDropdownItems.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex size-[3.6rem] cursor-pointer items-center justify-center rounded-[.6rem] !outline-0 hover:bg-gray-100">
              <EllipsisVertical className="size-[2rem]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end">
              {secondaryDropdownItems.map((item, idx) => (
                <DropdownMenuItem asChild key={idx}>
                  <NavLink to={item.link}>{item.label}</NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default DetailsHeader;
