"use client";
import React, { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidEdit, BiFilterAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEye, AiFillPlusCircle } from "react-icons/ai";
import { FaUserCheck, FaUserEdit, FaUser } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { ImUserCheck } from "react-icons/im";
import { Select, Space } from "antd";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";
import { Pagination } from "antd";
import { Modal } from "antd";
import EditModal from "../components/modals/editModal";
import DeleteModal from "../components/modals/deleteModal";

const RenewMembership = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const divRef = useRef();
  const Option = Select;

  const handleShow = (id) => {
    setShow(!show);
    setSelected(id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  const selectData = [
    {
      value: "active",
      icon: <ImUserCheck className="h-4 w-10 text-[#82868E]" />,
      heading: "Active",
    },
    {
      value: "feature",
      icon: <FaUserEdit className="h-4 w-10 text-[#82868E]" />,
      heading: "Feature",
    },
    {
      value: "paid",
      icon: <FaUserCheck className="h-4 w-10 text-[#82868E]" />,
      heading: "Paid",
    },
    {
      value: "suspended",
      icon: <FaUserXmark className="h-4 w-10 text-[#82868E]" />,
      heading: "Suspended",
    },
    {
      value: "all",
      icon: <FaUser className="h-4 w-10 text-[#82868E]" />,
      heading: "All",
    },
  ];

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return (
        <div className="flex items-center justify-center gap-1 mr-3 select-none ">
          <LiaLongArrowAltLeftSolid className="text-[20px]" />

          <a className="flex justify-start text-[#000] font-[500]">Previous</a>
        </div>
      );
    }
    if (type === "next") {
      return (
        <div className="flex items-center justify-center gap-1 ml-3 mr-3 select-none ">
          <a className="flex justify-start text-[#000] font-[500]">Next</a>
          <LiaLongArrowAltRightSolid className="text-[20px]" />
        </div>
      );
    }
    return originalElement;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleDeleteOk = () => {
    setIsDeleteModalOpen(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        title="Edit Event"
        centered
        closable={true}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EditModal onOk={handleOk} onCancel={handleCancel} />
      </Modal>
      <Modal
        open={isDeleteModalOpen}
        title="Delete Event"
        centered
        closable={true}
        footer={false}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      >
        <DeleteModal onOk={handleDeleteOk} onCancel={handleDeleteCancel} />
      </Modal>
      <div className="min-h-[calc(100vh-81px)] border border-borderColor border-opacity-[0.07] p-4">
        <div className="flex flex-col justify-between sm:flex-row ">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex flex-col items-center w-full gap-3 sm:w-auto sm:flex-row">
              <div className="w-full sm:w-auto">
                <Select
                  placeholder="select one"
                  optionLabelProp="heading"
                  bordered={false}
                  options={selectData}
                  defaultValue={"Active"}
                  optionRender={(option) => (
                    <Space>
                      <span role="img" aria-label={option.data.heading}>
                        {option.data.icon}
                      </span>
                      {option.data.heading}
                    </Space>
                  )}
                />
              </div>

              <button className="w-full sm:w-[109px] h-[50px] text-[14px] bg-[#ED6C0E] rounded-[5px] text-white flex justify-center items-center  gap-1">
                Fillter
                <BiFilterAlt className="text-[22px] text-white " />
              </button>
            </div>
          </div>

          <div>
            <button className=" mt-3 sm:mt-0 w-full sm:w-[185px] h-[50px] text-[14px] bg-[#ED6C0E] rounded-[5px] text-white flex justify-center items-center  gap-2">
              <AiFillPlusCircle className="text-[22px] text-white " />
              Add Member
            </button>
          </div>
        </div>

        <div className="overflow-x-auto mt-7">
          <table className="min-w-full bg-white ">
            <thead className="ltr:text-left rtl:text-right border-t border-t-[rgba(0, 0, 0, 0.07)] p-4 ">
              <tr className="">
                <th className="whitespace-nowrap px-5 py-4  text-[16px]    text-[#363B49]  font-[400]">
                  <input type="checkbox" className="accent-eventsColorText" />
                </th>
                <th className="whitespace-nowrap px-5 py-4  text-[16px]    text-[#363B49]  font-[400]">
                  User Name
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-[16px]  text-[#363B49]  font-[400] ">
                  Gender
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-[16px]  text-[#363B49]  font-[400] ">
                  Email Address
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-[16px]  text-[#363B49]  font-[400] ">
                  Mobile Number
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-[16px]  text-[#363B49]  font-[400] ">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-4 text-[16px]  text-[#363B49]  font-[400] ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="home-table ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <tr className="border border-[rgba(0, 0, 0, 0.07)]" key={index}>
                  <td className="whitespace-nowrap p-4   font-medium text-[#82868e] ">
                    <input type="checkbox" className="accent-eventsColorText" />
                  </td>
                  <td className="whitespace-nowrap p-4 text-[14px]  text-blackColor font-[500] flex items-center gap-4  max-xl:w-[200px] ">
                    <img src={"/images/tableProfile.png"} alt="table-img" />
                    <h1>
                      Nolan Mango
                      <br />{" "}
                      <p className="text-[13px] text-[#ED6C0E] text-opacity-[0.71]">
                        #657678
                      </p>
                    </h1>
                  </td>
                  <td className="whitespace-nowrap p-4 font-roboto text-black font-[500] max-xl:w-[300px] ">
                    Male
                  </td>
                  <td className="whitespace-nowrap p-4 font-roboto  text-blackColor font-[500] max-xl:w-[300px]  ">
                    sekiya@verizon.net
                  </td>
                  <td className="whitespace-nowrap p-4  font-roboto text-blackColor font-[500] max-xl:w-[300px]  ">
                    +7 (371) 564-27-29
                  </td>
                  <td className="whitespace-nowrap p-4   text-blackColor font-[500] max-xl:w-[300px]  ">
                    <button
                      className={`w-[108px] h-[40px] font-roboto border border-[rgba(0, 0, 0, 0.07)] p-2  rounded-lg bg-[#CFD8ED] text-[#1240B4]`}
                    >
                      Paid
                    </button>
                  </td>
                  <td className="whitespace-nowrap p-4  text-blackColor font-[500] max-xl:w-[300px]  relative">
                    <button
                      className="border border-[rgba(0, 0, 0, 0.07)] p-2 bg-[248, 249, 255, 0.72] rounded-lg"
                      onClick={() =>
                        setTimeout(() => {
                          handleShow(index);
                        }, 100)
                      }
                    >
                      <BsThreeDotsVertical />
                    </button>
                    {show && selected === index && (
                      <div
                        ref={divRef}
                        className="absolute top-[60px] left-[-30px] max-[1759px]:left-[-90px] w-[142px] bg-white border border-[rgba(194, 194, 206, 0.22)] p-4 flex flex-col gap-4 rounded-md z-20 shadow-dropDownBoxShadow "
                      >
                        <div className="flex items-center gap-3 cursor-pointer">
                          <AiOutlineEye className="text-[#696974]" />
                          <p className="text-[#696974] font-normal text-[14px]">
                            View Profile
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-3 cursor-pointer"
                          onClick={showModal}
                        >
                          <BiSolidEdit className="text-[#696974]" />
                          <p className="text-[#696974] font-normal text-[14px]">
                            Edit Profile
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-3 cursor-pointer"
                          onClick={showDeleteModal}
                        >
                          <RiDeleteBin6Line className="text-[#696974] " />
                          <p className="text-[#696974] font-normal text-[14px]">
                            Delete Profile
                          </p>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center my-6">
          <Pagination defaultCurrent={3} total={30} itemRender={itemRender} />
        </div>
      </div>
    </>
  );
};

export default RenewMembership;
