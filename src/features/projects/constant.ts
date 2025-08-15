import {
  BookOpen,
  ClipboardList,
  Eye,
  FileSpreadsheet,
  FileText,
  Info,
  LayoutGrid,
  ShoppingCart,
  Target,
  User,
  UserCheck,
  Users,
} from "lucide-react";
import type {
  checkoutStepsType,
  detailsCardDataType,
  detailsHeaderDataType,
  projectRolesTableType,
  projectsDataTableType,
} from "./types";
import type { selectOptionType } from "@/types/global";

export const humanitarianResponseOptions: selectOptionType[] = [
  {
    value: "AFG-CX-19",
    label: "AFG-CX-19/Afghanistan - Countrywide Response 2019",
  },
  {
    value: "AFG-CX1-23",
    label: "AFG-CX1-23/Afghanistan - Displacement Response 2023",
  },
  {
    value: "AFG-FL1-24",
    label: "AFG-FL1-24/Afghanistan - Floods 2024",
  },
  {
    value: "ALB-EQ-19",
    label: "ALB-EQ-19/Albania - Earthquake 2019",
  },
];

export const implementingOfficeOptions: selectOptionType[] = [
  {
    value: "004",
    label: "004/Afghanistan",
  },
  {
    value: "009",
    label: "009/Albania National Office",
  },
  {
    value: "901",
    label: "901/Asia Regional Office",
  },
  {
    value: "050",
    label: "050/Bangladesh",
  },
];

export const scFundingOfficeOptions: selectOptionType[] = [
  {
    value: "036",
    label: "036/Austrlia",
  },
  {
    value: "124",
    label: "124/Canada",
  },
  {
    value: "208",
    label: "208/Denmark",
  },
  {
    value: "246",
    label: "246/Finland",
  },
];

export const projectAwardsOptions: selectOptionType[] = [
  {
    value: "03602891",
    label: "03602891 IRQ ECW MYRP Grantee",
  },
  {
    value: "03603033",
    label: "03603033 IND NAB Strengthening Covid-19 Treatment Facilities",
  },
  {
    value: "03603370",
    label: "03603370 VNM ANCP Bridging the Digital Divide 2022-23",
  },
  {
    value: "03603563",
    label: "03603563 VNM QBE Green School for All 2022",
  },
];

export const assigneeOptions: selectOptionType[] = [
  {
    value: "kantamat-palawat",
    label:
      "Kantamat Palawat: mix.palawat@savethechildren.org , REACT Project Officer",
  },
  {
    value: "watchara-intrasombat",
    label:
      "Watchara Intrasombat: win.intrasombat@savethechildren.org , REACT Project Officer",
  },
  {
    value: "sof-akbar",
    label:
      "Sof Akbar: sof.akbar@savethechildren.org , REACT Project Coordinator",
  },
  {
    value: "fadli-akbar",
    label:
      "Fadli Akbar: Fadly.Akbar@savethechildren.org , Fundraising Team Leader",
  },
];

export const activeInactiveProjectsOptions: selectOptionType[] = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
];

export const projectPhaseStatusOptions: selectOptionType[] = [
  {
    value: "design-abandoned",
    label: "Design - Abandoned",
  },
  {
    value: "design-closed",
    label: "Design - Closed",
  },
  {
    value: "implementation-closed",
    label: "Implementation - Closed",
  },
  {
    value: "end-of-project-transition-closed",
    label: "End of Project Transition - Closed",
  },
];

export const themeOptions: selectOptionType[] = [
  {
    value: "child-poverty",
    label: "Child Poverty",
  },
  {
    value: "child-protection",
    label: "Child Protection",
  },
  {
    value: "child-rights-governance",
    label: "Child Rights Governance (CRG)",
  },
  {
    value: "education",
    label: "Education",
  },
];

export const subThemeOptions: selectOptionType[] = [
  {
    value: "adolescent-skills",
    label: "Adolescent Skills for Successful Transitions (ASST)",
  },
  {
    value: "appropriate-care",
    label: "Appropriate Care",
  },
  {
    value: "basic-education",
    label: "Basic Education",
  },
  {
    value: "child-poverty",
    label: "Child Poverty Outside Strategic Sub-Themes (other)",
  },
];

