"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

function DisplayPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        // Ensure the response data is an array of users
        setUsers(response.data.users || []); // Handle potential empty data
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto my-4">
      {users.length > 0 && ( // Conditional rendering to avoid mapping over an empty array
        <table className="table w-full rounded-md overflow-hidden shadow">
          <thead>
            <tr>
              <th>Name</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-200">
                <td>{user.name}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DisplayPage;



