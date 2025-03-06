import React from "react";
import image from "../../assets/images/Services/trator-rocando.jpg";

const Services = () => {
  return (
    <div id="services">
      <h2 className="text-2xl text-center mt-12 mb-4 font-bold sm:text-3xl">
        Serviços que Ofereço
      </h2>
      <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde harum
        doloremque corrupti?
      </p>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        <div className="w-64 rounded-md shadow-xl">
          <img
            src={`${image}`}
            alt="Service"
            className="w-full h-40 object-cover rounded-t-md"
          />
          <div className="p-4 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Service Title</h3>
            <p className="text-gray-600 mb-4 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis fuga voluptatem odit officiis animi cupiditate{" "}
            </p>
            <button className="bg-redf text-white py-1 px-2 cursor-pointer rounded hover:bg-red-600">
              View Service
            </button>
          </div>
        </div>
        <div className="w-64 rounded-md shadow-xl">
          <img
            src={`${image}`}
            alt="Service"
            className="w-full h-40 object-cover rounded-t-md"
          />
          <div className="p-4 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Service Title</h3>
            <p className="text-gray-600 mb-4 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis fuga voluptatem odit officiis animi cupiditate{" "}
            </p>
            <button className="bg-redf text-white py-1 px-2 cursor-pointer rounded hover:bg-red-600">
              View Service
            </button>
          </div>
        </div>
        <div className="w-64 rounded-md shadow-xl">
          <img
            src={`${image}`}
            alt="Service"
            className="w-full h-40 object-cover rounded-t-md"
          />
          <div className="p-4 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Service Title</h3>
            <p className="text-gray-600 mb-4 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis fuga voluptatem odit officiis animi cupiditate{" "}
            </p>
            <button className="bg-redf text-white py-1 px-2 cursor-pointer rounded hover:bg-red-600">
              View Service
            </button>
          </div>
        </div>
        <div className="w-64 rounded-md shadow-xl">
          <img
            src={`${image}`}
            alt="Service"
            className="w-full h-40 object-cover rounded-t-md"
          />
          <div className="p-4 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Service Title</h3>
            <p className="text-gray-600 mb-4 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis fuga voluptatem odit officiis animi cupiditate{" "}
            </p>
            <button className="bg-redf text-white py-1 px-2 cursor-pointer rounded hover:bg-red-600">
              View Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
