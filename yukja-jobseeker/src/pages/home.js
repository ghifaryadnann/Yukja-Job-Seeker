import MainImg from "../assets/main-home.png";
import WhyImg from "../assets/why.png";
import { Link } from "react-router-dom";
import { BsCheckCircleFill, BsGoogle } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { brands, user, jobs, fetchStatus, setFetchStatus } = state;
  const {
    limitString,
    averageSalary,
    handleRupiahFormat,
    fetchData,
    detailData,
  } = handleFunction;

  useEffect(() => {
    AOS.init({
      once: true,
    });
    if (fetchStatus === true) {
      fetchData();
      setTimeout(() => {
        setFetchStatus(false);
      }, 1000);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div>
      <section className="lg:pt-32 pt-[6.5rem] relative">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 self-center">
              <h2
                className="lg:text-6xl text-4xl font-semibold"
                data-aos="fade-right"
              >
                Cari Pekerjaan Terbaikmu Disini
              </h2>
              <p
                className="lg:text-sm text-xs mt-3 max-w-lg"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                Yukja mempunyai berbagai pekerjaan untuk anda. Mulai dari
                Gojek, Tokopedia, Traveloka dan masih banyak lagi. Yukja
                juga dipercayai banyak perusahaan. So tunggu apa lagi?
              </p>
              <div
                className="flex flex-wrap gap-3 mt-7"
                data-aos="fade-right"
                data-aos-delay="350"
              >
                <Link
                  to="/job-vacancy"
                  className="rounded-full md:px-10 px-8 py-2 bg-primary text-white hover:bg-[#1818a1] transition"
                >
                  Mulai
                </Link>
              
              </div>
            </div>
            <div
              className="w-full md:w-1/2 self-center md:mt-0 mt-12"
              data-aos="fade-left"
            >
              <img
                src={MainImg}
                alt="image"
                className="lg:max-w-lg max-w-[20rem] md:ml-auto m-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 mt-20 bg-gray-100">
        <div className="container">
          <div className="flex flex-wrap gap-20 items-center justify-center flex-col md:flex-row">
            {brands !== null &&
              brands.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt="brands"
                    className="max-w-[6rem]"
                    data-aos="fade-down"
                    data-aos-delay={index * 100}
                  />
                );
              })}
          </div>
        </div>
      </section>
      <section className="py-28">
        <div className="container">
          <div className="flex flex-nowrap justify-between items-center">
            <h4 className="text-3xl font-medium">More Jobs</h4>
            <Link
              to="/job-vacancy"
              className="hover:text-primary hover:text-underline"
            >
              Lihat Semua
            </Link>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
            {jobs !== null &&
              jobs.slice(0, 4).map((item, index) => {
                return (
                  <button
                    key={index}
                    value={item.id}
                    onClick={detailData}
                    data-aos="flip-right"
                    data-aos-offset="250"
                    data-aos-delay={index * 100}
                    className="bg-white rounded-xl border-2 p-5 flex flex-col cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={item.company_image_url}
                        className="w-8 h-8 rounded-full object-center object-fill"
                      />
                      <p className="text-sm">{item.company_name}</p>
                    </div>
                    <p className="text-lg font-medium mt-3">{item.title}</p>
                    <p className="text-xs font-light">
                      {limitString(item.job_description, 70)}
                    </p>
                    <p className="text-sm font-medium mt-5">Average Salary</p>
                    <p className="text-xs">
                      Rp.{" "}
                      {handleRupiahFormat(
                        averageSalary(item.salary_min, item.salary_max)
                      )}
                    </p>
                  </button>
                );
              })}
          </div>
        </div>
      </section>
      <section className="py-20 mt-10 bg-[#f0f0ff] px-3 -mx-3 md:px-0 md:mx-0 ">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2">
              <h2
                className="lg:text-6xl md:text-5xl text-4xl font-medium"
                data-aos="fade-right"
              >
                Kenapa Harus Memilih Kami
              </h2>
              <ul className="mt-7">
                <li
                  className="flex flex-nowrap items-baseline gap-3 mb-4"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  <BsCheckCircleFill className="text-lg" />
                  <div>
                    <h4 className="text-2xl font-medium">
                      Freelancer terpercaya
                    </h4>
                    <p className="text-md max-w-md">
                      Yukja merupakan web terpercaya bagi para freelancer.
                    </p>
                  </div>
                </li>
                <li
                  className="flex flex-nowrap items-baseline gap-3 mb-4"
                  data-aos="fade-down"
                  data-aos-delay="250"
                >
                  <BsCheckCircleFill className="text-lg" />
                  <div>
                    <h4 className="text-2xl font-medium">
                      Didukung banyak perusahaan
                    </h4>
                    <p className="text-md max-w-md">
                      Yukja didukung oleh banyak perusahaan. Diantaranya
                      adalah google, gojek, meta, grab, amazon dan masih banyak
                      lagi.
                    </p>
                  </div>
                </li>
                <li
                  className="flex flex-nowrap items-baseline gap-3 mb-4"
                  data-aos="fade-down"
                  data-aos-delay="350"
                >
                  <BsCheckCircleFill className="text-lg" />
                  <div>
                    <h4 className="text-2xl font-medium">Aman serta nyaman</h4>
                    <p className="text-md max-w-md">
                      Yukja merupakan web terpercaya bagi para freelancer
                      maupun client. Jadi anda dapat bertransaksi dengan aman,
                      dan mendapatkan freelancer terpercaya. Jika terjadi
                      masalah seperti penipuan. Bisa diinfokan ke Yukja
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={WhyImg}
                alt="image"
                className="md:max-w-lg max-w-xs ml-0 lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20" data-aos="flip-right">
        <div className="container">
          <p className="font-medium text-2xl text-center">Tunggu Apa Lagi?</p>
          <div className="m-auto w-40 mt-3 text-center px-5 py-3 bg-primary hover:bg-[#1818a1] transition rounded-lg text-white text-sm">
            <Link to="/job-vacancy">Apply Sekarang</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
