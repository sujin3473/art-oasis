import Image from "next/image";
import NavBar from "@/components/navBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10">
      <NavBar />
    </main>
  );
}
