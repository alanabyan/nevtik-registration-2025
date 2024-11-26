import CardDivision from "@/components/UI/Card";
import { getImages } from "@/lib/data";

export default async function Home() {
  const images = await getImages();
  return (
    <div className="flex justify-center bg-[#F8EDE3] h-screen w-full items-center text-black p-4">
      <div className="grid gap-9 sm:grid-cols-2 md:grid-cols-3">
        {images.map((item) => (
          <CardDivision key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
