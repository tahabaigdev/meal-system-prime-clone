import { workspacesNavData } from "@/constants";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, isSidebarHovered } = useSidebarStore();

  // Compute final state for sidebar width
  const expanded = isSidebarOpen || isSidebarHovered;

  return (
    <aside>
      <div className="flex flex-col">
        <h4 className="relative flex h-[5rem] w-full items-center px-[2rem] text-[1.3rem] leading-[2.4rem] text-black uppercase">
          <span
            className={`w-[16.2rem] overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-200 ${
              expanded
                ? "pointer-events-auto visible opacity-[1]"
                : "pointer-events-none invisible opacity-[0]"
            }`}
          >
            Workspaces
          </span>

          <span
            className={`absolute top-1/2 left-[2.6rem] block h-[2px] w-[2rem] -translate-y-1/2 bg-black transition-all duration-200 ${
              expanded
                ? "pointer-events-none invisible opacity-[0]"
                : "pointer-events-auto visible opacity-[1]"
            }`}
          ></span>
        </h4>

        <ul>
          {workspacesNavData.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.href}
                title={item.title}
                className={({ isActive }) =>
                  `${
                    expanded ? "px-[2rem]" : "px-[2.5rem]"
                  } flex h-[4.8rem] cursor-pointer items-center justify-between rounded-none border-none shadow-none transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-black hover:bg-[#EEEFF0]"
                  }`
                }
              >
                <div className="flex items-center gap-[1.2rem] transition-all duration-200">
                  <item.icon size={22} strokeWidth={1.5} />

                  <span
                    className={`${
                      expanded
                        ? "pointer-events-auto visible opacity-[1]"
                        : "pointer-events-none invisible opacity-[0]"
                    } inline-block w-[13rem] overflow-hidden text-left text-[1.3rem] leading-[4.8rem] font-normal text-ellipsis whitespace-nowrap transition-all duration-200`}
                  >
                    {item.title}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
