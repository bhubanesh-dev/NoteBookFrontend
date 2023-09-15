import React, { useContext } from "react";
import noteContext from "../context/note/noteContext";

import "../App.css";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-4 col-lg-3 p-2">
      <div className="card my-3 glassmorphism text-light">
        <div className="card-body">
          <div className="cointainer   me-2">
            <div className="row">
              <div className="col-9">
                {" "}
                <h5
                  className="card-title overflow-y-auto w-auto"
                  style={{ height: "2.8rem" }}
                >
                  {note.title}
                </h5>
              </div>
              <div className="col-3  ">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <i
                      className="far fa-trash-alt mx-2"
                      onClick={() => {
                        deleteNote(note._id);
                      }}
                    ></i>
                  </div>
                  <div className="col-12 col-md-6">
                    <i
                      className="far fa-edit mx-2"
                      onClick={() => {
                        updateNote(note);
                      }}
                    ></i>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <hr />
          <p className="card-text  overflow-y-auto" style={{ height: "6rem" }}>
            {note.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
