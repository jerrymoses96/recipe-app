import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href={"/recipe-list"}>go to recipe list</Link>
    </div>
  );
}
