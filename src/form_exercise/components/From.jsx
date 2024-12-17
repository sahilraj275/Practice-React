import React from "react";
import { useForm } from "react-hook-form";

function From({ handleSubmitData }) {
  const { register, handleSubmit, reset } = useForm();

  const handleformsubmit = (data) => {
    handleSubmitData(data);
    reset();
  };
  return (
    <div className="mt-10 flex justify-center">
      <form
        className="flex gap-10"
        action=""
        onSubmit={handleSubmit(handleformsubmit)}
      >
        <input
          {...register("name")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="email"
        />
        <input
          {...register("image")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="image_url"
        />
        <input
          className="rounded-md px-2 py-2 bg-blue-500 text-white"
          type="submit"
        />
      </form>
    </div>
  );
}

export default From;
