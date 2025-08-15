import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { NavLink } from "react-router-dom";

type awardsTableType = {
  sof: string;
  sofLink: string;
  awardName: string;
  awardNameLink: string;
  awardStage: string;
  awardStatus: string;
  awardStartDate: string;
  awardEndDate: string;
};

const data: awardsTableType[] = [
  {
    sof: "75202120",
    sofLink: "",
    awardName: "IND_SantaMaria_Education_2021",
    awardNameLink: "",
    awardStage: "Agreement",
    awardStatus: "Closed",
    awardStartDate: "16 Jul 2021",
    awardEndDate: "16 Sep 2022",
  },
];

const awardsTableColumns: ColumnDef<awardsTableType>[] = [
  {
    accessorKey: "sof",
    header: "SOF",
    cell: ({ row }) => {
      const name = row.getValue("sof");
      const sofRoute = row.original.sofLink; // optional if you want to link via code or id
      return (
        <NavLink
          to={sofRoute} // or any route you want
          className="text-blue-600 hover:text-blue-800"
        >
          {name as string}
        </NavLink>
      );
    },
  },
  {
    accessorKey: "awardName",
    header: "Award Name",
    cell: ({ row }) => {
      const name = row.getValue("awardName");
      const awardNameRoute = row.original.awardNameLink; // optional if you want to link via code or id
      return (
        <NavLink
          to={awardNameRoute} // or any route you want
          className="text-blue-600 hover:text-blue-800"
        >
          {name as string}
        </NavLink>
      );
    },
  },
  {
    accessorKey: "awardStage",
    header: "Award Stage",
  },
  {
    accessorKey: "awardStatus",
    header: "Award Status",
  },
  {
    accessorKey: "awardStartDate",
    header: "Award Start Date",
  },
  {
    accessorKey: "awardEndDate",
    header: "Award End Date",
  },
];

const AwardsTable = () => {
  const table = useReactTable({
    data,
    columns: awardsTableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="h-[4.8rem]">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="border-r border-b border-gray-300 px-[1.6rem] text-left text-[1.3rem] font-medium text-[#0000008a]"
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
  );
};

export default AwardsTable;
