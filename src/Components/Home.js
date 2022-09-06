import React from "react";
// import AddNote from "./AddNote";
// import { useContext } from "react";
// import noteContext from "../Context/notes/noteContext";
import Notes from "./Notes";

const Home = (props) => {
  const {showAlert} = props
  return (
    <>
      <div>
        {/* <AddNote /> */}
        <Notes showAlert={showAlert}/>
      </div>
    </>
  );
};

export default Home;