export const projectsDataTable: projectsDataTableType[] = [
  {
    projectCode: "2081001",
    projectName: "DNK - Coronarespons - 2020",
    projectNameLink: "/projects/project-overview",
    projectDesignStartDate: "17 Mar 2020",
    projectEndDate: "31 Dec 2022",
    updatedOn: "01 Feb 2022 13:12",
    updatedBy: "Synergy NoPG",
  },
  {
    projectCode: "2081002",
    projectName:
      "ESA_RPU- Strengthening the Realisation of Rights of Children on the move in East and Southern Africa_Phase III(2022-2024)-2021",
    projectNameLink: "/projects/project-overview",
    projectDesignStartDate: "01 Jan 2019",
    projectEndDate: "30 Jun 2022",
    updatedOn: "01 Feb 2022 13:12",
    updatedBy: "Synergy NoPG",
  },
  {
    projectCode: "2081002",
    projectName:
      "ESA_RPU- Strengthening the Realisation of Rights of Children on the move in East and Southern Africa_Phase III(2022-2024)-2021",
    projectNameLink: "/projects/project-overview",
    projectDesignStartDate: "01 Jan 2019",
    projectEndDate: "30 Jun 2022",
    updatedOn: "01 Feb 2022 13:12",
    updatedBy: "Synergy NoPG",
  },
  {
    projectCode: "2081002",
    projectName:
      "ESA_RPU- Strengthening the Realisation of Rights of Children on the move in East and Southern Africa_Phase III(2022-2024)-2021",
    projectNameLink: "/projects/project-overview",
    projectDesignStartDate: "01 Jan 2019",
    projectEndDate: "30 Jun 2022",
    updatedOn: "01 Feb 2022 13:12",
    updatedBy: "Synergy NoPG",
  },
  {
    projectCode: "2081002",
    projectName:
      "ESA_RPU- Strengthening the Realisation of Rights of Children on the move in East and Southern Africa_Phase III(2022-2024)-2021",
    projectNameLink: "",
    projectDesignStartDate: "01 Jan 2019",
    projectEndDate: "30 Jun 2022",
    updatedOn: "01 Feb 2022 13:12",
    updatedBy: "Synergy NoPG",
  },
];

export const detailsHeaderData: detailsHeaderDataType[] = [
  {
    link: "/projects/project-overview",
    label: "Project Overview",
    iconColor: "text-sky-500",
    icon: LayoutGrid,
  },
  {
    link: "/projects/project-information",
    label: "Project Information",
    iconColor: "text-orange-500",
    icon: Info,
  },
  {
    link: "/projects/log-frame",
    label: "Log Frame",
    iconColor: "text-pink-500",
    icon: ClipboardList,
  },
  {
    link: "/projects/project-overview",
    label: "DIP",
    iconColor: "text-green-500",
    icon: FileText,
  },
  {
    link: "/projects/project-overview",
    label: "HR Management",
    iconColor: "text-orange-600",
    icon: UserCheck,
  },
  {
    link: "/projects/project-overview",
    label: "Strategic Goal Link",
    iconColor: "text-blue-600",
    icon: Target,
  },
  {
    link: "/projects/project-overview",
    label: "MEAL Plan",
    iconColor: "text-gray-500",
    icon: BookOpen,
  },
  {
    link: "/projects/project-overview",
    label: "Action Management",
    iconColor: "text-voilet-500",
    icon: Users,
  },
  {
    link: "/projects/project-overview",
    label: "Partners",
    iconColor: "text-sky-500",
    icon: Eye,
  },
  {
    link: "/projects/project-overview",
    label: "Project Budget Holders",
    iconColor: "text-green-500",
    icon: FileSpreadsheet,
  },
  {
    link: "/projects/project-overview",
    label: "People and Groups",
    iconColor: "text-sky-500",
    icon: User,
  },
  {
    link: "/projects/project-overview",
    label: "Procurement Plan",
    iconColor: "text-orange-600",
    icon: ShoppingCart,
  },
];

export const detailsCardData: detailsCardDataType[] = [
  {
    title: "Project Information",
    link: "/projects/project-information",
    lastModified: "11 Jan 2022, 07:48",
    author: "Emanuele Militello",
    bgColor: "bg-sky-500",
    icon: Info,
  },
  {
    title: "Log Frame",
    link: "/projects/log-frame",
    lastModified: "12 Oct 2021, 18:00",
    author: "Emanuele Militello",
    bgColor: "bg-orange-500",
    icon: ClipboardList,
  },
  {
    title: "DIP",
    link: "/projects/project-overview",
    lastModified: "26 Sep 2021, 17:18",
    author: "Emanuele Militello",
    bgColor: "bg-pink-500",
    icon: FileText,
  },
  {
    title: "HR Management",
    link: "/projects/project-overview",
    lastModified: "14 Dec 2021, 11:17",
    author: "Emanuele Militello",
    bgColor: "bg-green-500",
    icon: UserCheck,
  },
  {
    title: "Strategic Goal Link",
    link: "/projects/project-overview",
    lastModified: "25 Sep 2021, 05:34",
    author: "Emanuele Militello",
    bgColor: "bg-orange-600",
    icon: Target,
  },
  {
    title: "MEAL Plan",
    link: "/projects/project-overview",
    lastModified: "14 Dec 2021, 11:31",
    author: "Emanuele Militello",
    bgColor: "bg-blue-600",
    icon: BookOpen,
  },
  {
    title: "Action Management",
    link: "/projects/project-overview",
    lastModified: "14 Dec 2021, 11:35",
    author: "Emanuele Militello",
    bgColor: "bg-gray-500",
    icon: Users,
  },
  {
    title: "Partners",
    link: "/projects/project-overview",
    lastModified: "28 Sep 2021, 08:54",
    author: "Emanuele Militello",
    bgColor: "bg-gray-900",
    icon: Eye,
  },
  {
    title: "Project Budget Holders",
    link: "/projects/project-overview",
    lastModified: "13 Dec 2021, 12:00",
    author: "Integration Account",
    bgColor: "bg-gray-700",
    icon: FileSpreadsheet,
  },
  {
    title: "People and Groups",
    link: "/projects/project-overview",
    lastModified: "28 Sep 2021, 08:54",
    author: "Emanuele Militello",
    bgColor: "bg-sky-500",
    icon: User,
  },
  {
    title: "Procurement Plan",
    link: "/projects/project-overview",
    lastModified: "13 Dec 2021, 12:00",
    author: "Integration Account",
    bgColor: "bg-orange-600",
    icon: ShoppingCart,
  },
];

