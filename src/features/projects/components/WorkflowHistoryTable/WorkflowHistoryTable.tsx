import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

type workflowHistoryTableType = {
  projectTransition: string;
  transitionedFrom: string;
  projectWorkflow: string;
  transitionedTo: string;
  projectWorkflowComments: string;
  transitionedBy: string;
};

const data: workflowHistoryTableType[] = [
  {
    projectTransition: "11 Apr 2022 12:04",
    transitionedFrom:
      "Implementation - Pending Project Design Re-planning Approval",
    projectWorkflow: "Approve",
    transitionedTo: "Implementation - In Progress",
    projectWorkflowComments: "",
    transitionedBy: "",
  },
  {
    projectTransition: "11 Apr 2022 07:58",
    transitionedFrom: "Implementation - Pending Re-planning Approval",
    projectWorkflow: "Approve",
    transitionedTo:
      "Implementation - Pending Project Design Re-planning Approval",
    projectWorkflowComments: "",
    transitionedBy: "",
  },
  {
    projectTransition: "09 Apr 2022 12:50",
    transitionedFrom: "Implementation - In Progress",
    projectWorkflow: "Submit for Re-planning Approval",
    transitionedTo: "Implementation - Pending Re-planning Approval",
    projectWorkflowComments: "",
    transitionedBy: "",
  },
  {
    projectTransition: "01 Apr 2022 05:46",
    transitionedFrom: "Set Up - In Progress",
    projectWorkflow: "Move to 'Implementation - In Progress'",
    transitionedTo: "Implementation - In Progress",
    projectWorkflowComments: "",
    transitionedBy: "Catalina Clarino",
  },
  {
    projectTransition: "01 Apr 2022 05:46",
    transitionedFrom: "Design - Pending Project Delivery Approval",
    projectWorkflow: "Approve",
    transitionedTo: "Set Up - In Progress",
    projectWorkflowComments: "",
    transitionedBy: "Catalina Clarino",
  },
  {
    projectTransition: "01 Apr 2022 05:46",
    transitionedFrom: "Design - Pending Approval",
    projectWorkflow: "Approve",
    transitionedTo: "Design - Pending Project Delivery Approval",
    projectWorkflowComments: "",
    transitionedBy: "Catalina Clarino",
  },
  {
    projectTransition: "01 Apr 2022 05:46",
    transitionedFrom: "Design - Funding Secured",
    projectWorkflow: "Submit for Approval",
    transitionedTo: "Design - Pending Approval",
    projectWorkflowComments: "",
    transitionedBy: "Catalina Clarino",
  },
  {
    projectTransition: "01 Apr 2022 05:45",
    transitionedFrom: "Design - In Progress",
    projectWorkflow: "Move to 'Design - Funding Secured'",
    transitionedTo: "Design - Funding Secured",
    projectWorkflowComments: "",
    transitionedBy: "Catalina Clarino",
  },
  {
    projectTransition: "24 Feb 2022 03:51",
    transitionedFrom: "",
    projectWorkflow: "",
    transitionedTo: "Design - In Progress",
    projectWorkflowComments: "",
    transitionedBy: "Catalina Clarino",
  },
];

const workflowHistoryTableColumns: ColumnDef<workflowHistoryTableType>[] = [
  {
    accessorKey: "projectTransition",
    header: "Project Transition Date and Time",
    size: 240, // in pixels
  },
  {
    accessorKey: "transitionedFrom",
    header: "Transitioned From",
  },
  {
    accessorKey: "projectWorkflow",
    header: "Project Workflow Transition Name",
  },
  {
    accessorKey: "transitionedTo",
    header: "Transitioned To",
  },
  {
    accessorKey: "projectWorkflowComments",
    header: "Project Workflow Comments",
  },
  {
    accessorKey: "transitionedBy",
    header: "Transitioned By",
  },
];

const WorkflowHistoryTable = () => {
  const table = useReactTable({
    data,
    columns: workflowHistoryTableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="mb-[1.6rem] flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex size-[3.6rem] cursor-pointer items-center justify-center rounded-[.6rem] !outline-0 hover:bg-gray-100">
            <EllipsisVertical className="size-[2rem]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end">
            <DropdownMenuItem className="cursor-pointer font-medium">
              Print
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer font-medium">
              Export to PDF
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer font-medium">
              Export to Excel file
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer font-medium">
              Export to Word file
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer font-medium">
              Export to CSV file
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
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
                  colSpan={workflowHistoryTableColumns.length}
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WorkflowHistoryTable;
