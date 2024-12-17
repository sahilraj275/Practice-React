import React from "react";
import { useForm,  } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="p-10 flex">
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("age")} type="age" placeholder="age" />
        <input {...register("email")} type="email" placeholder="email" />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
}

export default Form;
