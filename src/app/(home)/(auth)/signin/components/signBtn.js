"use client";
import React from "react";

import { signIn } from "next-auth/react";
export default function signBtn({ id, name }) {
  const handleBtn = (event)=>{
       console.log(event.target.id)
       signIn(event.target.id)
  }

  return (
    <button
     type='primary'
      onClick={handleBtn}
      id={id}
    >
      {name}-{id}
    </button>
  );
}
