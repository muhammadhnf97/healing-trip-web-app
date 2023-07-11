import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-5 font-poppins">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Maaf, halaman yang anda minta tidak ditemukan.</p>
      <p className="text-gray-400">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}