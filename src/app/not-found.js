import Link from "next/link";
import React from "react";

const NotFound = () => {
  return <div>
    <h1>this page cannot be found</h1>
    <Link href={"/"}>Go to Home</Link>
  </div>;
};

export default NotFound;
