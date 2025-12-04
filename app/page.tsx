import { Button } from "@/components/ui/button"
import { MdOutlineArrowOutward } from "react-icons/md";


export default function Home() {
  return (
    <div className="bg-[url('/images/building.jpg')] bg-cover bg-center h-screen">
      <div className="pt-50">
        <h1 className="text-white text-6xl flex items-center justify-center">Best properties are waiting for you</h1>
        <p className="text-white text-2xl flex items-center justify-center mt-4">Find your dream home with us</p>
        <div className="flex items-center justify-center mt-8">
          <Button variant="outline" className="rounded-full p-6 hover:bg-black hover:text-white border-none">Get Started <MdOutlineArrowOutward /></Button>
        </div>

      </div>
    </div>
  );
}
