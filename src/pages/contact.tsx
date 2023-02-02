import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 10) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  };

  return (
    <header
      style={{
        background: isTransparent ? "transparent" : "black",
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "1rem 2rem",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <nav>
        <a style={{ marginRight: "1rem" }}>Home</a>
        <a style={{ marginRight: "1rem" }}>About</a>
        <a style={{ marginRight: "1rem" }}>Contact</a>
        <a
          style={{
            marginRight: "1rem",
            transition: "color 0.3s ease-in-out",
            fontFamily: "sans-serif",
            color: "#fff",
            textShadow: "0 2px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          Social
        </a>
      </nav>
    </header>
  );
};

export default Contact;
