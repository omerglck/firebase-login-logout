import React, { useCallback, useState } from "react";
import { auth } from "../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        return;
      }
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Gönderildi.");
        })
        .catch((err) => console.log(err));
    },
    [email]
  );

  return (
    <div className="min-h-screen  grid place-items-center ">
      <div className="text-white flex flex-col items-center justify-center gap-3 w-[500px] h-[400px] p-10  rounded-lg">
        <h1 className="text-center text-3xl text-black mb-3">
          Forgot Password
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-3 w-full "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg text-black outline-none bg-gray-200"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <button
            type="submit"
            className="p-3 rounded-lg cursor-pointer transition hover:scale-[0.96] hover:opacity-[0.9] bg-green-600 text-white "
          >
            Send reset password email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
