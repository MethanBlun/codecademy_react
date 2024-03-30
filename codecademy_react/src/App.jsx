import React, { useState } from "react";

const validPhoneNumber = /^\d{1,10}$/;

function PhoneNumber() {
  const [phone, setPhone] = useState("");
  const handleChange = ({ target }) => {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
      setPhone(newPhone);
    }
  };

  return (
    <>
      <label htmlFor="phone-input">Phone: </label>
      <input onChange={handleChange} value={phone} id="phone-input" />
    </>
  );
}

function App() {
  return (
    <>
      <PhoneNumber />
    </>
  );
}

export default App;
