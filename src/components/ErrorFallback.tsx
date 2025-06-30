import { AlertTriangle } from "lucide-react";

export default function ErrorFallback({
  message = "Something went wrong",
}: {
  message?: string;
}) {
  return (
    <div className="w-full h-52 flex flex-col items-center justify-center text-center text-amber-950 rounded-xl ">
      <AlertTriangle size={40} className="text-red-600 mb-2" />
      <h2 className="text-lg font-semibold">{message}</h2>
      <p className="text-sm text-amber-700">Please try again later</p>
    </div>
  );
}
