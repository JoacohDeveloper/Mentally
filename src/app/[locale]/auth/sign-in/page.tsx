export default function SignInAccount() {
  return (
    <div>
      <form action="" className=" mt-6 pl-5 flex flex-col gap-4 w-[18rem]">
        <label
          htmlFor="username"
          className="text-d-text-main dark:text-d-text-main flex flex-col"
        >
          Username
          <input className="border" id="username" type="text" name="username" />
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
          value={"Sign In"}
        />
      </form>
    </div>
  );
}
