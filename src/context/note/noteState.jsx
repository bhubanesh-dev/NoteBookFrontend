import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:3000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/note/fetchnote`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();

    if (response.status === 201) {
      setNotes(notes.concat(note));
      props.showAlert("Add note successfully ", "success");
    } else if (response.status === 500) {
      props.showAlert(
        "something went wrong from our side , please report us ",
        "danger"
      );
    } else if (response.status === 422) {
      props.showAlert("please fill the field properly", "warning");
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/note/deletenote`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ _id: id }),
    });
    const json = response.json();

    if (response.status === 200) {
      
      let newNotes = notes.filter((note) => {
        return note._id !== id;
      });
      setNotes(newNotes);
      props.showAlert(" note deleted ", "success");
    } else if (response.status === 500) {
      props.showAlert(
        "something went wrong from our side , please report us ",
        "danger"
      );
    } else if (response.status === 401) {
      props.showAlert("Not allowed to delete", "warning");
    } else if (response.status === 404) {
      props.showAlert("Not Found", "warning");
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    console.log(id);
    // API Call
    const response = await fetch(`${host}/note/updatenote`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ _id: id, title, description, tag }),
    });
    const json = await response.json();


    if (response.status === 200) {
      let newNotes = JSON.parse(JSON.stringify(notes));
      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
      props.showAlert("Update note successfully ", "success");
    }else 
    if (response.status === 404) {
      props.showAlert("Not Found the user", "danger");
    } else if (response.status === 401) {
      props.showAlert("Not allowed to edit", "denger");
    } 
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
