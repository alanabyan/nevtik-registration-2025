"use client";
import { updateImage } from "@/lib/action";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/UI/Button";
import { upload } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

const EditForm = ({ data }: { data: upload }) => {
  const [state, formAction] = useFormState(
    updateImage.bind(null, data.id),
    null
  );

  const [updateData, setUpdateData] = useState<{
    title: string;
    description: string;
    link: string;
    image: File | string;
  }>({
    title: data.title,
    description: data.description,
    link: data.link,
    image: data.image,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: name === "image" ? files?.[0] : value,
    }));
  };

  return (
    <div className="flex flex-row gap-6 bg-white h-[600px] items-center w-[768px] rounded-xl p-6">
      <div>
        <form action={formAction}>
          <div className="mb-4 pt-2  ">
            <input
              type="text"
              name="title"
              className="py-2 px-4 rounded-md border border-gray-300 w-full text-black"
              placeholder="input title"
              defaultValue={data.title}
              onChange={handleChange}
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
              placeholder="input link"
              defaultValue={data.link}
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.error!.image}</p>
            </div>
            <div className="mb-4 pt-2">
              <SubmitButton label="update" />
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <div className="w-full max-w-sm max-h-80 h-full bg-[#E5E1DA] border border-gray-200 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:rotate-3 transition duration-500 ease-in-out hover:scale-110">
          <a href="#">
            {updateData.image ? (
              <Image
                className="p-2 h-48 rounded-xl"
                src={
                  typeof updateData.image === "string"
                    ? updateData.image
                    : updateData.image
                    ? URL.createObjectURL(updateData.image)
                    : "/placeholder.png"
                }
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
                {updateData.title || "Title Preview"}
              </h5>
            </a>
            <p className={`text-black text-sm font-light`}>
              {updateData.description || "Description Preview"}
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

export default EditForm;
