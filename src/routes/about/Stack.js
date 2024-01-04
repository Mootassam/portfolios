import React from "react";

const Stack = () => {
  return (
    <React.Fragment>
      <h3 className="title-font white-text ">
        Here are a few tools & technologies I’ve been working with:
      </h3>
      <ol className="stack-section ">
        <li>
          <span style={{ fontWeight: "bolder", color: "#9bb6c7" }}>
            Frontend:
          </span>
          &nbsp;React.js, Next.js, CSS3, Material UI, Redux, Sass, TailwindCSS
        </li>
        <li>
          <span style={{ fontWeight: "bolder", color: "#9bb6c7" }}>
            Backend:
          </span>
          &nbsp;Node.js, Express.js, REST API
        </li>
        <li>
          <span style={{ fontWeight: "bolder", color: "#9bb6c7" }}>
            Databases:
          </span>
          &nbsp;MySQL, PostgreSQL, Firebase, MongoDB, Redise
        </li>
        <li>
          <span style={{ fontWeight: "bolder", color: "#9bb6c7" }}>
            DevOps & Tools:
          </span>
          &nbsp;Docker, Linux, Git, Jenkins, Webpack, Photoshop, Figma
        </li>
        <li>
          <span style={{ fontWeight: "bolder", color: "#9bb6c7" }}>
            Mobile Development:
          </span>
          &nbsp;React Native
        </li>
      </ol>
    </React.Fragment>
  );
};
export default Stack;
