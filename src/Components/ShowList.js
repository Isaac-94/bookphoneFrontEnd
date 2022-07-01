import React from "react";
import Notification from "./Notification";

const ShowList = ({ personsToShow, buttonDelete, errorMsg}) => {
  return (
    <div>
      <h3>Numbers:</h3>
      <Notification message={errorMsg} />
      {personsToShow.map((showName) => (
        <div key={showName.name}>
          <li key={showName.name}>
            {showName.name} {showName.number}
            <button onClick={() => buttonDelete(showName)}>Delete</button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
