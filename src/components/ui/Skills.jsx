import React from "react";
import { Star, TrendingUp, Clock } from "lucide-react";
import SkillsImageSlider from "./SkillsImageSlider";

import acService from "/public/Images/Services/ac-service.jpg";
import bikeService from "/public/Images/Services/bike-service.jpg";
import carService from "/public/Images/Services/car-service.jpg";
import gym from "/public/Images/Services/gym.jpg";

const courses = [
  {
    title: "AC Parts Electrician",
    instructor: "Jon Youshaei",
    description:
      "World's top marketer by Forbes, Entrepreneur and Inc Magazines; Writer for Time Magazine with best-selling e-courses.",
    rating: 4.9,
    reviews: 1036,
    duration: "1 month",
    price: "৳ 4500",
    badge: "Best Seller",
    image: acService,
  },
  {
    title: "BiCycle Expert",
    instructor: "Tara McMullin",
    description:
      "Tara McMullin is the founder of CoCommercial, a digital small business community, podcast host, and creator of Quiet Power Strategy®.",
    rating: 4.0,
    reviews: 211,
    duration: "1.5 months",
    price: "৳ 6500",
    badge: "New",
    image: bikeService,
  },
  {
    title: "Car Driving",
    instructor: "Jon Youshaei",
    description:
      "World's top marketer by Forbes, Entrepreneur and Inc Magazines; Writer for Time Magazine with best-selling e-courses.",
    rating: 4.9,
    reviews: 722,
    duration: "3 months",
    price: "৳ 7600",
    badge: "Best Seller",
    image: carService,
  },
  {
    title: "Gym Trainee",
    instructor: "Abul Hasan",
    description:
      "Ari is an entrepreneur, author, and productivity coach with a focus on optimizing efficiency and automation.",
    rating: 4.5,
    reviews: 10,
    duration: "6 months",
    price: "৳ 3600",
    badge: "New",
    image: gym,
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="mt-10">
      <div className="border rounded-lg shadow-sm p-4 hover:shadow-lg transition">
        <img src={course.image} className="mb-5" alt="" />
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase text-gray-500">
            SKILLS & COURSES
          </span>
          {course.badge && (
            <span className="text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded-full">
              {course.badge}
            </span>
          )}
        </div>
        <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
        <p className="text-sm text-gray-700 mb-2">{course.instructor}</p>
        <p className="text-xs text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1 text-yellow-500">
            {course.rating > 0 && (
              <>
                <Star size={16} />
                <span>{course.rating}</span>
                <span className="text-gray-500">({course.reviews})</span>
              </>
            )}
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">{course.price}</span>
          {course.badge === "Best Seller" && (
            <TrendingUp size={20} className="text-green-500" />
          )}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <SkillsImageSlider />
      <div>
        <div className="bg-white shadow-md py-4 w-full">
          <div className="max-w-7xl mx-auto flex justify-center space-x-8">
            <a
              href="#"
              className="text-green-500 font-semibold"
            >
              All Courses
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500 hover:font-bold hover:underline hover:text-black">
              Home Appliance
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500 hover:font-bold hover:underline hover:text-black">
              Daily Needs
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500 hover:font-bold hover:underline hover:text-black">
              Driving
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500 hover:font-bold hover:underline hover:text-black">
              Gadgets
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500 hover:font-bold hover:underline hover:text-black">
              Health Care
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mt-10">Improve your skills...</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
