import React, { useRef } from "react";
import Card from "./Card";

export default function FormRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      full_name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value
    });
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <input id="full_name" placeholder="Full Name" ref={nameRef} />
        </div>
        <div>
          <input id="email" placeholder="Email" ref={emailRef} />
        </div>
        <div>
          <input id="password" type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <div>
          <input id="password_confirmation" type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}
