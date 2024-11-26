 "use server"
import {z} from "zod";
import {put, del} from "@vercel/blob"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getImagesByid } from "./data";
const uploadSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
  link: z.string().min(5),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Image is required",
    })
    .refine((file) => file.size > 0)
    .refine((file) => file.type.startsWith("image/"), {
      message: "File is not an image",
    })
    .refine((file) => file.size < 4000000, { message: "File must less" }),
});

const editSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
  link: z.string().min(5),
  image: z
    .instanceof(File)
    .refine((file) => file.size < 4000000, { message: "File must less" })
    .optional(),
});


export const uploadImage =  async (prevState: unknown,formData: FormData) => {
    const validatedFields = uploadSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if(!validatedFields.success){
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    const {title, description, link, image  } = validatedFields.data 
    const {url} = await put(image.name,image, {
        access : "public",
        multipart: true,

    })

    try {
        await prisma.upload.create({
            data: {
                title,
                description,
                link,
                image: url
            }
        })
    } catch (error) {
        return {
            message: "Something went wrong",
        }
    }
    revalidatePath("/admin");
    redirect("/admin");
}

export const updateImage = async (id: string, prevState:unknown, formData: FormData) => {
  const validatedFields = editSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getImagesByid(id);
  if (!data) {
    throw new Error("Image not found");
  }

  const { title, description, link, image } = validatedFields.data;
  let imagePath;
  if (!image || image.size === 0) {
      imagePath = data.image;
  }else{
    await del(data.image)
     const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });
  imagePath = url;
  }
 

  try {
    await prisma.upload.update({
      data: {
        title,
        description,
        link,
        image: imagePath,
      },
      where: {
        id,
      }
    });
  } catch (error) {
    return {
      message: "Failed to update data"
    };
  }
  revalidatePath("/admin");
  redirect("/admin");
};


export const deleteImage = async (id: string) => {
  try {
    const data = await getImagesByid(id);
    if (!data) {
      throw new Error("Image not found");
    }

    await del(data.image);

    await prisma.upload.delete({
      where: {
        id,
      },
    });

    revalidatePath("/admin");
    redirect("/admin");
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

