import CardDivision from "@/components/UI/Card";

export default function Home() {
  return (
    <div className="flex justify-center bg-[#F8EDE3] h-screen items-center text-black">
      <div className="grid grid-cols-3 gap-16">
        <CardDivision />
      </div>
    </div>
  );
}
