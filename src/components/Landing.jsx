import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
const Landing = () => {
  const usersInfo = [
    { userName: "Rana", backgroundColor: "blue" },
    { userName: "Rania", backgroundColor: "purple" },
  ];
  let [users, setUsers] = useState(usersInfo);
  return (
    <div>
      <div>WHO'S WATCHING?</div>
      <div id="users">
        {users.map((u, index) => (
          <Link
            to="/catalog"
            className="user"
            style={{ backgroundColor: u.backgroundColor }}
          >
            {u.userName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Landing;
