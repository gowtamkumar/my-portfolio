"use client";
import { useParams } from "next/navigation";

export default function Blog() {
  const params = useParams();
  console.log(params);

  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "88vh" }}
    >
      <p>Blog</p>
    </div>
  );
}
