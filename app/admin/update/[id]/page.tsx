import EditForm from "@/components/edit-Form";
import React from "react";
import { getImagesByid } from "@/lib/data";
import { notFound } from "next/navigation";
const EditPage = async ({ params }: { params: { id: string } }) => {
  const data = await getImagesByid(params.id);
  if (!data) return notFound();
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: "url('/background-form.jpg')" }}
    >
      <div className="bg-black w-screen absolute h-screen inset-0 bg-opacity-35"></div>
      <div className="z-10">
        <h1 className="text-2xl text-blue-500 font-bold mb-5">
          Update Content
        </h1>
        <EditForm data={data} />
      </div>
    </div>
  );
};

export default EditPage;
