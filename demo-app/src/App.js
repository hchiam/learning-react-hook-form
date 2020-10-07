import React from "react";
import "./App.css";

import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data, null, 4));

  const watchAValue = watch("minimalExampleField"); // watch value of input with this name="..."

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="minimalExampleField"
          placeholder="minimal example field"
          ref={register}
        />
        <input
          name="firstName"
          placeholder="first name"
          ref={register({ required: true, maxLength: 20 })}
        />
        {errors.firstName && "First name is required (max 20 characters)"}
        <input
          name="lastName"
          placeholder="last name"
          ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.lastName && "Last name is required (letters only)"}
        <input
          name="age"
          placeholder="age"
          type="number"
          ref={register({ required: true, min: 18, max: 99 })}
        />
        {errors.age && "Age must be 18-99 inclusive"}
        <input type="submit" />
      </form>
      {watchAValue && (
        <p id="test">
          Watching some value:{" "}
          <span style={{ color: "yellow", fontWeight: "bold" }}>
            {" "}
            {watchAValue}
          </span>
        </p>
      )}
    </>
  );
}

export default App;
