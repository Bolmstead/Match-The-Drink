import React, { useState, useEffect } from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const PopupNumber = ({
  number,
  displayDuration = 2000,
  fadeDuration = 1000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const emojiObject = {
    0: "💩",
    1: "🙂",
    2: "🔥",
    3: "🤯",
  };

  useEffect(() => {
    // Start fade out just before the end of display duration
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, displayDuration - fadeDuration);

    // Hide the element after the fade out duration
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, displayDuration);

    // Cleanup the timeouts on component unmount
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, [displayDuration, fadeDuration]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transition: `opacity ${fadeDuration}ms ease-in-out`,
        opacity: opacity,
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          fontSize: "9rem",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        {number}{" "}
        {number === 0 ? (
          <div sx={{ marginLeft: "5px" }}>❌</div>
        ) : (
          <CheckCircleOutlinedIcon
            fontSize="large"
            sx={{ color: "#4BB543", fontSize: "9rem", marginLeft: "5px" }}
          />
        )}
      </div>
    </div>
  );
};

export default PopupNumber;
