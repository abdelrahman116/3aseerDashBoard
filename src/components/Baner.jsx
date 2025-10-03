import AddButton from "./addButton";
import Dash1 from "../assets/Dash1.jpg";
import Dash2 from "../assets/Dash2.jpg";
import Dash3 from "../assets/Dash3.jpg";
import ToggleButton from "./ToggleButton";

export default function Baner() {
  return (
    <>
      <div className="Baner">
        <div className="mainName">الرئيسية ☰</div>

        <div className="first flex flex-row-reverse justify-between">
          <h1>قائمة البانر</h1>
          <AddButton label="إضافة بانر" />
        </div>
        <ul className=" titels flex flex-row-reverse items-center justify-around gap-5 ">
          <li>الصورة</li>
          <li>عنوان البانر</li>
          <li>الحالة</li>
          <li>تاريخ الإضافة</li>
          <li>اجاراءات</li>
        </ul>

        <ul className="mr-14 flex flex-col gap-10">
          <li className="flex flex-row-reverse  items-center justfiy-around gap-32 ">
            <img className="rounded-xl" src={Dash1} alt="" />
            <p>عرض صيفي كبير</p>
            <ToggleButton />
            <p className="mr-5">01/6/2025</p>
            <div className="flex gap-4">
              <button className="delete">حذف</button>
              <button className="edit">تعديل</button>
            </div>
          </li>
          <li className="flex flex-row-reverse  items-center justfiy-around gap-32 ">
            <img className="rounded-xl" src={Dash2} alt="" />
            <p>عرض صيفي كبير</p>
            <ToggleButton />
            <p className="mr-5">01/6/2025</p>
            <div className="flex gap-4">
              <button className="delete">حذف</button>
              <button className="edit">تعديل</button>
            </div>
          </li>
          <li className="flex flex-row-reverse  items-center justfiy-around gap-32 ">
            <img className="rounded-xl" src={Dash3} alt="" />
            <p>عرض صيفي كبير</p>
            <ToggleButton />
            <p className="mr-5">01/6/2025</p>
            <div className="flex gap-4">
              <button className="delete">حذف</button>
              <button className="edit">تعديل</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
