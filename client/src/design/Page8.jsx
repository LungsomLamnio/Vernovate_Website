import React, { useState } from "react";

const techItems = [
  {
    name: "TensorFlow",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  },
  {
    name: "OpenCV",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.Js",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "CloudAPIs",
    img: "https://cdn-icons-png.flaticon.com/512/1006/1006360.png",
  },
];

const Page8 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container text-center">
        {/* Title */}
        <div className="position-relative d-inline-block mb-2 pb-3">
          <h2 className="fw-bold mb-0">OUR TECHNOLOGY</h2>
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "28%", // slightly smaller underline
              height: "3px",
              backgroundColor: "#e6b800", // original yellow
              borderRadius: "2px",
            }}
          ></span>
        </div>

        <p className="mb-4" style={{ fontSize: "1rem" }}>
          Integration AI, Computer Vision, and Real-time Data
        </p>

        {/* Top Row - 3 cards */}
        <div
          className="row justify-content-center"
          style={{ rowGap: "15px", columnGap: "15px" }}
        >
          {techItems.slice(0, 3).map((tech, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 auto",
                width: "190px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "white",
                  textAlign: "center",
                  width: "100%",
                  boxShadow:
                    hoverIndex === index
                      ? "0 8px 20px rgba(0,0,0,0.15)"
                      : "0 2px 6px rgba(0,0,0,0.1)",
                  transform:
                    hoverIndex === index ? "translateY(-6px)" : "translateY(0)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  style={{
                    maxHeight: "65px", // slightly larger icons
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div className="fw-semibold" style={{ fontSize: "0.95rem" }}>
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 cards */}
        <div
          className="row justify-content-center mt-3"
          style={{ rowGap: "15px", columnGap: "15px" }}
        >
          {techItems.slice(3).map((tech, index) => (
            <div
              key={index + 3}
              style={{
                flex: "0 0 auto",
                width: "190px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "white",
                  textAlign: "center",
                  width: "100%",
                  boxShadow:
                    hoverIndex === index + 3
                      ? "0 8px 20px rgba(0,0,0,0.15)"
                      : "0 2px 6px rgba(0,0,0,0.1)",
                  transform:
                    hoverIndex === index + 3
                      ? "translateY(-6px)"
                      : "translateY(0)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoverIndex(index + 3)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  style={{
                    maxHeight: "65px", // slightly larger icons
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />
                <div className="fw-semibold" style={{ fontSize: "0.95rem" }}>
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page8;
