import { metadata } from "../layout";
import { UploadButton } from "@/components/UI/Button";
import { CardAdmin } from "@/components/UI/Card";
import { getImages } from "@/lib/data";
metadata.title = "Admin Page";

export default async function AdminPage() {
    const images = await getImages();
    return (
      <div className="max-w-screen-lg mx-auto py-14">
        <div className="flex items-end justify-between">
          <h1 className="text-3xl font-bold">List Data</h1>
          <UploadButton/>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
        {images.map((item) => (
            <CardAdmin key={item.id} data={item}/>
        ))}
        </div>
      </div>
    );
}


