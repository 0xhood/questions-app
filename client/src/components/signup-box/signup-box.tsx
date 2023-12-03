import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  Controller,
} from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
  dateOfBirth: z.date(),
});

interface FormData extends FieldValues {
  email: string;
  password: string;
  name: string;
  dateOfBirth: Date;
}

interface PropsType {
  goBack: () => void;
  goNext: () => void;
}

const SignUpForm = (props: PropsType) => {
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

    await new Promise((resolve) => setTimeout(resolve, 1000));
    props.goNext();
    // setError("email", { message: "Email already exists." });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-DDE6ED">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold text-526D82 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
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
                    type="email"
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

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-27374D text-sm font-semibold mb-2"
            >
              Name:
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type="text"
                    id="name"
                    className={`w-full p-2 border rounded ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name?.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-27374D text-sm font-semibold mb-2"
            >
              Date of Birth:
            </label>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    value={field.value?.toLocaleDateString("en-CA")}
                    onChange={(v) => {
                      field.onChange(new Date(Date.parse(v.target.value)));
                    }}
                    type="date"
                    id="dateOfBirth"
                    className={`w-full p-2 border rounded ${
                      errors.dateOfBirth ? "border-red-500" : ""
                    }`}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.dateOfBirth?.message}
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
              Sign Up
            </button>
            <a onClick={props.goBack} className="text-9DB2BF hover:underline">
              Back to Login Page?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
