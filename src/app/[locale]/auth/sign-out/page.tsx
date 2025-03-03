"use client";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignOut() {
  actions.SignOut();
  const { data } = useSession();

  if (!data?.user) {
    redirect("/");
  }
  return <div>Logged out</div>;
}
