import React, { useCallback, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../firebase/firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password);
      if (!email || !password) {
        alert("boş");
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          console.log(auth);
          updateProfile(auth.user, { displayName: name });
        })
        .catch((err) => {
          console.log(err);
          alert("err", err);
        });
    },
    [name, email, password]
  );

  return (
    <div className="min-h-screen  grid place-items-center ">
      <div className="text-white flex flex-col items-center justify-center gap-3 w-[500px] h-[400px] p-10 bg-gray-500 rounded-lg">
        <h1 className="text-center text-3xl mb-3">Create mew account</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-3 w-full bg-gray-500"
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 rounded-lg text-black outline-none bg-gray-200"
            onChange={(e) => setName(e.currentTarget.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg text-black outline-none bg-gray-200"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-3 rounded-lg text-black outline-none bg-gray-200"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
          <button
            type="submit"
            className="p-3 rounded-lg cursor-pointer transition hover:scale-[0.96] hover:opacity-[0.9] bg-blue-600 text-white "
          >
            Sign up
          </button>
          <Link to={"/sign-in"}>Already an account? Sign in</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
