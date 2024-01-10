import axios from "axios";
import {
  Label,
  TextInput,
  Button,
  Radio,
  Textarea,
  Select,
} from "flowbite-react";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const FormJob = () => {
  let { ID_GAMES } = useParams();
  const { state, handleFunction } = useContext(GlobalContext);
  const { input, setInput } = state;
  const { handleSubmit, handleInput } = handleFunction;

  useEffect(() => {
    if (ID_GAMES !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES}`)
        .then((res) => {
          let data = res.data;

          setInput({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <div className="content md:px-[3rem] px-0 mt-0 md:-mt-9">
      <h4 className="text-2xl font-medium mb-5">Form Jobs</h4>
      <div className="flex items-center w-full space-x-4 mt-5">
        <div className="relative w-[100%] px-4 py-6 bg-white shadow-lg">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label value="Title" />
              </div>
              <TextInput
                type="text"
                placeholder="Full Stack Develo.."
                name="title"
                onChange={handleInput}
                value={input.title}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Description" />
              </div>
              <Textarea
                placeholder="Membuat dan mengedit.."
                name="job_description"
                onChange={handleInput}
                value={input.job_description}
                required={true}
                rows={4}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Qualification" />
              </div>
              <TextInput
                type="text"
                placeholder="Harus bisa.."
                name="job_qualification"
                onChange={handleInput}
                value={input.job_qualification}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Type" />
              </div>
              <TextInput
                type="text"
                placeholder="Full Time.."
                name="job_type"
                onChange={handleInput}
                value={input.job_type}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Tenure" />
              </div>
              <TextInput
                type="text"
                placeholder="1 tahun.."
                name="job_tenure"
                onChange={handleInput}
                value={input.job_tenure}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Status" />
              </div>
              <Select
                name="job_status"
                value={input.job_status}
                onChange={handleInput}
                required={true}
              >
                <option value={1}>Dibuka</option>
                <option value={0}>Ditutup</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Company Name" />
              </div>
              <TextInput
                type="text"
                placeholder="Gojek.."
                name="company_name"
                onChange={handleInput}
                value={input.company_name}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Company Image URL" />
              </div>
              <TextInput
                type="text"
                placeholder="Image URL.."
                name="company_image_url"
                onChange={handleInput}
                value={input.company_image_url}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Company City" />
              </div>
              <TextInput
                type="text"
                placeholder="Surabaya.."
                name="company_city"
                onChange={handleInput}
                value={input.company_city}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Salary Min" />
              </div>
              <TextInput
                type="number"
                name="salary_min"
                onChange={handleInput}
                value={input.salary_min}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Salary Max" />
              </div>
              <TextInput
                type="number"
                name="salary_max"
                onChange={handleInput}
                value={input.salary_max}
                required={true}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="px-5 py-2 bg-primary text-white rounded-md"
              >
                Submit
              </button>
              <button
                type="button"
                className="px-5 py-2 bg-blue-600 text-white rounded-md"
              >
                <Link to="/dashboard/list-job-vacancy">Kembali</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormJob;
