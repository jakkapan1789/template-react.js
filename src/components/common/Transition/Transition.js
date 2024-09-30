// import { motion } from "framer-motion";
// export default function Transition({ children }) {
//   return (
//     <motion.div
//       initial={{ y: 20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ ease: "easeInOut", duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// }

import { Grid } from "@mui/material";

export default function Transition({ children }) {
  return <Grid data-aos="fade-up">{children}</Grid>;
}
