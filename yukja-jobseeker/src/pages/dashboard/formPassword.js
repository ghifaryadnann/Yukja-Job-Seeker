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

const FormPassword = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { input, setInput } = state;
  const { handleChangePassword, handleInput } = handleFunction;

  return (
    <div className="content md:px-[3rem] px-0 mt-0 md:-mt-9">
      <h4 className="text-2xl font-medium mb-5">Form Password</h4>
      <div className="flex items-center w-full space-x-4 mt-5">
        <div className="relative w-[100%] px-4 py-6 bg-white shadow-lg">
          <form className="flex flex-col gap-4" onSubmit={handleChangePassword}>
            <div>
              <div className="mb-2 block">
                <Label value="Password Sekarang" />
              </div>
              <TextInput
                type="password"
                name="current_password"
                onChange={handleInput}
                value={input.current_password}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Password Baru" />
              </div>
              <TextInput
                type="password"
                name="new_password"
                onChange={handleInput}
                value={input.new_password}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Konfirmasi Password Baru" />
              </div>
              <TextInput
                type="password"
                name="new_confirm_password"
                onChange={handleInput}
                value={input.new_confirm_password}
                required={true}
              />
            </div>
            <button
              type="submit"
              className="w-full lg:w-24 py-2 bg-primary text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormPassword;
