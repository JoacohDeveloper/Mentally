"use server";

import { prisma } from "@/prisma";
import { signIn, auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CredentialsSignin } from "next-auth";

interface SignInUserFormState {
  errors: {
    _form?: string[];
  };
}

export default async function SignIn(
  formState: SignInUserFormState,
  formData: FormData
): Promise<SignInUserFormState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log(`${email} y ${password}`);
  if (email.length == 0 || password.length == 0)
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

  if (usuarioExiste) {
    try {
      const user = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!user) {
        throw new Error("El email o contraseña es incorrecto");
      }
    } catch (error: unknown) {
      if (error instanceof CredentialsSignin) {
        return {
          errors: {
            _form: ["El email o contraseña es incorrecto"],
          },
        };
      }
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
        _form: ["No existe un usuario con ese email"],
      },
    };
  }

  revalidatePath("/");
  redirect("/");
}
