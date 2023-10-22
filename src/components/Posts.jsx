import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
const ref = collection(db, "posts");
const Posts = () => {
  const [data, isLoading] = useCollectionData(ref);
  if (isLoading) return <h1>Loading</h1>;
  console.log(data);
  return (
    <div>
      {data.map((post) => (
        <div id={post.id}>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
