import axios from "axios";
import { createContext, useState } from "react";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Google from "../assets/brands/google.png";
import Gojek from "../assets/brands/gojek.png";
import Meta from "../assets/brands/meta.png";
import Amazon from "../assets/brands/amazon.png";
import Grab from "../assets/brands/grab.png";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [jobs, setJobs] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [filter, setFilter] = useState({
    company_city: "",
    company_name: "",
    job_type: "",
  });
  const [countData, setCountData] = useState(0);
  const [hamburger, setHamburger] = useState(false);
  const [types, setTypes] = useState(null);
  const [brands, setBrands] = useState([Google, Gojek, Meta, Grab, Amazon]);
  const [user, setUser] = useState(
    Cookies.get("user_data") ? JSON.parse(Cookies.get("user_data")) : null
  );
  const [input, setInput] = useState({
    search: "",
    current_password: "",
    email: "",
    password: "",
    new_password: "",
    new_confirm_password: "",
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 1,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });

  let navigate = useNavigate();

  const fetchData = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => setJobs(res.data.data))
      .catch((err) => {});

    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        let jobTypes = res.data.data.map((job) => job.job_type);
        let uniqueJobTypes = [...new Set(jobTypes)];
        setTypes(uniqueJobTypes);
      })
      .catch((err) => {});
  };

  const countList = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => setCountData(res.data.data.length))
      .catch((err) => {});
  };

  const detailData = (event) => {
    let ID_GAMES = parseInt(event.target.value);
    setCurrentId(ID_GAMES);
    navigate(`/job-vacancy/${ID_GAMES}`);
  };

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleChangePassword = (event) => {
    event.preventDefault();

    let { current_password, new_password, new_confirm_password } = input;
    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password",
        {
          current_password,
          new_password,
          new_confirm_password,
        },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((res) => {
        setFetchStatus(true);
      })
      .catch((err) => {});

    setInput({
      current_password: "",
      new_password: "",
      new_confirm_password: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = input;

    if (currentId === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/dashboard/list-job-vacancy");
        })
        .catch((err) => {});
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/dashboard/list-job-vacancy");
        })
        .catch((err) => {});
    }

    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
  };

  const handleEdit = (event) => {
    let ID_GAMES = parseInt(event.target.value);
    setCurrentId(ID_GAMES);
    navigate(`/dashboard/list-job-vacancy/edit/${ID_GAMES}`);
  };

  const handleDelete = (event) => {
    let ID_GAMES = parseInt(event.target.value);
    axios
      .delete(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES}`,
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((res) => setFetchStatus(true))
      .catch((err) => {});
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = input;

    axios
      .post(`https://dev-example.sanbercloud.com/api/login`, {
        email,
        password,
      })
      .then((res) => {
        let { token, user } = res.data;
        Cookies.set("token", token, { expires: 3 });
        Cookies.set("user_data", JSON.stringify(user), { expires: 3 });
        setFetchStatus(true);
        navigate("/");
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    let { name, image_url, email, password } = input;

    if (password.length >= 0) {
      axios
        .post(`https://dev-example.sanbercloud.com/api/register`, {
          name,
          image_url,
          email,
          password,
        })
        .then((res) => {
          let { token, user } = res.data;
          Cookies.set("token", token, { expires: 3 });
          Cookies.set("user_data", JSON.stringify(user), { expires: 3 });
          setFetchStatus(true);
          navigate("/");
        });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      .then((res) => {
        let searchData = res.data.data.filter((item) => {
          return Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(input.search.toLowerCase());
        });
        setJobs(searchData);
      })
      .catch((err) => {});
  };

  const handleFilter = (event) => {
    event.preventDefault();
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      .then((res) => {
        let data = res.data.data;
        let filteredData = data.filter((item) => {
          return (
            item.company_city.toLowerCase() ===
              filter.company_city.toLowerCase() &&
            item.company_name.toLowerCase() ===
              filter.company_name.toLowerCase() &&
            item.job_type.toLowerCase() === filter.job_type.toLowerCase()
          );
        });
        setJobs(filteredData);
      })
      .catch((err) => {});
  };

  const handleChangeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const handleDetailType = (event) => {
    let type = event.target.value;
    setFilterType(type);

    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setJobs(res.data.data.filter((res) => res.job_type === type));
      });
  };

  const handleDateCreated = (date) => {
    const currentDate = moment();
    const previousDate = moment(date);
    const diffInMinutes = currentDate.diff(previousDate, "minutes");
    const diffInHours = currentDate.diff(previousDate, "hours");
    const diffInDays = currentDate.diff(previousDate, "days");
    const diffInSeconds = currentDate.diff(previousDate, "seconds");

    if (diffInSeconds < 60) {
      return `${diffInSeconds} detik yang lalu`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} menit yang lalu`;
    } else if (diffInHours < 24) {
      return `${diffInHours} jam yang lalu`;
    } else {
      return `${diffInDays} hari yang lalu`;
    }
  };

  const averageSalary = (min, max) => {
    let data = [min, max];
    const average = data.reduce((acc, current) => acc + current) / data.length;
    return average;
  };

  const handleRupiahFormat = (amount) => {
    return amount?.toLocaleString("id-ID");
  };

  const limitString = (kalimat, maxLength) => {
    if (kalimat?.length > maxLength) {
      return `${kalimat?.substring(0, maxLength)}..`;
    } else {
      return `${kalimat}`;
    }
  };

  let state = {
    jobs,
    setJobs,
    fetchStatus,
    setFetchStatus,
    types,
    setTypes,
    input,
    setInput,
    navigate,
    hamburger,
    setHamburger,
    user,
    setUser,
    brands,
    filter,
    setFilter,
    countData,
    setCountData,
    filterType,
    setFilterType,
  };

  let handleFunction = {
    fetchData,
    detailData,
    handleSubmit,
    handleEdit,
    handleDelete,
    limitString,
    handleInput,
    handleLogin,
    handleRegister,
    handleDateCreated,
    averageSalary,
    handleRupiahFormat,
    handleSearch,
    handleChangePassword,
    handleFilter,
    handleChangeFilter,
    countList,
    handleDetailType,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
