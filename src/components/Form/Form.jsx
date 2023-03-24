import React from "react";
import styles from "./Form.module.css";
import validate from "./validation";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(validate(userData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input
          name="username"
          type="text"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p className={styles.error}>{errors.username}</p>
        <label htmlFor="">Password:</label>
        <input
          name="password"
          type="text"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p className={styles.error}>{errors.password}</p>
        <button>LOGIN</button>
      </form>
    </div>
  );
}
