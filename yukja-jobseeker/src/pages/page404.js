import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="flex items-center h-full mt-5 -mb-5 p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Maaf, kami tidak menemukan halaman ini.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Tapi jangan khawatir, Anda dapat menemukan banyak hal lain di
            beranda kami.
          </p>
          <Link to="/job-vacancy">
            <span className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Kembali
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Page404;
