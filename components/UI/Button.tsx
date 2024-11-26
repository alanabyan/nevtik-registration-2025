"use client"
import React from "react";
import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { deleteImage } from "@/lib/action";
export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full",
        { "opacity-50 cursor-progress": pending }
      )}
      type="submit"
      disabled={pending}
    >
      {label == "upload" ? 
      (<>{pending ? "Uploading..." : "Upload"}</>) :
       (<>{pending ? "Updating..." : "Update"}</>) 
      }
    </button>
  );
};


export const EditButton = ({id} : {id:string}) => {
    return (
        <Link href={`admin/update/${id}`} className="py-3 px-6 text-sm bg-blue-500 rounded-md hover:bg-blue-600 text-center">Edit</Link>
    )
}
export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageWithId = (formData: FormData) => deleteImage(id);
  return (
    <form
      action={deleteImageWithId}
      className="py-3 px-6 text-sm bg-red-500 rounded-md hover:bg-red-600 text-center"
    >
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
    const {pending} = useFormStatus();
    return <button type="submit" disabled={pending}>{pending ? "Deleting..." : "Delete"}</button>;
}


export const UploadButton = () => {
    return (
      <Link
        href="/admin/create"
        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-500 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            className="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            className="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          Upload Content
        </span>
      </Link>
    );
}