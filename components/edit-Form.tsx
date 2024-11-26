"use client"
import { updateImage } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/UI/Button";
import { upload } from "@prisma/client";

const EditForm = ({ data }: { data: upload }) => {

    const [state, formAction] = useFormState(updateImage.bind(null, data.id), null)


  return (
    <div>
      <form action={formAction}>
        <div className="mb-4 pt-2  ">
          <input
            type="text"
            name="title"
            className="py-2 px-4 rounded-md border border-gray-300 w-full text-black"
            placeholder="input title"
            defaultValue={data.title}
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
            defaultValue={data.description}
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
            defaultValue={data.link}
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
          <SubmitButton label="update"/>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
