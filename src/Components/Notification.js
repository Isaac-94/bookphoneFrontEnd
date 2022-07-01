const Notification = ({ message }) => {
  if (message === null || message === "") {
    return null;
  } else {
    if (message === "The name doesnot exist in the list") {
      return <div className="error">{message}</div>;
    } else {
      return <div className="success">{message}</div>;
    }
  }
};

export default Notification;
