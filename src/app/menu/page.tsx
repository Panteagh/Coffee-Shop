import { Suspense } from "react";
import MenuPage from "@/components/MenuPage";
import Spinner from "@/components/Spinner";

export default function MenuWrapper() {
  return (
    <Suspense fallback={<div className="w-full h-96 flex justify-center items-center">
      <Spinner />
    </div>}>
      <MenuPage />
    </Suspense>
  );
}
