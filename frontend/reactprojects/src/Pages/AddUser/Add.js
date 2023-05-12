import React from "react";

const Add = () => {
  const handleUserInfo = (e) => {
    e.preventDefault();

    const name = e.target.username.value;
    const password = e.target.userpassword.value;
    const email = e.target.useremail.value;
    const user = {
      username: name,
      userpassword: password,
      useremail: email
    };

    const url = "http://localhost:5000/users";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Please Add New User</h2>
      <form onSubmit={handleUserInfo} action="">
        Name:
        <input type="text" name="username" id="" />
        <br />
        Email:
        <input type="email" name="useremail" id="" />
        <br />
        Password:
        <input type="password" name="userpassword" id="" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
