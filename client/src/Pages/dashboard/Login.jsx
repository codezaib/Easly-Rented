import { useForm } from "react-hook-form";
import { ArrowBigRight } from "lucide-react";
import { FaAngleRight } from "react-icons/fa";
import { login } from "../../features/User/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/minor/Loader";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { isLoading, isFetched, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function onSubmit(data) {
    await dispatch(login(data)).unwrap();
    navigate("/");
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="min-h-screen flex items-center justify-center px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-6 bg-white p-8 "
          >
            <h1 className="text-4xl font-bold text-center">Login</h1>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
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

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters" },
                })}
                className={`w-full  border px-3 py-3 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
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
                  {isSubmitting ? "Logging in…" : "Log in"}
                </p>
                <FaAngleRight className="text-red-800 hover:text-black" />
              </button>
            </div>

            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <a
                href="/account/register"
                className="text-red-800 hover:underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </section>
      )}
    </>
  );
}

export default Login;
