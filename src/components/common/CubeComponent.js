// CubeComponent.jsx
import React, { useState } from "react";
import { Box, styled } from "@mui/material";

const transitionTime = "750ms";

const CubeContainer = styled(Box)({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
});

const Cube = styled(Box)(({ theme }) => ({
  height: "160px",
  width: "160px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: `transform ${transitionTime}`,
  "&.open .cube-side": {
    opacity: 0.1,
  },
  "&.open .cube-top": {
    transform: "translateY(-3rem)",
  },
  "&.open .cube-left": {
    transform: "translateX(-3rem)",
  },
  "&.open .cube-right": {
    transform: "translateX(3rem)",
  },
  "&.open .powerup": {
    opacity: 1,
    zIndex: 10,
    height: "80px",
    width: "80px",
  },
}));

const CubeSide = styled(Box)(({ image }) => ({
  height: "100%",
  width: "100%",
  position: "absolute",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: `all ${transitionTime}`,
}));

const Powerup = styled(Box)({
  backgroundSize: "cover",
  borderRadius: "50%",
  zIndex: 100,
  overflow: "hidden",
  height: "48px",
  width: "48px",
  position: "absolute",
  opacity: 0,
  transition: `all ${transitionTime}`,
});

const Hexagon = styled(Box)(({ theme }) => ({
  zIndex: -2,
  position: "relative",
  width: "160px",
  height: "92.38px",
  backgroundColor: "var(--glow)",
  margin: "46.19px 0",
  filter: "blur(20px)",
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    width: 0,
    borderLeft: "80px solid transparent",
    borderRight: "80px solid transparent",
  },
  "&:before": {
    bottom: "100%",
    borderBottom: "46.19px solid var(--glow)",
  },
  "&:after": {
    top: "100%",
    borderTop: "46.19px solid var(--glow)",
  },
}));

const CubeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [glow, setGlow] = useState("rgba(255,195,26,0.4)");
  const [powerupImage, setPowerupImage] = useState("");
  const [counter, setCounter] = useState(0);

  const openCube = () => {
    if (!isOpen) {
      award();
      setIsOpen(true);
    } else {
      resetCube();
      setIsOpen(false);
    }
  };

  const resetCube = () => {
    setGlow("rgba(255,195,26,0.4)");
  };

  const award = () => {
    if (counter % 2 === 0) {
      setPowerupImage(
        "https://cf.quizizz.com/game/img/powerups/lg/power-play.png"
      );
      setGlow("rgba(69,185,251,0.33)");
    } else {
      setPowerupImage("https://cf.quizizz.com/game/img/powerups/lg/glitch.png");
      setGlow("rgba(246,6,120,0.4)");
    }
    setCounter(counter + 1);
  };

  return (
    <CubeContainer>
      <Cube className={isOpen ? "open" : ""} onClick={openCube}>
        <Hexagon style={{ "--glow": glow }} />
        <CubeSide
          className="cube-side cube-back"
          image="https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxBackground_2x_b2espr.png"
        />
        <CubeSide
          className="cube-side cube-top"
          image="https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxTopFlap_2x_f9cb8g.png"
        />
        <CubeSide
          className="cube-side cube-left"
          image="https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxLeftFlap_2x_y8u4gz.png"
        />
        <CubeSide
          className="cube-side cube-right"
          image="https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxRightFlap_2x_abexhh.png"
        />
        <Powerup
          className="powerup"
          style={{ backgroundImage: `url(${powerupImage})` }}
        />
      </Cube>
    </CubeContainer>
  );
};

export default CubeComponent;
