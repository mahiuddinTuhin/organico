import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mx-auto my-[183px] ">
      <h1 className="text-center font-face-thunder font-normal text-[32px] leading-10 text-[#2D2929] tracking-wide mb-[48px]">
        RECOVER PASSWORD
      </h1>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        {/* register your input into the hook by invoking the "register" function */}

        <input
          {...register("email", { required: true })}
          className="mx-auto w-[686px] py-3 pl-6  border-2 font-normal text-base leading-[20px] tracking-wide text-[#888] mb-6"
          type="email"
          placeholder="Email"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}

        <input
          {...register("password", {
            required: true,
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte",
            },
            max: 99,
          })}
          className="mx-auto w-[686px] py-3 pl-6  border-2 font-normal text-base leading-[20px] tracking-wide text-[#888] mb-12"
          type="password"
          placeholder="Password"
        />

        <button
          className="rounded-none text-center mx-auto w-[686px] py-3 pl-6  border-2 font-normal text-base leading-[20px] tracking-wide text-[#fff] mb-4 bg-[#01BFD7]"
          type="submit"
          required
        >
          Submit
        </button>
        <div className="flex">
          <Link
            className="mr-3 w-[218px] text-center font-normal text-base leading-[20px] tracking-wide"
            to="/signup"
          >
            Create New account
          </Link>
          <p className="mr-3">/</p>
          <Link
            className="w-[192px] text-center font-normal text-base leading-[20px] tracking-wide"
            to="/login"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
