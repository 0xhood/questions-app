import React, { useState, useRef } from "react";
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodError } from "zod";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  password: z.string().min(6),
});

interface FormData extends FieldValues {
  name: string;
  email: string;
  password: string;
}

const ChangeUserInfoForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setProfileImage(file!);

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    } else {
      setImagePreview(null);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-DDE6ED">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          Change User Information
        </h2>

        <div
          className="relative flex justify-center my-8 cursor-pointer"
          onClick={handleImageClick}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          <Image
            src={imagePreview || "/profile.jpeg"}
            width={90}
            height={90}
            alt=""
            className="rounded-full"
          />
          {isHovered && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black bg-opacity-50 rounded-full w-[90px] h-[90px]">
              <p className="text-white text-center">Change Image</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
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
              className="            block text-27374D text-sm font-semibold mb-2"
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

          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            ref={fileInputRef}
          />

          <button
            type="submit"
            className="bg-[#526D82] text-white font-bold py-2 px-4 rounded hover:bg-9DB2BF"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeUserInfoForm;
