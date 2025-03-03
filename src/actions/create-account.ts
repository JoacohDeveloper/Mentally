"use server";

import { prisma } from "@/prisma";
import { signIn } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateAccountFormState {
  errors: {
    _form?: string[];
  };
}

export default async function CreateAccount(
  formState: CreateAccountFormState,
  formData: FormData
): Promise<CreateAccountFormState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;

  if (email.length == 0 || username.length == 0 || password.length == 0)
    return {
      errors: {
        _form: ["todos los campos son obligatorios"],
      },
    };
  const usuarioExiste = await prisma.user.findFirst({
    where: {
      Email: email,
    },
  });

  if (!usuarioExiste) {
    try {
      const user = await signIn("credentials", {
        email,
        password,
        username,
        redirect: false,
      });

      if (!user) {
        throw new Error("Error con SignUp");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return {
          errors: {
            _form: [error?.message],
          },
        };
      }

      return {
        errors: {
          _form: ["Internal Error"],
        },
      };
    }
  } else {
    return {
      errors: {
        _form: ["Ya existe un usuario con ese correo"],
      },
    };
  }

  revalidatePath("/");
  redirect("/");
}
