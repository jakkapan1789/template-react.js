// const navigationConfig = [
//   { label: "Dashboard", path: "dashboard" },
//   { label: "Component", path: "component" },
//   { label: "Document", path: "document" },
// ];

// export default navigationConfig;

const navigationConfig = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Settings",
    submenu: [
      { label: "Profile", path: "/settings/profile" },
      { label: "Account", path: "/settings/account" },
    ],
  },
  // other menu items
];

export default navigationConfig;
