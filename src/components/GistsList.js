import React from "react";
import FileTypes from "./FileTypes";
import Helper from "../api/Helper";

const GistsList = (props) => {
  const gists = props.gists.map(({ files, description, id }) => {
    return (
      <div key={id} className="col-sm" style={{ margin: "10px" }} key={id}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{id}</h5>
            <div className="card-text">
              <FileTypes files={files} />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{gists}</div>;
};

export default GistsList;
