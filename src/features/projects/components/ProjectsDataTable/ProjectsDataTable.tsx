import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import type { projectsDataTableType } from "../../types";
import { projectsDataTable } from "../../constant";
import { NavLink } from "react-router-dom";

const columns: ColumnDef<projectsDataTableType>[] = [
  {
    accessorKey: "projectCode",
    header: "Project Code",
  },
  {
    accessorKey: "projectName",
    header: "Project Name",
    cell: ({ row }) => {
      const name = row.getValue("projectName");
      const projectNameRoute = row.original.projectNameLink; // optional if you want to link via code or id
      return (
        <NavLink
          to={projectNameRoute} // or any route you want
          className="text-blue-600 hover:text-blue-800"
        >
          {name as string}
        </NavLink>
      );
    },
  },
  {
    accessorKey: "projectDesignStartDate",
    header: "Project Design Start Date",
  },
  {
    accessorKey: "projectEndDate",
    header: "Project End Date",
  },
  {
    accessorKey: "updatedOn",
    header: "Updated On",
  },
  {
    accessorKey: "updatedBy",
    header: "Updated By",
  },
];

const ProjectsDataTable = () => {
  const table = useReactTable({
    data: projectsDataTable, // <--- use the external array here
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="h-[4.8rem]">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b border-gray-300 px-[1.6rem] text-left text-[1.3rem] font-medium text-[#0000008a]"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-[4.8rem] hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-b border-gray-200 px-[1.6rem] text-[1.3rem] font-medium"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsDataTable;