export const checkoutSteps: checkoutStepsType[] = [
  {
    name: "Design in Progress",
  },
  {
    name: "Design - Funding Secured",
  },
  {
    name: "Design - Pending Approval",
  },
  {
    name: "Design - Pending Operational Approval",
  },
  {
    name: "Setup - In Progress ",
  },
  {
    name: "Set Up - Pending Re-planning Approval",
  },
  {
    name: "Set Up - Pending Operational Re-planning",
  },
  {
    name: "Set Up - In Progress",
  },
];

export const projectRolesAccordionData: {
  id: string;
  title: string;
  tooltip: string[];
  tableData: projectRolesTableType[];
}[] = [
  {
    id: "item-1",
    title: "Award Management Representative(s)",
    tooltip: [
      "Permissions: Full view access to the project record with the exception of People & Groups data.",
      "Assignee(s): Member(s) of the awards team, who are not members of the project team but are working closely with the project in an advisory capacity representing their function.",
      "Number of Assignees: Multiple as required.",
      "Assigning the role: Project Record Manager enters the staff member's name using Add Assignee.",
    ],
    tableData: [
      {
        assignee: "",
        emailAddress: "",
        assignmentName: "",
        location: "",
      },
    ],
  },
  {
    id: "item-2",
    title: "Finance Representative(s)",
    tooltip: [
      "Permissions: Full view access to the project record with the exception of People & Groups data.",
      "Assignee(s): Member(s) of the finance team, who are not members of the project team but are working closely with the project in an advisory capacity representing their function.",
      "Number of Assignees: Multiple as required.",
      "Assigning the role: Project Record Manager enters the staff member's name using Add Assignee.",
    ],
    tableData: [
      {
        assignee: "[Inactive] Prosenjit Roy",
        emailAddress: "r.prosenjit@balrakshabharat.org",
        assignmentName: "Manager - Monitoring & Evaluation",
        location: "SC IND - South - Odisha",
      },
    ],
  },
  {
    id: "item-3",
    title: "HR Representative",
    tooltip: [
      "Permissions: Full view access to the project record with the exception of People & Groups data.",
      "Assignee(s): Member(s) of the finance team, who are not members of the project team but are working closely with the project in an advisory capacity representing their function.",
      "Number of Assignees: Multiple as required.",
      "Assigning the role: Project Record Manager enters the staff member's name using Add Assignee.",
    ],
    tableData: [
      {
        assignee: "",
        emailAddress: "",
        assignmentName: "",
        location: "",
      },
    ],
  },
  {
    id: "item-4",
    title: "MEAL Edit Access",
    tooltip: [
      "Permissions: Full view access to the project record with the exception of People & Groups data.",
      "Assignee(s): Member(s) of the finance team, who are not members of the project team but are working closely with the project in an advisory capacity representing their function.",
      "Number of Assignees: Multiple as required.",
      "Assigning the role: Project Record Manager enters the staff member's name using Add Assignee.",
    ],
    tableData: [
      {
        assignee: "[Inactive] Prosenjit Roy",
        emailAddress: "r.prosenjit@balrakshabharat.org",
        assignmentName: "Manager - Monitoring & Evaluation",
        location: "SC IND - South - Odisha",
      },
    ],
  },
  {
    id: "item-5",
    title: "Other Functional Representative(s)",
    tooltip: [
      "Permissions: Full view access to the project record with the exception of People & Groups data.",
      "Assignee(s): Member(s) of the finance team, who are not members of the project team but are working closely with the project in an advisory capacity representing their function.",
      "Number of Assignees: Multiple as required.",
      "Assigning the role: Project Record Manager enters the staff member's name using Add Assignee.",
    ],
    tableData: [
      {
        assignee: "",
        emailAddress: "",
        assignmentName: "",
        location: "",
      },
    ],
  },
];
