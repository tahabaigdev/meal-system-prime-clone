type RowData = {
  id: string;
  type: "Goal" | "Objective" | "Output" | "Activity";
  title: string;
  lopAchievement?: number;
  actual?: number;
  target?: number;
  growth?: number;
  subRows?: RowData[];
};

export const data: RowData[] = [
  {
    id: "1",
    type: "Goal",
    title: "Girls and boys (6-14yrs) ...",
    subRows: [
      {
        id: "1.1",
        type: "Objective",
        title: "To ensure all children ...",
        subRows: [
          {
            id: "1.1.1",
            type: "Output",
            title: "Onsite/distance learning promoted for 1448 boys and girls.",
            subRows: [
              {
                id: "1.1.1.1",
                type: "Activity",
                title: "PM21A - Organise Virtual/Physical consultations ...",
              },
              {
                id: "1.1.1.2",
                type: "Activity",
                title: "SV09A - Promote onsite and distance learning ...",
              },
            ],
          },
        ],
      },
    ],
  },
];
