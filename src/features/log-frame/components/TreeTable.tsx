import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

type splitTableType = {
  theme: string;
  subTheme: string;
  percent: number;
};

const data: splitTableType[] = [
  {
    theme: "Education",
    subTheme: "Basic Education",
    percent: 25.0,
  },
  {
    theme: "Child Poverty",
    subTheme: "Child Sensitive Social Protection (CSSP)",
    percent: 25.0,
  },
  {
    theme: "Child Protection",
    subTheme: "Protection of Children from Harmful Work",
    percent: 50.0,
  },
];

const splitTableColumns: ColumnDef<splitTableType>[] = [
  {
    accessorKey: "resultsIndicators",
    header: "Results / Indicators",
  },
  {
    accessorKey: "lopAchievement",
    header: "LOP Achievement (%)",
  },
  {
    accessorKey: "actual",
    header: "Actual",
  },
  {
    accessorKey: "actual",
    header: "Target",
  },
  {
    accessorKey: "actual",
    header: "Growth in %",
  },
];

const SplitTable = () => {
  const table = useReactTable({
    data,
    columns: splitTableColumns,
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

export default SplitTable;
