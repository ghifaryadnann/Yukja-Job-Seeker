import profil from "../../assets/James Gomam.png";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Cookies from "js-cookie";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ListJob = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { fetchStatus, setFetchStatus, jobs, input, filter } = state;
  const {
    fetchData,
    limitString,
    handleRupiahFormat,
    handleEdit,
    handleDelete,
    handleSearch,
    handleFilter,
    handleChangeFilter,
    handleInput,
  } = handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div className="content md:px-[3rem] px-0 mt-0 md:-mt-9">
      <h4 className="text-2xl font-medium mb-5">List Jobs</h4>
      <div className="w-[84%] flex flex-wrap items-center justify-between">
        <div>
          <Link
            to="/dashboard/list-job-vacancy/create"
            className="text-sm bg-primary text-white rounded-md px-6 py-2"
          >
            Add New Job
          </Link>
        </div>
        <div>
          <form
            onSubmit={handleFilter}
            autoComplete="off"
            className="flex flex-wrap items-center gap-2 mt-5 md:0"
          >
            <input
              type="text"
              placeholder="Nama Pekerjaan"
              name="company_name"
              onChange={handleChangeFilter}
              value={filter.company_name}
              className="border-transparent focus:border-transparent py-1 w-full md:w-44"
            />
            <input
              type="text"
              placeholder="Kota"
              name="company_city"
              onChange={handleChangeFilter}
              value={filter.company_city}
              className="border-transparent focus:border-transparent py-1 w-full md:w-32"
            />
            <input
              type="text"
              placeholder="Perusahaan"
              name="job_type"
              onChange={handleChangeFilter}
              value={filter.job_type}
              className="border-transparent focus:border-transparent py-1 w-full md:w-36"
            />
            <div className="flex flex-nowrap md:hidden gap-2 w-full">
              <button
                type="submit"
                className="text-white bg-dark py-[0.4rem] w-full"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => fetchData()}
                className="text-white bg-red-600 py-[0.4rem] w-full"
              >
                Reset
              </button>
            </div>
            <button
              type="submit"
              className="text-white bg-dark px-3 py-[0.4rem] md:block hidden"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => fetchData()}
              className="text-white bg-red-600 px-3 py-[0.4rem] md:block hidden"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center w-full space-x-4 mt-5">
        <div className="relative w-full md:w-[84%] px-4 py-6 bg-white shadow-lg">
          <Table hoverable={true} className="text-[1rem]">
            <Table.Head>
              <Table.HeadCell>No</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Qualification</Table.HeadCell>
              <Table.HeadCell>Type</Table.HeadCell>
              <Table.HeadCell>Tenure</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Company Name</Table.HeadCell>
              <Table.HeadCell>Company Image</Table.HeadCell>
              <Table.HeadCell>Company City</Table.HeadCell>
              <Table.HeadCell>Salary Min</Table.HeadCell>
              <Table.HeadCell>Salary Max</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-[0.8rem]">
              {jobs !== null &&
                jobs.map((item, index) => {
                  return (
                    <Table.Row className="bg-white" key={index}>
                      <Table.Cell>{index + 1}</Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {limitString(item.title, 8)}
                      </Table.Cell>
                      <Table.Cell>
                        {limitString(item.job_description, 5)}
                      </Table.Cell>
                      <Table.Cell>
                        {limitString(item.job_qualification, 5)}
                      </Table.Cell>
                      <Table.Cell>{item.job_type}</Table.Cell>
                      <Table.Cell className="whitespace-nowrap">
                        {item.job_tenure}
                      </Table.Cell>
                      <Table.Cell>
                        {item.job_status != 0 ? "Dibuka" : "Ditutup"}
                      </Table.Cell>
                      <Table.Cell>
                        {limitString(item.company_name, 8)}
                      </Table.Cell>
                      <Table.Cell>
                        <img
                          src={item.company_image_url}
                          className="max-w-[4rem]"
                        />
                      </Table.Cell>
                      <Table.Cell>
                        {limitString(item.company_city, 5)}
                      </Table.Cell>
                      <Table.Cell>
                        {handleRupiahFormat(item.salary_min)}
                      </Table.Cell>
                      <Table.Cell>
                        {handleRupiahFormat(item.salary_max)}
                      </Table.Cell>
                      <Table.Cell className="flex flex-nowrap gap-2">
                        <button
                          type="button"
                          value={item.id}
                          onClick={handleEdit}
                          className="bg-blue-600 text-white py-2 px-3 font-semibold rounded-md"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          value={item.id}
                          onClick={handleDelete}
                          className="bg-red-600 text-white py-2 px-3 font-semibold rounded-md"
                        >
                          Delete
                        </button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default ListJob;
