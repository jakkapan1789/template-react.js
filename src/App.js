import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header";
import React from "react";
import getLPTheme from "./data/getLPTheme";
import { RouterProvider } from "react-router-dom";
import router from "./route";
import { DocumentProvider, LoadingProvider } from "context/providers";
function App() {
  React.useEffect(() => {
    Aos.init({ duration: 800, once: true }); // Adjust the duration and options if needed
  }, []);

  const [mode, setMode] = React.useState("light");
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={LPtheme}>
      <LoadingProvider>
        <DocumentProvider>
          <RouterProvider router={router} />
        </DocumentProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
