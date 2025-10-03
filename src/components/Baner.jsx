import AddButton from "./addButton";
import Dash1 from "../assets/Dash1.jpg";
import Dash2 from "../assets/Dash2.jpg";
import Dash3 from "../assets/Dash3.jpg";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import AddBannerModal from "./AddBanerModal";
import FormModal from "./FormModal";

export default function Baner() {
  const [banners, setBanners] = useState([
    { id: 1, image: Dash1, title: "عرض صيفي كبير", date: "01/6/2025" },
    { id: 2, image: Dash2, title: "عرض صيفي كبير", date: "01/6/2025" },
    { id: 3, image: Dash3, title: "عرض صيفي كبير", date: "01/6/2025" },
  ]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bannerToEdit, setBannerToEdit] = useState(null);

  const handleAddBanner = (banner) => {
    setBanners([...banners, banner]);
  };
  const handleEdit = (banner) => {
    setBannerToEdit(banner); // البانر المختار للتعديل
    setIsEditModalOpen(true);
  };
  const handleUpdateBanner = (updatedBanner) => {
    setBanners((prev) =>
      prev.map((b) => (b.id === updatedBanner.id ? updatedBanner : b))
    );
    setIsEditModalOpen(false);
  };
  const handleDelete = (id) => {
    setBanners(banners.filter((b) => b.id !== id));
  };
  // تعديل الحالة (نشط ↔ معطل)
  const toggleStatus = (id) => {
    setBanners((prev) =>
      prev.map((banner) =>
        banner.id === id ? { ...banner, active: !banner.active } : banner
      )
    );
  };

  return (
    <>
      <div className="Baner">
        <div className="mainName">الرئيسية ☰</div>

        <div className="first flex flex-row-reverse justify-between">
          <h1>قائمة البانر</h1>
          <AddButton onClick={() => setIsModalOpen(true)} label="إضافة بانر" />
        </div>

        {/* جدول البانرز */}
        {/* <ul className="mt-4">
          {banners.map((banner) => (
            <li key={banner.id} className="flex gap-4 items-center">
              <img src={banner.image} alt="" className="w-24 h-16 rounded" />
              <p>{banner.title}</p>
              <p>{banner.date}</p>
            </li>
          ))}
        </ul> */}

        {/* المودال */}
        <AddBannerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddBanner}
        />
        <FormModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleUpdateBanner}
          initialData={bannerToEdit}
        />
        <ul className=" titels flex flex-row-reverse items-center justify-around gap-5 ">
          <li>الصورة</li>
          <li>عنوان البانر</li>
          <li>الحالة</li>
          <li>تاريخ الإضافة</li>
          <li>اجاراءات</li>
        </ul>

        <ul className="mr-14 flex flex-col gap-10">
          {banners.map((banner) => (
            <li
              key={banner.id}
              className="flex flex-row-reverse items-center justify-around gap-10"
            >
              <img className="rounded-xl w-32" src={banner.image} alt="" />
              <p>{banner.title}</p>
              <ToggleButton
                isOn={banner.active}
                onToggle={() => toggleStatus(banner.id)}
              />{" "}
              <p className="mr-5">{banner.date}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleDelete(banner.id)}
                  className="delete bg-red-600 text-white px-3 py-1 rounded"
                >
                  حذف
                </button>
                <button
                  onClick={() => handleEdit(banner)}
                  className="edit bg-blue-600 text-black px-3 py-1 rounded"
                >
                  تعديل
                </button>
              </div>
            </li>
          ))}
        </ul>
        {/* <ul className="mr-14 flex flex-col gap-10">
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
        </ul> */}
      </div>
    </>
  );
}
