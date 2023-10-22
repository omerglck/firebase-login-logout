import React, { useCallback } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Posts from "../components/Posts";
const Home = () => {
  const [user, isLoading] = useAuthState(auth);
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="flex justify-between items-center">
      <p className="text-3xl p-4">Home</p>
      <div className="flex justify-between items-center gap-5 p-4">
        <p className="bg-gray-300 p-2 rounded-lg">{user.displayName}</p>
        <p className="bg-gray-300 p-2 rounded-lg">{user.email}</p>
        <button
          className="bg-red-600 p-2 rounded-lg text-white"
          onClick={handleSignOut}
        >
          Çıkış Yap
        </button>
      </div>
      <Posts />
    </div>
  );
};

export default Home;
