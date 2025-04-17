"use client";

import { Link } from "react-scroll";

const items = [
  {
    label: "Lợi ích khóa học",
    target: "benefits",
  },
  {
    label: "Lộ trình",
    target: "content",
  },
  {
    label: "Giảng viên",
    target: "lecturers",
  },
  {
    label: "Thông tin đăng ký",
    target: "payment",
  },
  {
    label: "Reviews",
    target: "feedbacks",
  },
];

export default function CourseNavigation() {
  return (
    <nav className="sticky top-[var(--navbar-height)] z-10 hidden md:block bg-background border-y">
      <div className="container">
        <div className="flex justify-center">
          <ul className="flex items-center">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  smooth
                  spy
                  offset={-150}
                  duration={200}
                  to={item.target}
                  className="px-4 py-4 font-medium transition duration-200 border-b-4 border-transparent cursor-pointer hover:text-orange-500"
                  href={`#${item.target}`}
                  activeClass="text-orange-500 font-bold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
