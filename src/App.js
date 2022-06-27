import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList";

const App = () => {
  const [whomReceivedEmail, setWhomReceivedEmail] = useState([]);

  const fetchUserIds = async () => {
    return ["john.smith", "sara.lee", "jack.ma", "klinger.ma", "julio.pi"];
  };

  const checkStatus = async (userId) => {
    return Math.random() > 0.8
      ? { status: "offline", id: userId }
      : { status: "online", id: userId };
  };

  const sendEmail = async (userId) => {
    // return if it was sucessfull or not
    return Math.random() > 0.1 ? true : false;
  };

  /*
    Question 1: 
    Find all online users and send them emails. Render the users for which the emails were successfully sent

    Step 1: Load users
    Step 2: Check users online
    Step 3: Send email for whom are online
    Step 4: Render those which the email was successfully sent
  
  */

  const getUsers = async () => {
    const fetchUsers = await fetchUserIds();

    const updatedUsers = fetchUsers.map(async (user) => {
      return await checkStatus(user);
    });

    updatedUsers.map((promise) => {
      promise.then((user) => {
        console.log(`User: ${JSON.stringify(user)}`);
        setEmails(user);
      });
    });
  };

  const setEmails = async (user) => {
    if (user.status === "online") {
      if (await sendEmail(user.id)) {
        setWhomReceivedEmail((prevState) => {
          return [...prevState, { id: user.id }];
        });
      }
    }

    return;
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <p className="App-title">
            All online users that introductions were sucessfully sent:
          </p>
          <ul>
            <UserList usersWhomReceivedEmail={whomReceivedEmail} />
          </ul>
        </div>
      </div>
      <p className="toIgnore">
        Did you enjoy it?
        <br />
        Leave a like!
      </p>
    </div>
  );
};

export default App;
