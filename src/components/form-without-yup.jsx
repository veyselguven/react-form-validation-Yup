/* eslint-disable react/no-unknown-property */
import { useState } from "react";

const FormWithoutYup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confrimPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your first name"
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your last name"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Enter phone number "
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter password "
        />
      </div>
      <div>
        <label>Confrim Password:</label>
        <input
          type="password"
          name="confrimPassword"
          value={formData.confrimPassword}
          placeholder="confrim your Password "
        />
      </div>
      <div>
        <label>Age :</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter your age "
        />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender}>
          <option value="male"> Male</option>
          <option value="female"> Female</option>
          <option value="other"> Other</option>
        </select>
      </div>
      <div>
        <label> Interests: </label>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={formData.interests.includes("coding")}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="sports"
            checked={formData.interests.includes("sports")}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            name="reading"
            checked={formData.interests.includes("reading")}
          />
          Reading
        </label>
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          placeholder="Enter your date of birth"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithoutYup;
