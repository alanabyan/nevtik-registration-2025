"use client";

import React from "react";
import CreateForm from "@/components/create-form";
const CreatePage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: "url('/background-form.jpg')" }}
    >
      <div className="bg-black w-screen absolute h-screen inset-0 bg-opacity-35"></div>
      <div className="z-10">
        <CreateForm />
      </div>
    </div>
  );
};

export default CreatePage;
