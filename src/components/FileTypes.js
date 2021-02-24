import React from "react";

const FileTypes = (props) => {
  let languages = [];
  for (const [key, value] of Object.entries(props.files)) {
    languages.push(value.language);
  }

  const files = languages.map((item) => {
    return (
      <span style={{ margin: "5px" }} className="badge badge-pill badge-info">
        {item}
      </span>
    );
  });

  return <div className="row">{files}</div>;
};

export default FileTypes;
