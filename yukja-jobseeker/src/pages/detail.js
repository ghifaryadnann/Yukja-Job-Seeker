import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import {
  BsBriefcase,
  BsFacebook,
  BsFillGeoAltFill,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";

const Detail = () => {
  let { ID_GAMES } = useParams();
  const { state, handleFunction } = useContext(GlobalContext);
  const { handleRupiahFormat, handleDateCreated } = handleFunction;
  const { input, setInput } = state;
  const [kontakList, setKontakList] = useState(false);

  useEffect(() => {
    if (ID_GAMES !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES}`)
        .then((res) => {
          let data = res.data;
          setInput({
            updated_at: data.updated_at ?? null,
            title: data.title ?? null,
            job_description: data.job_description ?? null,
            job_qualification: data.job_qualification ?? null,
            job_type: data.job_type ?? null,
            job_tenure: data.job_tenure ?? null,
            job_status: data.job_status ?? null,
            company_name: data.company_name ?? null,
            company_image_url: data.company_image_url ?? null,
            company_city: data.company_city ?? null,
            salary_min: data.salary_min ?? null,
            salary_max: data.salary_max ?? null,
          });
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <div>
      <section className="pt-32">
        <div className="container md:px-12 px-5">
          <div className="flex flex-wrap justify-between">
            <div className="md:w-[60%] w-full">
              <h2 className="text-4xl font-semibold">{input.title}</h2>
              <div className="flex flex-nowrap gap-3 mt-3 mb-6">
                <Link to="/job-vacancy">
                  <div className="flex flex-nowrap items-center gap-2 border-2 px-2 py-2 rounded-full md:text-sm text-xs">
                    Bagikan ke <BsWhatsapp />
                  </div>
                </Link>
                <Link to="/job-vacancy">
                  <div className="flex flex-nowrap items-center gap-2 border-2 px-2 py-2 rounded-full md:text-sm text-xs">
                    Bagikan ke <BsTelegram />
                  </div>
                </Link>
                <Link to="/job-vacancy">
                  <div className="flex flex-nowrap items-center gap-2 border-2 px-2 py-2 rounded-full md:text-sm text-xs">
                    Bagikan ke <BsFacebook />
                  </div>
                </Link>
              </div>
              <p className="text-sm mt-3 text-dark">{input.job_description}</p>
              <h4 className="text-lg font-semibold mt-3">Ketentuan</h4>
              <p className="text-sm text-dark">{input.job_qualification}</p>
              <div className="grid mt-10 lg:grid-cols-4 grid-cols-2 gap-4 py-7 border-t-2 border-b-2">
                <div className="flex flex-nowrap gap-2 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-currency-dollar mt-[0.3rem]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                  </svg>
                  <div>
                    <p className="font-medium text-md">
                      Rp. {handleRupiahFormat(input.salary_min)}
                    </p>
                    <p className="text-xs">Gaji Minimal</p>
                  </div>
                </div>
                <div className="flex flex-nowrap gap-2 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-currency-dollar mt-[0.3rem]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                  </svg>
                  <div>
                    <p className="font-medium text-md">
                      Rp. {handleRupiahFormat(input.salary_max)}
                    </p>
                    <p className="text-xs">Gaji Maximal</p>
                  </div>
                </div>
                <div className="flex flex-nowrap gap-2 items-start">
                  <BsFillGeoAltFill className="text-sm mt-[0.3rem] mr-[0.3rem]" />
                  <p className="font-medium text-md text-dark">
                    {input.job_type}
                  </p>
                </div>
                <div className="flex flex-nowrap gap-2 items-start">
                  <BsBriefcase className="mt-[0.3rem] mr-[0.3rem]" />
                  <div>
                    <p className="font-medium text-md text-dark">
                      {input.job_tenure}
                    </p>
                    <p className="text-xs">Masa Kerja</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-nowrap gap-2 items-center mt-10">
                <img
                  src={input.company_image_url}
                  alt="image"
                  className="rounded-full w-16 h-16 object-contain object-center"
                />
                <div className="text-left">
                  <h4 className="md:text-md text-sm font-semibold">
                    {input.company_name}
                  </h4>
                  <p className="text-xs">{input.company_city}</p>
                </div>
                <p className="md:text-sm text-xs ml-auto mb-2 text-dark">
                  Dipost : {handleDateCreated(input.updated_at)}
                </p>
              </div>
            </div>
            <div className="md:w-[35%] w-full mt-5 md:mt-0">
              <div className="bg-white w-full border-2 rounded-md p-5 relative">
                <button className="bg-primary text-white w-full py-2 rounded-md">
                  Apply
                </button>
                <hr className="my-2" />
                <button
                  type="button"
                  onClick={() => setKontakList(!kontakList)}
                  className="border-dark border-[1px] text-dark w-full py-2 rounded-md hover:bg-dark hover:text-white transition"
                >
                  Kontak
                  <div
                    className={`z-10 ${
                      kontakList ? "absolute" : "hidden"
                    }  -bottom-[6.1rem] left-1/2 transform -translate-x-1/2 bg-white divide-y divide-gray-100 rounded shadow w-[90%]`}
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white"
                        >
                          WhatsApp
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white"
                        >
                          Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Detail;
