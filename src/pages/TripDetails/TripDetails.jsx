import { CaretRightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import BookTripInfo from "../../component/BookedTripInfo/BookTripInfo";

const TripDetails = () => {
  const customSeparator = (
    <span className="text-yellow-500 font-extrabold text-xl">
      <CaretRightOutlined />
    </span>
  );

  return (
    <>
      <div className="max-w-[1340px] w-full mx-auto px-4 lg:px-8 xl:px-12 mt-24">
        <Breadcrumb
          separator={customSeparator}
          className=" my-8 font-semibold text-lg"
          items={[
            {
              title: <a href="">My Account</a>,
            },

            {
              title: "My Trips",
            },
          ]}
        />
        <div className="border-[1px] border-black rounded-lg p-3 ">
          {/* Header */}
          <div className="flex-1 flex flex-col w-96">
            <div className="flex items-center justify-between">
              <div className="flex w-full flex-col justify-center-center  gap-2 text-xl font-semibold border-black">
                <div className="flex  justify-between items-center  pb-4">
                  <div className="px-16 pt-4 flex items-center">
                    <img
                      src="/noto-v1_airplane.png"
                      alt="plane"
                      className="w-6 h-6 mr-2"
                    />
                    My Trip Details
                    <img
                      src="/Line 2.png"
                      alt="line"
                      className="w-12 h-1.5  ml-2"
                    />
                  </div>
                </div>
                {/* <span className="mx-2 text-gray-400 w-full">&#8212;</span> */}
              </div>
            </div>
          </div>
          <BookTripInfo />
        </div>
      </div>
    </>
  );
};

export default TripDetails;
