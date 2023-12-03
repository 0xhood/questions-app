import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import LocationInput from "./location-input";

interface FormData {
  questionTitle: string;
  questionContent: string;
  location: {
    latitude: string;
    longitude: string;
  };
}

const schema = z.object({
  questionTitle: z.string().min(1).max(50),
  questionContent: z.string().min(1).max(200),
  location: z.object({
    latitude: z.string().min(1).max(50),
    longitude: z.string().min(1).max(50),
  }),
});

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      questionTitle: "",
      questionContent: "",
      location: {
        latitude: "",
        longitude: "",
      },
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form data:", data);
    onClose();
  };

  return (
    <div className="z-20 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="questionTitle"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Question Title:
              </label>
              <Controller
                name="questionTitle"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      className="w-full p-2 border rounded"
                      id="questionTitle"
                      placeholder="Enter question title"
                    />
                    {errors.questionTitle && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.questionTitle.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="questionContent"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Question Content:
              </label>
              <Controller
                name="questionContent"
                control={control}
                render={({ field }) => (
                  <>
                    <textarea
                      {...field}
                      className="w-full p-2 border rounded"
                      id="questionContent"
                      rows={3}
                      placeholder="Enter question content"
                    ></textarea>
                    {errors.questionContent && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.questionContent.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            <Controller
              name="location"
              control={control}
              render={(field) => (
                <>
                  <LocationInput onLocationChange={field.field.onChange} />
                  <p className="text-red-500 text-xs mt-1">
                    {errors.location?.message}
                  </p>
                </>
              )}
            ></Controller>

            <div className="modal-footer py-4 px-6">
              <button
                disabled={Object.keys(errors).length > 0}
                type="submit"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  Object.keys(errors).length > 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="border border-gray-300 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded ml-2"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
