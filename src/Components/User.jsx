import { useState } from "react";
export default function User() {
  const [user, setUser] = useState([
    { id: 1, name: "Moe", age: 25, phoneNumber: 15678463 },
    { id: 2, name: "Ahmed", age: 22, phoneNumber: 1412463 },
    { id: 3, name: "mazin", age: 26, phoneNumber: 111132463 },
  ]);

  const updateUser = () => {
    setUser([
      ...user,
      { id: 4, name: "mostafa", age: 35, phoneNumber: 175678463 },
    ]);
  };

  return (
    <>
      <button onClick={updateUser}>Update User</button>

      <div>
        {user.map((e) => (
          <div key={user.id}>
            User name is {e.name} ,Age is {e.age} ,Phone Number is{" "}
            {e.phoneNumber}
          </div>
        ))}
      </div>
      <h2>This is a simple use state implementation</h2>
    </>
  );
}
