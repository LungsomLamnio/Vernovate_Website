import React from "react";

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
  return (
    <div className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container text-center">
        <div className="position-relative d-inline-block mb-2 pb-3">
          <h2 className="fw-bold mb-0">OUR TECHNOLOGY</h2>
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "5px",
              backgroundColor: "#e6b800", // darker yellow
              borderRadius: "3px",
            }}
          ></span>
        </div>

        <p className="mb-5">
          Integration AI, Computer Vision, and Real-time Data
        </p>

        <div className="row justify-content-center g-4 mb-4">
          {techItems.slice(0, 3).map((tech, index) => (
            <div key={index} className="col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 shadow-sm bg-white h-100">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "60px" }}
                />
                <div>{tech.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center g-4">
          {techItems.slice(3).map((tech, index) => (
            <div key={index} className="col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-4 shadow-sm bg-white h-100">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "60px" }}
                />
                <div>{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page8;
