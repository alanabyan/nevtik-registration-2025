import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { DeleteButton, EditButton } from "./Button";
import type { upload } from "@prisma/client";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function CardDivision({data}:{data:upload}) {
  return (
    <>
        <div
          className="w-full max-w-sm max-h-80 h-full bg-[#E5E1DA] border border-gray-200 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
        >
          <a href="#">
            <Image
              className="p-2 h-48 rounded-xl"
              src={data.image
              }
              alt="product image"
              width={400}
              height={100}
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                {data.title}
              </h5>
            </a>
            <p className={`${poppins.className} text-sm font-light`}>
              {data.description}
            </p>
            <div className="flex items-center justify-end mt-5">
              <Link
                href={data.link}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Daftar Sekarang!
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}




export const CardAdmin = ({data}:{data:upload}) => {
  return (
    <>
        <div
          className="w-full max-w-sm max-h-96 h-full bg-[#E5E1DA] border border-gray-200 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
        >
          <a href="#">
            <Image
              className="p-2 h-48 rounded-xl"
              src={data.image}
              alt="product image"
              width={400}
              height={100}
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                {data.title}
              </h5>
            </a>
            <p className={`${poppins.className} text-sm font-light text-gray-500`}>
              {data.description}
            </p>
            <div className="flex items-center justify-end mt-5 gap-6">
              <EditButton id={data.id}/>
              <DeleteButton id={data.id}/>
            </div>
          </div>
        </div>
    </>
  );
}