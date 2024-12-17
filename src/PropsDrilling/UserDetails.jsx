import React, { useContext } from "react";
import { UserContext } from "./Context";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const { user } = useContext(UserContext);

  // Find the user by id (convert id to a number)
  const userDetails = user.find((u) => u.id === parseInt(id));

  return (
    <div>
      {userDetails ? (
        <>
          <h1>
            {userDetails.firstName} {userDetails.lastName}
          </h1>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
          {/* Display other details as needed */}
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default UserDetails;
