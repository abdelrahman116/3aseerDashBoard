import cov from "../assets/Slidecov.png";
import { useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react"; // أيقونات جاهزة
import { Link, NavLink } from "react-router-dom";

// function ClickableText({ children }) {
//   const [isClicked, setIsClicked] = useState(false);

//   return (
//     <span
//       onClick={() => setIsClicked(!isClicked)}
//       className={`cursor-pointer ${isClicked ? "text-blue-500" : "text-black"}`}
//     >
//       {children}
//     </span>
//   );
// }
function SaddleList({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 ">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3 text-lg font-medium text-blue-500"
      >
        {open ? <ChevronDown size={20} /> : <ChevronLeft size={20} />}

        <span className="text-blue-500 text-lg transition-transform duration-200">
          {title}
        </span>
      </button>

      {/* Content */}
      {open && (
        <div className="pl-4 pr-2 pb-3 text-gray-600 text-right ">
          {children}
        </div>
      )}
    </div>
  );
}
export default function SlideShow() {
  const [isOpen, setIsOpen] = useState(true);
  let PageTitle = "الرئيسية";
  return (
    <>
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className={`showhide absolute top-10 z-50 p-2  text-black  text-3xl transition-transform duration-300 ease-in-out ${
          isOpen ? "right-75" : "right-0"
        }`}
      >
        {PageTitle}☰
      </button> */}
      <div
        className={`allSlide transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="slide max-w-64">
          <div className="cover">
            <img src={cov} alt="" />
          </div>
        </div>

        <div className="slideList  p-4 ">
          <div className="control text-lg flex items-center gap-4">
            <h2>لوحة التحكم</h2>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.49776 0.500305H11.502C14.0528 0.500305 15.4928 1.94706 15.5003 4.49781V11.5028C15.5003 14.0528 14.0528 15.5003 11.502 15.5003H4.49776C1.94701 15.5003 0.500259 14.0528 0.500259 11.5028V4.49781C0.500259 1.94706 1.94701 0.500305 4.49776 0.500305ZM8.03706 12.3953C8.36031 12.3953 8.62956 12.1553 8.65956 11.8328V4.1903C8.68956 3.9578 8.57781 3.72455 8.37531 3.5978C8.16456 3.4703 7.90956 3.4703 7.70781 3.5978C7.50456 3.72455 7.39281 3.9578 7.41456 4.1903V11.8328C7.45281 12.1553 7.72206 12.3953 8.03706 12.3953ZM11.4878 12.3953C11.8028 12.3953 12.0721 12.1553 12.1103 11.8328V9.37281C12.1321 9.13206 12.0203 8.90781 11.8171 8.78031C11.6153 8.65281 11.3603 8.65281 11.1503 8.78031C10.9471 8.90781 10.8353 9.13206 10.8653 9.37281V11.8328C10.8953 12.1553 11.1646 12.3953 11.4878 12.3953ZM5.16453 11.8328C5.13453 12.1553 4.86528 12.3953 4.54203 12.3953C4.21953 12.3953 3.94953 12.1553 3.92028 11.8328V6.6503C3.89778 6.41705 4.00953 6.1853 4.21278 6.0578C4.41453 5.9303 4.67028 5.9303 4.87278 6.0578C5.07453 6.1853 5.18778 6.41705 5.16453 6.6503V11.8328Z"
                fill="#888888"
              />
            </svg>
          </div>
          <SaddleList title="الرئيسية">
            <p>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-bkue-300"
                }
              >
                البانر
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/Departs"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                الرعاة والمشاركين
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/News"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                اخر الاخبار والتحديثات{" "}
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/Media"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                معرض الصور والفديوهات{" "}
              </NavLink>
            </p>
          </SaddleList>
          <SaddleList title="تحت راعي الضيافة الرسمي">
            <p>
              <NavLink
                to="/Host"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                شعارات سطر اول{" "}
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/Host"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                شعارات سطر ثاني{" "}
              </NavLink>
            </p>
          </SaddleList>
          <SaddleList title="تحت راعي المشروب الرسمي">
            <p>
              <NavLink
                to="/Drink"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                شعارات سطر اول{" "}
              </NavLink>
            </p>{" "}
            <p>
              <NavLink
                to="/Drink"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                شعارات سطر ثاني{" "}
              </NavLink>
            </p>
          </SaddleList>
          <SaddleList title="المسابقات">
            <p>
              <NavLink
                to="/CookComp"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                راعي مسابقة طاهي الجنوب{" "}
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/ParistaComp"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                راعي مسابقة باريستا الجنوب{" "}
              </NavLink>
            </p>
          </SaddleList>
          <SaddleList title="المتحدثون">
            <p>
              <NavLink
                to="/Speaker"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-400" : "hover:text-blue-300"
                }
              >
                المتحدثون - الفاعليات{" "}
              </NavLink>
            </p>
          </SaddleList>
        </div>
      </div>
    </>
  );
}
