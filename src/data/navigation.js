const navigationConfig = [
  {
    label: "Dashboard",
    path: "/dashboard",
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
          { label: "Create", path: "/development/api" },
          { label: "Delete", path: "/development/ui" },
        ],
      },
    ],
  },
  {
    label: "Inventory Control",
    path: "/document",
  },
];

export default navigationConfig;
