import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Home() {
  return (
    <div className="flex gap-16 justify-center bg-[#F8EDE3] h-screen items-center text-black">
      {division.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-sm max-h-80 h-full bg-[#E5E1DA] border border-gray-200 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
        >
          <a href="#">
            <Image
              className="p-2 h-48 rounded-xl"
              src={item.gambar}
              alt="product image"
              width={400}
              height={100}
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                {item.divisi}
              </h5>
            </a>
            <p className={`${poppins.className} text-sm font-light`}>
              {item.deskripsi}
            </p>
            <div className="flex items-center justify-end mt-5">
              <Link
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Daftar Sekarang!
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const division = [
  {
    divisi: "ITNSA (IT Network System Administration)",
    deskripsi: "ITNS is blablabla",
    gambar: '/web.jpg'
  },
  {
    divisi: "Cyber Security",
    deskripsi: "",
    gambar: '',
  },
  {
    divisi: "Web Developer",
    deskripsi: "",
    gambar: '',
  },
];
