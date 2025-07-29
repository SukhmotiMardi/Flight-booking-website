import EditProfileContent from "../../component/EditProfileContent/EditProfileContent";
import { ChevronLeft, KeyRound, LogOut, Pencil } from "lucide-react";

const EditProfile = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto my-10 pl-[98px] pr-[82px]">
      <div className="mx-auto mb-3 bg-[#FFFFFF] flex items-start justify-center ">
        <div className="flex w-full flex-row rounded-[26px] border-[1.5px] border-[#063D5E] top-[35px] bg-white shadow-sm relative">
          {/* Sidebar */}

          <div className="w-64 bg-white border-r border-black rounded-l-3xl  py-8">
            <div className="mb-8 flex text-lg font-semibold">
              <ChevronLeft
                absoluteStrokeWidth
                className="mx-4 cursor-pointer"
              />
              Settings
            </div>{" "}
            <hr className="mb-4 border-black" />
            <nav className="flex flex-col gap-6">
              <div className="flex items-center gap-3 font-semibold  bg-blue-50 rounded px-3 py-2">
                <span className="material-symbols-light">
                  <Pencil />
                </span>
                Edit profile
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:font-semibold cursor-pointer px-3 py-2">
                <span className="material-symbols-light">
                  <KeyRound />
                </span>
                Reset Password
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:font-semibold cursor-pointer px-3 py-2">
                <span className="material-symbols-light">
                  <LogOut />
                </span>
                Logout
              </div>
            </nav>
          </div>

          {/* Main Content */}

          <div className="flex-1 flex flex-col w-96">
            <div className="flex items-center justify-between ">
              <div className="flex w-full flex-col justify-center-center  gap-2 text-xl font-semibold border-black">
                <div className="grid grid-cols-2   items-center border-b border-[black] pb-4 pl-[58px] pr-[58px]  ">
                  <div className=" pt-4 col-span-1 flex items-center">
                    <img
                      src="/noto-v1_airplane.png"
                      alt="plane"
                      className="w-6 h-6"
                    />
                    Edit Profile
                    <img
                      src="/Line 2.png"
                      alt="line"
                      className="w-12 h-2  ml-2"
                    />
                  </div>
                  <img
                    src="/public/profile-dummy-image.jpg"
                    alt="Profile"
                    className="w-14 h-14 rounded-full   ml-auto  mt-5 object-cover border"
                  />
                </div>
                {/* <span className="mx-2 text-gray-400 w-full">&#8212;</span> */}
                <EditProfileContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
