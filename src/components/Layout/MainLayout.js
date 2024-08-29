import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Stack } from "@mui/material";
import Header from "components/Header/Header";
import Transition from "components/common/Transition/Transition";
import { useLocation } from "react-router-dom";
import BackdropLoader from "components/common/BackdropLoader/BackdropLoader";
import { useLoading } from "context/hook";
export default function MainLayout({ children }) {
  const location = useLocation();

  const { startLoading, stopLoading } = useLoading();
  React.useEffect(() => {
    startLoading();

    const timer = setTimeout(() => {
      stopLoading();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <BackdropLoader />
      <Header />
      <Box>
        <Box
          id="hero"
          sx={(theme) => ({
            width: "100%",
            backgroundSize: "100% 20%",
            backgroundRepeat: "no-repeat",
          })}
        >
          <Container
            maxWidth="100%"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: { xs: 2, sm: 2 },
              pb: { xs: 8, sm: 8 },
            }}
          >
            <Stack
              spacing={2}
              useFlexGap
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "100%",
                },
              }}
            >
              <Transition key={location.pathname}>{children}</Transition>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
