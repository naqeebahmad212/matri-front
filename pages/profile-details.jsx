import AdminLayout from "@/components/AdminLayout";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const ProfileDetails = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-6 ">
        <div className=" w-full xl:w-[20%] xl:h-[240px]  border border-[#000] border-opacity-[0.08]  bg-white rounded-[10px] p-4 ">
          {item && item.userImages.length > 0 ? (
            <img
              src={item.userImages[0]}
              alt="Profile Image"
              className="block mx-auto h-10 w-10 rounded-full"
            />
          ) : (
            <div className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full mx-auto">
              {item && item.name[0]}
            </div>
          )}

          <h1 className="text-[#000] text-[16px] font-[600] text-center mt-3">
            Jannie Regal
          </h1>
          <p className="text-[#82868e] text-[16px] text-center mt-1">
            User567@email.com
          </p>

          <div className="flex flex-row justify-center gap-3 mt-3 ">
            <div className="rounded-[50%] border border-[#ED6C0E]">
              <BiSolidPhoneCall className="   text-[40px] p-2 text-[#ED6C0E]" />
            </div>
            <div className="rounded-[50%] border border-[#ED6C0E]">
              <IoMdMail className="   text-[40px] p-2 text-[#ED6C0E]" />
            </div>
            <div className="rounded-[50%] border border-[#ED6C0E]">
              <BsFillImageFill className=" text-[40px] p-2 text-[#ED6C0E]" />
            </div>
          </div>
        </div>
        <div className="w-fll xl:w-[80%] ">
          <div className="bg-white rounded-[10px]  pt-4 ">
            <div className=" border-b border-b-[#e6e6e6]">
              <h1 className="text-[#ED6C0E] text-[18px] font-[600]  mx-4 mb-3">
                Profile Details
              </h1>
            </div>

            <div>
              <div className=" p-3 md:px-5 md:pt-5">
                <h1 className="text-[#000] text-[18px] font-[600]">
                  About Ayesha Khan
                </h1>

                <div className="mt-4 border border-[#e6e6e6] p-4 rounded-[10px]">
                  <p className="text-[#000] text-opacity-[0.77] font-[500]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </div>
              </div>

              <div className=" p-3 md:px-5 md:pt-5">
                <h1 className="text-[#000] text-[18px] font-[600]">
                  Basic Information
                </h1>

                <div className="mt-4 border border-[#e6e6e6]  py-6 sm:px-4 rounded-[10px]">
                  <div className="flex justify-between xl:justify-start">
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Name
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Ayesha Khan
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Age
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        23
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-5">
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                        Marital Status
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Never Married
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Gender
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Female
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-5">
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                        Height
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start ">
                        6 Ft 7 inch
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Caste
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Mughal
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-5">
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Profile Created for
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Own
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Any Disability
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        No
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" p-3 md:px-5 md:pt-5">
                <h1 className="text-[#000] text-[18px] font-[600] ">
                  Contact Details
                </h1>

                <div className="mt-4 border border-[#e6e6e6]  py-6 sm:px-4 rounded-[10px] ">
                  <div className="flex">
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                        Phone Number
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        +91 3454345 6
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Email
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Person@email.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" p-3 md:px-5 md:pt-5">
                <h1 className="text-[#000] text-[18px] font-[600] ">
                  Location Information
                </h1>

                <div className="mt-4 border border-[#e6e6e6]  py-6 sm:px-4 rounded-[10px] ">
                  <div className="flex gap-1 md:gap-0">
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                        Present Address
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Gwalior, Madhya Pradesh, India
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Permenent Address
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Gwalior, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" p-3 md:px-5 md:pt-5">
                <h1 className="text-[#000] text-[18px] font-[600] ">
                  Education Career
                </h1>

                <div className="mt-4 border border-[#e6e6e6]  py-6 sm:px-4 rounded-[10px] ">
                  <div className="flex">
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                        Highest Education
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        M.Phil Chemistry
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Occupation
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Student
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-full xl:w-[50%] mt-8">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                        Employed in
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        Not Working
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%] mt-8">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Annual Income
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        2 Lac
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-6 md:pt-5">
                  <h1 className="text-[#000] text-[18px] font-[600]   ">
                    Partner Expectation
                  </h1>

                  <div className="mt-4 border border-[#e6e6e6]  py-6 sm:px-4 rounded-[10px]">
                    <div className="flex justify-between xl:justify-start">
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Marital Expectation
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          Ayesha Khan
                        </p>
                      </div>
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Cast
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          Mughal
                        </p>
                      </div>
                    </div>

                    <div className="flex mt-5">
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                          Age
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          25 to 40
                        </p>
                      </div>
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Height
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          5 Ft 8 Inch
                        </p>
                      </div>
                    </div>

                    <div className="flex mt-5">
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                          Education
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start ">
                          M.Phil
                        </p>
                      </div>
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Occupation
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          Business Administer
                        </p>
                      </div>
                    </div>

                    <div className="flex mt-5">
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Mother Tongue
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          Hindi
                        </p>
                      </div>
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Annual Income
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          Rs. 20-35 Lakh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileDetails.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default ProfileDetails;
