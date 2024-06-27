import AdminLayout from "@/components/AdminLayout";
import { backendUrl } from "@/url";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const ProfileDetails = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const [user, setUser] = useState();
  const { id } = router.query;

  if (router.isFallback) {
    <div>loading...</div>;
  }

  useEffect(() => {
    fetch(backendUrl + `/admin/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-6 ">
        <div className=" w-full xl:w-[20%] xl:h-[240px]  border border-[#000] border-opacity-[0.08]  bg-white rounded-[10px] p-4 ">
          {user && user.userImages.length > 0 ? (
            <img
              src={user.userImages[0]}
              alt="Profile Image"
              className="block mx-auto h-10 w-10 rounded-full"
            />
          ) : (
            <div className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full mx-auto">
              {user && user.name[0]}
            </div>
          )}

          <h1 className="text-[#000] text-[16px] font-[600] text-center mt-3">
            {user && user.name}
          </h1>
          <p className="text-[#82868e] text-[16px] text-center mt-1">
            {user && user.email}
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
                  About {user && user.name}
                </h1>

                {/* <div className="mt-4 border border-[#e6e6e6] p-4 rounded-[10px]">
                  <p className="text-[#000] text-opacity-[0.77] font-[500]"></p>
                </div> */}
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
                        {user && user.name}
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Age
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        {user && user.age}
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-5">
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                        Marital Status
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        {user && user.maritalStatus}
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Gender
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        {user && user.gender}
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-5">
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                        Height
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start ">
                        {user && user.height}
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Caste
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        {user && user.cast}
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
                        {user && user.phone}
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Email
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        {user && user.email}
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
                        {user && user.partnerPreference.education}
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%]">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Occupation
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        {user && user.occupation}
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-full xl:w-[50%] mt-8">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                        Employed in
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        {user && user.employedIn}
                      </p>
                    </div>
                    <div className="w-full xl:w-[50%] mt-8">
                      <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                        Annual Income
                      </h1>

                      <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                        {user && user.annualIncome}
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
                          {user && user.name}
                        </p>
                      </div>
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Cast
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          {user && user.partnerPreference.partnerSect}
                        </p>
                      </div>
                    </div>

                    <div className="flex mt-5">
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                          Age
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          {user && user.partnerPreference.partnerAge}
                        </p>
                      </div>
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Height
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          {user && user.partnerPreference.partnerHeight}
                        </p>
                      </div>
                    </div>

                    <div className="flex mt-5">
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start ">
                          Education
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start ">
                          {user && user.partnerPreference.education}
                        </p>
                      </div>
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Occupation
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          {user && user.partnerPreference.partnerOccupation}
                        </p>
                      </div>
                    </div>

                    <div className="flex mt-5">
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Mother Tongue
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          {user && user.partnerPreference.partnerMotherTongue}
                        </p>
                      </div>
                      <div className="w-full xl:w-[50%]">
                        <h1 className="text-[#000] text-opacity-[0.77] text-[16px] text-center sm:text-start">
                          Annual Income
                        </h1>

                        <p className="text-[#000] text-[16px] font-[500] mt-1 text-center sm:text-start">
                          {user && user.partnerPreference.partnerAnnualIncome}
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
