import { useForm } from "react-hook-form";
import { register as registerUser } from "../../features/User/UserSlice";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/minor/Loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const { isLoading, user, isFetched } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const pw = watch("password");
  const navigate = useNavigate();
  async function onSubmit(data) {
    await dispatch(registerUser(data)).uwrap();
    navigate("/");
  }
  useEffect(() => {
    if (isFetched && user) {
      navigate("/");
    }
  }, [isFetched]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="min-h-screen flex items-center justify-center px-4 mt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-6 bg-white p-8"
          >
            <h1 className="text-2xl font-bold text-center">Create account</h1>

            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className={`w-full border px-3 py-3 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className={`w-full border px-3 py-3 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters" },
                })}
                className={`w-full border px-3 py-3 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPw", {
                  validate: (val) => val === pw || "Passwords do not match",
                })}
                className={`w-full border px-3 py-3 ${
                  errors.confirmPw ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmPw && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirmPw.message}
                </p>
              )}
            </div>

            <div className="w-full flex justify-center">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-auto border-1 border-gray-300 px-3 py-2 flex items-center gap-2 transition disabled:opacity-50"
              >
                <p className="border-r border-gray-300 pr-2">
                  {isSubmitting ? "Creating…" : "Create account"}
                </p>
                <FaAngleRight className="text-red-800 hover:text-black" />
              </button>
            </div>

            <p className="text-center text-sm">
              Have an account?{" "}
              <a href="/account/login" className="text-red-800 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </section>
      )}
    </>
  );
}
