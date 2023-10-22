import { useCallback } from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase/firebase";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password);
      if (!email || !password) {
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("giriş yapıldı");
        })
        .catch((err) => console.log(err));
    },
    [email, password]
  );
  return (
    <div className="min-h-screen  grid place-items-center ">
      <div className="text-white flex flex-col items-center justify-center gap-3 w-[500px] h-[400px] p-10 bg-cyan-700 rounded-lg">
        <h1 className="text-center text-3xl mb-3">Sign In</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-3 w-full "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg text-black outline-none bg-gray-200"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-3 rounded-lg text-black outline-none bg-gray-200"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Link to={"/forgot-pass"}>Forgot password?</Link>
          <button
            type="submit"
            className="p-3 rounded-lg cursor-pointer transition hover:scale-[0.96] hover:opacity-[0.9] bg-green-600 text-white "
          >
            Sign in
          </button>
          <Link to={"/sign-up"}>Don't have an account? Sign up</Link>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
