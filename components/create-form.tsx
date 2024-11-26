"use client"
import { uploadImage } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/UI/Button";

const CreateForm = () => {

    const [state, formAction] = useFormState(uploadImage, null)


  return (
    <div>
      <form action={formAction}>
        <div className="mb-4 pt-2  ">
          <input
            type="text"
            name="title"
            className="py-2 px-4 rounded-md border border-gray-300 w-full text-black"
            placeholder="input title"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error!.title}</p>
          </div>
        </div>
        <div className="mb-4 pt-2">
          <input
            type="text"
            name="description"
            className="py-2 px-4 rounded-md border border-gray-300 w-full text-black"
            placeholder="input description"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">
              {state?.error!.description}
            </p>
          </div>
        </div>
        <div className="mb-4 pt-2">
          <input
            type="link"
            name="link"
            className="py-2 px-4 rounded-md border border-gray-300 w-full text-black"
            placeholder="input link"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error!.link}</p>
          </div>
        </div>
        <div className="mb-4 pt-2">
          <input
            type="file"
            name="image"
            className="file:py-2 file:px-4 file:mr-4 file:rounded-md file:border-0 
               file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer rounded-md border border-gray-300 w-full text-black"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error!.image}</p>
          </div>
        </div>
        <div className="mb-4 pt-2">
          <SubmitButton label="upload"/>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
