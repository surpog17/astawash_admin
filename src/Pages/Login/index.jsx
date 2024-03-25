import React from "react";
import Input from "../../Components/Fields/Input";
import ButtonWithIcon from "../../Components/Fields/Button";
import Astawash from "../../assets/PNG/Astawash-Logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Index() {
  return (
    <div className="bg-primary min-h-screen flex justify-center items-center">
      <div className="font-archivo grid gap-3">
        <div className="items-center">
          <div className="flex flex-col items-center gap-2 my-5">
            <img src={Astawash} className="w-96" alt="Astawash Logo" />
            <p className="text-3xl">One Reminder at a time.</p>
          </div>

          <Input
            className="w-full  border border-gray-300 rounded-md focus:outline-none bg-white p-2 text-gray-500"
            type={"text"}
            label={"Email"}
            labelClass="text-md "
            placeholder={"johndoe@gmail.com"}
          />
          <Input
            type={"password"}
            label={"Password"}
            labelClass="text-md"
            className="w-full  border border-gray-300 rounded-md focus:outline-none bg-white p-2 text-gray-500"
            placeholder={"*******"}
          />
          <ButtonWithIcon
            text={"Login"}
            className={
              "bg-secondary text-white text-lg w-full flex justify-center rounded-md p-2"
            }
            icon={<IoIosArrowRoundForward className="text-white" size={24} />}
          />
        </div>
      </div>
    </div>
  );
}
