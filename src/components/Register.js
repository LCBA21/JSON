import React, { useState } from 'react';

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullname: fullname,
      email: email,
      password: password
    };
    
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => {
        console.log("Success");
        // You can reset the form fields here if needed:
        setFullName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log("Failed: " + err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder='Enter Full Names'
            type='text'
            value={fullname}
            onChange={e => setFullName(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder='Enter Email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder='Enter Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
