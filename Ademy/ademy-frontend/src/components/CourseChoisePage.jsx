import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  { title: "Full Stack", icon: "💻" },
  { title: "DevOps", icon: "⚙️" },
  { title: "Cyber Security", icon: "🛡️" },
  { title: "Data Science (Python)", icon: "🐍" },
  { title: "AI", icon: "🤖" },
  { title: "Ethical Hacking", icon: "🕵️" },
  { title: "Docker", icon: "🐳" },
];

export default function CourseChoicePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-12">
      {courses.map((course) => (
        <div
          key={course.title}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer flex flex-col items-center text-center"
          onClick={() => navigate(`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`)}
        >
          <span className="text-5xl mb-4">{course.icon}</span>
          <h3 className="text-lg font-semibold">{course.title}</h3>
        </div>
      ))}
    </div>
  );
}