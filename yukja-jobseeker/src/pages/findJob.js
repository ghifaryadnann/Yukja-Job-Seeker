import {
  BsSearch,
  BsFillGeoAltFill,
  BsFilterLeft,
  BsFilterCircle,
  BsFilterCircleFill,
} from "react-icons/bs";
import MainImg from "../assets/main-vector2.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import AOS from "aos";
import "aos/dist/aos.css";

const FindJob = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    fetchData,
    detailData,
    handleDateCreated,
    averageSalary,
    handleRupiahFormat,
    handleInput,
    handleSearch,
    handleFilter,
    handleChangeFilter,
    handleDetailType,
  } = handleFunction;
  const {
    jobs,
    types,
    fetchStatus,
    setFetchStatus,
    input,
    filter,
    filterType,
    setFilterType,
  } = state;
  const [filterIcon, setFilterIcon] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    if (fetchStatus === true) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div>
      <section className="bg-[#D7DFDC] h-96 pt-32 relative">
        <div className="container">
          <img
            src={MainImg}
            alt="image"
            className="-z-2 absolute bottom-0 right-0 max-w-[49rem] lg:block hidden"
            data-aos="fade-left"
          />
          <h4
            className="text-4xl font-semibold md:px-0 px-5"
            data-aos="fade-right"
          >
            Cari Pekerjaan Impianmu
          </h4>
          <form
            className="z-3 z-1 flex relative flex-nowrap items-center mt-8 bg-white px-2 md:py-1 md:mx-0 mx-4 rounded-full"
            autoComplete="off"
            onSubmit={handleSearch}
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <BsSearch className="text-6xl md:text-7xl text-[#A7A7A7] pl-3 md:pl-5 pr-2 md:pr-4" />
            <input
              type="text"
              placeholder="Nama Pekerjaan"
              className="w-full border-transparent focus:border-transparent focus:ring-0"
              name="search"
              value={input.search}
              onChange={handleInput}
            />
            <button
              type="submit"
              className="bg-primary md:py-5 ml-auto md:px-16 px-5 py-3 text-white rounded-full"
            >
              Search
            </button>
          </form>
        </div>
      </section>
      {types !== null && (
        <marquee className="pt-5" behavior="scroll" direction="right" loop>
          <div className="flex flex-nowrap gap-3">
            <button
              onClick={() => {
                fetchData();
                setFilterType(null);
              }}
              className={`text-sm border-2 border-gray-200 px-2 py-1 rounded-md ${
                filterType == null ? "bg-gray-800 text-white" : ""
              }`}
            >
              All
            </button>
            {types.map((item, index) => {
              return (
                <button
                  key={index}
                  value={item}
                  onClick={handleDetailType}
                  className={`text-sm border-2 border-gray-200 px-2 py-1 rounded-md ${
                    item === filterType ? "bg-gray-800 text-white" : ""
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </marquee>
      )}
      <section className="pt-8 px-5">
        <div className="container">
          <div className="flex flex-wrap items-start">
            <div
              className="w-full md:w-[20%] md:mb-0 mb-6"
              data-aos="fade-right"
            >
              <button
                onClick={() => setFilterIcon(!filterIcon)}
                className="text-3xl lg:hidden"
              >
                {filterIcon ? <BsFilterCircleFill /> : <BsFilterCircle />}
              </button>
              <div className={`${filterIcon ? "block" : "lg:block hidden"}`}>
                <h4 className="text-lg font-medium">Filter</h4>
                <form onSubmit={handleFilter} autoComplete="off">
                  <input
                    type="text"
                    name="company_city"
                    placeholder="Kota"
                    className="py-2 mt-3 px-2 border-2 border-[#D7DFDC] focus:ring-0 rounded-md w-full"
                    onChange={handleChangeFilter}
                    value={filter.company_city}
                    required
                  />
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Perusahaan"
                    className="py-2 mt-3 px-2 border-2 border-[#D7DFDC] focus:ring-0 rounded-md w-full"
                    onChange={handleChangeFilter}
                    value={filter.company_name}
                    required
                  />
                  <input
                    type="text"
                    name="job_type"
                    placeholder="Tipe Pekerjaan"
                    className="py-2 mt-3 px-2 border-2 border-[#D7DFDC] focus:ring-0 rounded-md w-full"
                    onChange={handleChangeFilter}
                    value={filter.job_type}
                    required
                  />
                  <button
                    type="submit"
                    className="text-white bg-dark w-full py-3 mt-3"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full pl-10 md:w-[80%]">
              <div className="w-full text-dark flex flex-col">
                {jobs !== null &&
                  jobs.map((item, index) => {
                    return (
                      <button
                        key={index}
                        value={item.id}
                        onClick={detailData}
                        data-aos="fade-right"
                        data-aos-delay={index * 100}
                        style={{ cursor: "pointer" }}
                        className="w-full md:px-4 px-0 m-auto py-2 flex flex-wrap mb-3 lg:gap-3 md:gap-6 gap-5 items-center lg:justify-between rounded-2xl transition bg-white md:hover:bg-[#EDEFEF] text-left"
                      >
                        <img
                          src={item.company_image_url}
                          alt="image"
                          className="rounded-full w-16 h-16 object-contain object-center"
                        />
                        <div className="text-left">
                          <h4 className="text-md font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-xs">{item.company_name}</p>
                        </div>
                        <p className="text-sm font-medium">
                          Rp.{" "}
                          {handleRupiahFormat(
                            averageSalary(item.salary_min, item.salary_max)
                          )}
                        </p>
                        <div className="hidden lg:flex flex-wrap gap-3">
                          <p className="text-sm bg-gray-200 px-2 py-1 rounded-md">
                            {item.job_type}
                          </p>
                        </div>
                        <h4 className="text-sm font-semibold block md:hidden lg:block">
                          {item.company_city}
                        </h4>
                        <p className="text-sm text-[#A7A7A7]">
                          {handleDateCreated(item.updated_at)}
                        </p>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FindJob;
