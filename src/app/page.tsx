import Image from "next/image";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumb";
import EditorBox from "@/sections/Editor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0D0F11] items-start justify-start p-4">
      <Navbar />
      <Breadcrumbs isnav data={["AI Audit", "My Projects", "Code Editor"]} />
      <EditorBox />
    </main>
  );
}
