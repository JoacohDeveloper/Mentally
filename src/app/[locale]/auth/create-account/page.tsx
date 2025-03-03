"use client";

import * as actions from "@/actions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function CreateAccount() {
  const [formState, action] = useActionState(actions.CreateAccount, {
    errors: {},
  });

  const { data } = useSession();

  if (data?.user) {
    redirect("/");
  }

  return (
    <div>
      <form
        action={action}
        className=" mt-6 pl-5 flex flex-col gap-4 w-[18rem]"
      >
        <label
          htmlFor="username"
          className="text-d-text-main dark:text-d-text-main flex flex-col"
        >
          Username
          <input className="border" id="username" type="text" name="username" />
        </label>

        <label
          htmlFor="email"
          className="text-d-text-main dark:text-d-text-main flex flex-col"
        >
          Email
          <input className="border" id="email" type="text" name="email" />
        </label>

        <label
          htmlFor="password"
          className="text-d-text-main dark:text-d-text-main flex flex-col"
        >
          Password
          <input
            className="border"
            id="password"
            type="password"
            name="password"
          />
        </label>

        <input
          className="bg-d-main text-text-m-white w-min px-4 py-2 rounded-xl cursor-pointer dark:bg-main dark:text-d-main"
          type="submit"
          value={"Create Account"}
        />
      </form>
    </div>
  );
}
