import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  Controller,
} from "react-hook-form";
import { z, ZodError } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

interface FormData extends FieldValues {
  email: string;
  password: string;
}

interface PropsType {
  goNext: () => void;
  reset: () => void;
  register: () => void;
}

const LoginForm = (props: PropsType) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form data:", data);
    props.goNext();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // setError("username", { message: "Invalid username or password." });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-DDE6ED">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold text-526D82 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-27374D text-sm font-semibold mb-2"
            >
              Email:
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type="text"
                    id="email"
                    className={`w-full p-2 border rounded ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email?.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-27374D text-sm font-semibold mb-2"
            >
              Password:
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type="password"
                    id="password"
                    className={`w-full p-2 border rounded ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password?.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-[#526D82] text-white font-bold py-2 px-4 rounded hover:bg-9DB2BF"
            >
              Login
            </button>
            <a className="text-9DB2BF hover:underline" onClick={props.reset}>
              Forgot Password?
            </a>
          </div>
        </form>

        <p className="text-27374D text-sm">
          {"Don't have an account?"}
          <a
            className="text-526D82 font-semibold hover:underline"
            onClick={props.register}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
