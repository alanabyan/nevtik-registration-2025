"use client";
import { uploadImage } from "@/lib/action";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/UI/Button";
import Link from "next/link";
import Image from "next/image";

const CreateForm = () => {
  const [state, formAction] = useFormState(uploadImage, null);

  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    link: string;
    image: File | null;
  }>({
    title: "",
    description: "",
    link: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files?.[0] : value,
    }));
  };

  return (
      <div className="flex flex-row gap-6 bg-white h-[600px] items-center w-[768px] rounded-xl p-6">
        <div className="">
          <form action={formAction}>
            <div className="mb-4 pt-2  ">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Input title"
                value={formData.title}
                onChange={handleChange}
              />
              <div aria-live="polite" aria-atomic="true">
                <p className="text-sm text-red-500 mt-2">
                  {state?.error!.title}
                </p>
              </div>
            </div>
            <div className="mb-4 pt-2">
              <input
                type="text"
                name="description"
                className="py-2 px-4 rounded-md border border-gray-300 w-full text-black"
                placeholder="input description"
                value={formData.description}
                onChange={handleChange}
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
                placeholder="input link example('/')"
                value={formData.link}
                onChange={handleChange}
              />
              <div aria-live="polite" aria-atomic="true">
                <p className="text-sm text-red-500 mt-2">
                  {state?.error!.link}
                </p>
              </div>
            </div>
            <div className="mb-4 pt-2">
              <input
                type="file"
                name="image"
                className="file:py-2 file:px-4 file:mr-4 file:rounded-md file:border-0 
               file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer rounded-md border border-gray-300 w-full text-black"
               onChange={handleChange}
              />
              <div aria-live="polite" aria-atomic="true">
                <p className="text-sm text-red-500 mt-2">
                  {state?.error!.image}
                </p>
              </div>
            </div>
            <div className="mb-4 pt-2">
              <SubmitButton label="upload" />
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <div className="w-full max-w-sm max-h-80 h-full bg-[#E5E1DA] border border-gray-200 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:rotate-3 transition duration-500 ease-in-out hover:scale-110">
            <a href="#">
              {formData.image ? (
                <Image
                  className="p-2 h-48 rounded-xl"
                  src={URL.createObjectURL(formData.image)}
                  alt="product image"
                  width={400}
                  height={100}
                />
              ) : (
                <div className="p-2 h-48 rounded-xl bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">No Image Selected</span>
                </div>
              )}
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                  {formData.title || "Title Preview"}
                </h5>
              </a>
              <p className={`text-black text-sm font-light`}>
                {formData.description || "Description Preview"}
              </p>
              <div className="flex items-center justify-end mt-5">
                <Link
                  href={`/admin/create`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Daftar Sekarang!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CreateForm;
