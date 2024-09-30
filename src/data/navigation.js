const navigationConfig = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Yield Advance",
    path: "/dashboard",
    submenu: [
      { label: "First Pass Yield (FPY)", path: "/development/api" },
      { label: "Final Yield", path: "/development/ui" },
      { label: "Defect Rate", path: "/development/ui" },
      { label: "Retest Rate", path: "/development/ui" },
      { label: "Cycle Time", path: "/development/ui" },
      { label: "Scrap Rate", path: "/development/ui" },
    ],
  },

  {
    label: "Inventory Control",
    submenu: [
      {
        label: "Storage",
        path: "/component",
      },
      {
        label: "Finish Good",
        submenu: [
          { label: "Create", path: "/document/create" },
          { label: "Delete", path: "/development/ui" },
        ],
      },
      {
        label: "Finish ฺBad",
        submenu: [
          { label: "Test", path: "/development/api" },
          { label: "X", path: "/development/ui" },
        ],
      },
    ],
  },
  {
    label: "Inventory Control",
    // path: "/document",
    submenu: [
      {
        label: "Inventory List",
        path: "/document",
      },
      {
        label: "Inventory Create",
        path: "/document/create",
      },
    ],
  },
];

export default navigationConfig;
