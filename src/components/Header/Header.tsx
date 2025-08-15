import {
  AlignJustify,
  Bell,
  CirclePlus,
  Earth,
  FileQuestion,
  LogOut,
  Pencil,
  Search,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import radixLogoBlack from "@/assets/images/radix-logo-black.webp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import avatar from "@/assets/images/avatar.webp";
import { useSidebarStore } from "@/stores/useSidebarStore";

const helpData = [
  { id: 0, link: "", text: "Awards Workspace User Manual" },
  { id: 1, link: "", text: "HR Register Workspace User Manual" },
  { id: 2, link: "", text: "Partner Workspace User Manual" },
  { id: 3, link: "", text: "Project Workspace User Manual" },
  { id: 4, link: "", text: "People and Groups Workspace User Manual" },
  { id: 5, link: "", text: "System Configurations User Manual" },
  { id: 6, link: "", text: "iFrames/Hyperlinks Workspace User Manual" },
  { id: 7, link: "", text: "Analytics User Manual" },
  { id: 8, link: "", text: "MEAL User Manual" },
  { id: 9, link: "", text: "Indicator Tracking Data User Manual" },
  { id: 10, link: "", text: "Indicator User Manual" },
  { id: 11, link: "", text: "Indicator Templates User Manual" },
  { id: 12, link: "", text: "My Actions Workspace User Manual" },
  { id: 13, link: "", text: "Total Reach Workspace User Manual" },
  { id: 14, link: "", text: "Country Information Workspace User Manual" },
  { id: 15, link: "", text: "Legal Entity Workspace User Manual" },
  { id: 16, link: "", text: "Implementing Office Workspace User Manual" },
  { id: 17, link: "", text: "User Group Assignment User Manual" },
  { id: 18, link: "", text: "Notifications User Manual" },
  { id: 19, link: "", text: "About" },
];

const Header = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <header className="shadow-01 flex h-[6.4rem] justify-between bg-white">
      <div className="flex items-center gap-[2rem]">
        <button
          onClick={toggleSidebar}
          className={`inline-flex h-full w-[7.2rem] cursor-pointer items-center justify-center border-r border-[#dddddd] transition-all duration-200 hover:bg-[#0000000a] ${
            isSidebarOpen ? "" : "bg-[#0000000a]"
          }`}
        >
          <AlignJustify />
        </button>

        <NavLink to="/" className="inline-block max-w-[18rem]">
          <img
            src={radixLogoBlack}
            alt="Brand Logo"
            className="size-full object-cover object-center"
          />
        </NavLink>
      </div>

      <ul className="flex">
        <li className="flex items-center px-[1.6rem]">
          <div className="relative">
            <Input
              type="text"
              name="search"
              placeholder="Search"
              className="w-[25rem]"
            />

            <button className="absolute top-1/2 right-[.5rem] inline-flex size-[2.5rem] -translate-y-1/2 cursor-pointer items-center justify-center bg-white">
              <Search className="size-[1.8rem] text-black" />
            </button>
          </div>
        </li>

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CirclePlus className="size-[2.2rem] stroke-[1.5px]" />
              <span>Create New</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Project</DropdownMenuItem>
              <DropdownMenuItem>Action</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <Select>
            <SelectTrigger>
              <div className="flex items-center gap-[.3rem]">
                <Earth className="size-[2.2rem] stroke-[1.5px]" />
                <SelectValue placeholder="English" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="العربية">العربية</SelectItem>
              <SelectItem value="Español">Español</SelectItem>
              <SelectItem value="Français">Français</SelectItem>
              <SelectItem value="Português">Português</SelectItem>
            </SelectContent>
          </Select>
        </li>

        <li>
          <NavLink
            to="/"
            className="inline-flex h-full cursor-pointer items-center justify-center gap-[.3rem] border-l border-[#dddddd] px-[1.6rem] text-[1.4rem] leading-[3.6rem] font-medium outline-0 transition-all duration-200 hover:bg-[#0000000a]"
          >
            <Bell className="size-[2.2rem] stroke-[1.5px]" />
          </NavLink>
        </li>

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FileQuestion className="size-[2.2rem] stroke-[1.5px]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dropdown-menu">
              {helpData.map((item, idx) => (
                <DropdownMenuItem key={idx}>
                  <a title={item.text} href={item.link}>
                    {item.text}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <Popover>
            <PopoverTrigger>
              <div className="size-[4rem] overflow-hidden rounded-full">
                <img
                  src={avatar}
                  alt="Image"
                  className="size-full object-cover object-center"
                />
              </div>
            </PopoverTrigger>

            <PopoverContent>
              <div className="p-[1.6rem]">
                <div className="flex items-center gap-[1rem]">
                  <div className="size-[4rem] overflow-hidden rounded-full">
                    <img
                      src={avatar}
                      alt="Image"
                      className="size-full object-cover"
                    />
                  </div>

                  <div>
                    <h5 className="text-[1.3rem] leading-[2.1rem] font-semibold">
                      John Mayne
                    </h5>

                    <h6 className="text-[1.2rem] leading-[1.9rem]">
                      MEAL Specialist
                    </h6>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="profile">
                <TabsList className="w-full">
                  <TabsTrigger
                    value="profile"
                    className="text-primary border-primary w-full gap-[1rem] rounded-none border-b-[2px] p-[1.6rem] text-[1.4rem] font-medium data-[state=active]:shadow-none"
                  >
                    <User className="size-[1.8rem]" /> <span>Profile</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <ul className="pt-[1rem]">
                    <li>
                      <button className="flex w-full cursor-pointer items-center gap-[1rem] overflow-hidden px-[1.6rem] text-left text-[1.3rem] leading-[3.9rem] text-ellipsis whitespace-nowrap hover:bg-[#0000000a]">
                        <Pencil className="size-[1.6rem]" />
                        <span>Edit Profile</span>
                      </button>
                    </li>
                    <li>
                      <button className="flex w-full cursor-pointer items-center gap-[1rem] overflow-hidden px-[1.6rem] text-left text-[1.3rem] leading-[3.9rem] text-ellipsis whitespace-nowrap hover:bg-[#0000000a]">
                        <User className="size-[1.6rem]" />
                        <span>View Profile</span>
                      </button>
                    </li>
                    <li>
                      <button className="flex w-full cursor-pointer items-center gap-[1rem] overflow-hidden px-[1.6rem] text-left text-[1.3rem] leading-[3.9rem] text-ellipsis whitespace-nowrap hover:bg-[#0000000a]">
                        <LogOut className="size-[1.6rem]" />
                        <span>Logout</span>
                      </button>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    </header>
  );
};

export default Header;
