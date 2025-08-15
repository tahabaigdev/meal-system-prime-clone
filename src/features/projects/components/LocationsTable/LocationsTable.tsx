import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

type locationsTableType = {
  region: string;
  country: string;
  subDivision1: string;
  subDivision2: string;
  subDivision3: string;
};

const data: locationsTableType[] = [
  {
    region: "Asia",
    country: "India",
    subDivision1: "Andhra Pradesh",
    subDivision2: "Guntur",
    subDivision3: "",
  },
];

const locationsTableColumns: ColumnDef<locationsTableType>[] = [
  {
    accessorKey: "region",
    header: "Region",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "subDivision1",
    header: "Sub-Division 1",
  },
  {
    accessorKey: "subDivision2",
    header: "Sub-Division 2",
  },
  {
    accessorKey: "subDivision3",
    header: "Sub-Division 3",
  },
];

const LocationsTable = () => {
  const table = useReactTable({
    data,
    columns: locationsTableColumns,
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

export default LocationsTable;
