import { signOut } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SignOut() {
  return await signOut({ redirectTo: "/" });
}
