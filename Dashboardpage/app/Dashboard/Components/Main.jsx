"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MyChartBar from "./MyChartBar";

import dashboardicon1 from "@/public/dashbord-item1.png";
import dashboardicon2 from "@/public/dashbord-item2.png";
import dashboardicon3 from "@/public/dashbord-item3.png";
import dashboardicon4 from "@/public/dashbord-item4.png";
import dashboardicon5 from "@/public/dashbord-item5.png";
import dashboardicon6 from "@/public/dashbord-item6.png";

import instructorImage1 from "@/public/Instructor-01.png";
import instructorImage2 from "@/public/Instructor-02.png";
import instructorImage3 from "@/public/Instructor-03.png";
import instructorImage4 from "@/public/Instructor-04.png";
import instructorImage5 from "@/public/Instructor-05.png";
import instructorImage6 from "@/public/Instructor-06.png";

import RecentCourse1 from "@/public/RecentCourse-1.png";
import RecentCourse2 from "@/public/RecentCourse-2.png";
import RecentCourse3 from "@/public/RecentCourse-3.png";
import RecentCourse4 from "@/public/RecentCourse-4.png";
import RecentCourse5 from "@/public/RecentCourse-5.png";
import RecentCourse6 from "@/public/RecentCourse-6.png";

export default function Main() {
  const stats = [
    {
      icon: dashboardicon1,
      title: "Total Courses",
      value: "2000+",
      color: "bg-blue-500",
    },
    {
      icon: dashboardicon2,
      title: "Enrolled Courses",
      value: "900+",
      color: "bg-green-500",
    },
    {
      icon: dashboardicon3,
      title: "Active Courses",
      value: "100+",
      color: "bg-purple-500",
    },
    {
      icon: dashboardicon4,
      title: "Completed Courses",
      value: "1000+",
      color: "bg-yellow-500",
    },
    {
      icon: dashboardicon5,
      title: "Total Students",
      value: "88,000+",
      color: "bg-pink-500",
    },
    {
      icon: dashboardicon6,
      title: "Total Earnings",
      value: "$956,542",
      color: "bg-orange-500",
    },
  ];

  const instructors = [
    {
      img: instructorImage1,
      name: "Kathryn Murphy",
      courses: 17,
      students: 224,
      rating: 4.8,
      reviews: "55k+",
    },
    {
      img: instructorImage2,
      name: "Leslie Alexander",
      courses: 12,
      students: 310,
      rating: 4.6,
      reviews: "21k+",
    },
    {
      img: instructorImage3,
      name: "Savannah Nguyen",
      courses: 9,
      students: 185,
      rating: 4.7,
      reviews: "18k+",
    },
    {
      img: instructorImage4,
      name: "Ralph Edwards",
      courses: 14,
      students: 402,
      rating: 4.9,
      reviews: "63k+",
    },
    {
      img: instructorImage5,
      name: "Jane Cooper",
      courses: 11,
      students: 260,
      rating: 4.5,
      reviews: "15k+",
    },
    {
      img: instructorImage6,
      name: "Guy Hawkins",
      courses: 8,
      students: 150,
      rating: 4.6,
      reviews: "9k+",
    },
  ];

  const recentCourses = [
    {
      img: RecentCourse1,
      title: "Vuejs Courses",
      hours: "5h 45min",
      lessons: 10,
      students: 193,
    },
    {
      img: RecentCourse2,
      title: "Swift Courses",
      hours: "6h 20min",
      lessons: 12,
      students: 210,
    },
    {
      img: RecentCourse3,
      title: "Objective C Courses",
      hours: "4h 15min",
      lessons: 8,
      students: 165,
    },
    {
      img: RecentCourse4,
      title: "NodeJS Courses",
      hours: "7h 10min",
      lessons: 14,
      students: 250,
    },
    {
      img: RecentCourse5,
      title: "Django Courses",
      hours: "5h 30min",
      lessons: 11,
      students: 220,
    },
    {
      img: RecentCourse6,
      title: "CSS3 Courses",
      hours: "3h 50min",
      lessons: 7,
      students: 180,
    },
  ];

  return (
    <div className="p-6 flex-1 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-6">Dashboard!</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-4 transform transition-transform duration-500 ease-out hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h2 className="text-xl font-bold">{item.value}</h2>
              </div>
              <div
                className={`${item.color} w-10 h-10 flex items-center justify-center rounded-md`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={18}
                  height={18}
                />
              </div>
            </div>
            <div className="mt-3 text-sm font-semibold text-blue-600 w-fit cursor-pointer relative group">
              View All
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Instructor Table */}
        <div className="bg-white shadow-md rounded-lg p-5 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
            Popular Instructors
            <span className="text-blue-500 text-sm cursor-pointer relative group">
              View All
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h3>
          <div className="grid grid-cols-[3fr_1fr_1fr_2fr] text-gray-500 text-sm font-medium pb-3 gap-4">
            <div>Instructor</div>
            <div className="text-center lg:text-center">Courses</div>
            <div className="text-center lg:text-center">Students</div>
            <div className="text-center lg:text-center">Reviews</div>
          </div>
          {instructors.map((inst, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[3fr_1fr_1fr_2fr] items-center py-3 gap-4 hover:bg-gray-50 rounded transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={inst.img}
                  alt={inst.name}
                  width={35}
                  height={35}
                  className="rounded-full"
                />
                <span className="font-medium">{inst.name}</span>
              </div>
              <div className="text-center lg:flex lg:justify-center">
                {inst.courses}
              </div>
              <div className="text-center lg:flex lg:justify-center">
                {inst.students}
              </div>
              <div className="flex items-center gap-1 justify-center lg:justify-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <span className="text-center">
                  {inst.rating} ({inst.reviews})
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Table */}
        <div className="bg-white shadow-md rounded-lg p-5 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
            Recent Courses
            <span className="text-blue-500 text-sm cursor-pointer relative group">
              View All
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h3>
          <div className="grid grid-cols-[3fr_1fr_1fr] text-gray-500 text-sm font-medium pb-3 gap-4">
            <div>Course Title | Hours</div>
            <div className="text-center">Total Lessons</div>
            <div className="text-center">Students</div>
          </div>
          {recentCourses.map((course, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[3fr_1fr_1fr] items-center py-4 gap-4 hover:bg-gray-50 rounded transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={course.img}
                  alt={course.title}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium">{course.title}</p>
                  <p className="text-gray-500 text-sm">{course.hours}</p>
                </div>
              </div>
              <div className="text-center text-gray-700">{course.lessons}</div>
              <div className="text-center text-gray-700">{course.students}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <MyChartBar />
      </div>
    </div>
  );
}
