import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

type settlementTableType = {
  name: string;
  percent: number;
};

const data: settlementTableType[] = [
  {
    name: "Rural",
    percent: 100,
  },
  {
    name: "Camps",
    percent: 0,
  },
  {
    name: "Urban Slum",
    percent: 0,
  },
  {
    name: "Urban Non Slum",
    percent: 0,
  },
];

const settlementTableColumns: ColumnDef<settlementTableType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "percent",
    header: "%",
  },
];

const SettlementTable = () => {
  const table = useReactTable({
    data,
    columns: settlementTableColumns,
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

export default SettlementTable;
