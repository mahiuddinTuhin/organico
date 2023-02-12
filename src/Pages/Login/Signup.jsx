import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { signUpWithEmail } = useContext(AuthContext);
  const onSubmit = (data) => {
    signUpWithEmail(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="mx-auto my-[183px] ">
      <h1 className="text-center font-face-thunder font-normal text-[32px] leading-10 text-[#2D2929] tracking-wide mb-[48px]">
        CREATE ACCOUNT
      </h1>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        {/* register your input into the hook by invoking the "register" function */}

        <input
          {...register("firtName", {
            required: true,
            maxLength: 20,
          })}
          aria-invalid={errors.firstName ? "true" : "false"}
          className="mx-auto w-[686px] py-3 pl-6  border-2 font-normal text-base leading-[20px] tracking-wide text-[#888] mb-6"
          type="text"
          placeholder="First Name"
        />

        {/* first name error message */}
        {errors.firstName && <p role="alert">First name is required</p>}

        {/* include validation with required or other standard HTML validation rules */}

        <input
          {...register("lastName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          aria-invalid={errors.lastName ? "true" : "false"}
          className="mx-auto w-[686px] py-3 pl-6  border-2 font-normal text-base leading-[20px] tracking-wide text-[#888] mb-6"
          type="text"
          placeholder="last name"
          required
        />

        {/* last name error message */}
        {errors.lastName && <p role="alert">Last name is required</p>}

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

        {/* errors will return when field validation fails  */}
        {errors.password && (
          <span className="-mt-8 mb-4 text-orange-500">
            {errors.password.message}
          </span>
        )}

        <button
          className="rounded-none text-center mx-auto w-[686px] py-3 pl-6  border-2 font-normal text-base leading-[20px] tracking-wide text-[#fff] mb-4 bg-[#01BFD7]"
          type="submit"
          required
        >
          SIGNUP
        </button>
        <div className="flex">
          <p className="mr-3 w-[218px] text-center font-normal text-base leading-[20px] tracking-wide">
            Already have an account?
          </p>
          <p className="mr-3"></p>
          <Link
            className="w-[192px] text-center font-normal text-base leading-[20px] tracking-wide"
            to="/login"
          >
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
