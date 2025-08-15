import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

type relatedWithTableType = {
  project: string;
  comment: string;
};

const data: relatedWithTableType[] = [
  {
    project: "",
    comment: "",
  },
];

const relatedWithTableColumns: ColumnDef<relatedWithTableType>[] = [
  {
    accessorKey: "project",
    header: "Project",
  },
  {
    accessorKey: "comment",
    header: "Comment",
  },
];

const RelatedWithTable = () => {
  const table = useReactTable({
    data,
    columns: relatedWithTableColumns,
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
        {table.getRowModel().rows.length === 0 ||
        table
          .getRowModel()
          .rows.every((row) =>
            row
              .getVisibleCells()
              .every((cell) => !String(cell.getValue()).trim()),
          ) ? (
          <tr>
            <td
              colSpan={relatedWithTableColumns.length}
              className="px-[1.6rem] py-[1.6rem] text-left text-[1.2rem] text-gray-400 uppercase"
            >
              No data
            </td>
          </tr>
        ) : (
          table.getRowModel().rows.map((row) => (
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
          ))
        )}
      </tbody>
    </table>
  );
};

export default RelatedWithTable;
