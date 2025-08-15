import type { ElementType } from "react";

export type projectsDataTableType = {
  projectCode: string;
  projectName: string;
  projectNameLink: string;
  projectDesignStartDate: string;
  projectEndDate: string;
  updatedOn: string;
  updatedBy: string;
};

export type detailsHeaderDataType = {
  link: string;
  label: string;
  iconColor: string;
  icon: ElementType;
};

export type detailsCardDataType = {
  title: string;
  link: string;
  lastModified: string;
  author: string;
  bgColor: string;
  icon: ElementType;
};

export type checkoutStepsType = {
  name: string;
};

export type projectRolesTableType = {
  assignee: string;
  emailAddress: string;
  assignmentName: string;
  location: string;
};
