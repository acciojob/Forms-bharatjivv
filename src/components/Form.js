import React from "react";
import Card from "./Card";

export default function Form() {
  return (
    <Card>
      <form id="info-form">
        <div>
          <input id="full_name" placeholder="Full Name" />
        </div>
        <div>
          <input id="email" placeholder="Email" />
        </div>
        <div>
          <input id="password" type="password" placeholder="Password" />
        </div>
        <div>
          <input id="password_confirmation" type="password" placeholder="Confirm Password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}
