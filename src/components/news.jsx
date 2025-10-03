import { useState } from "react";
import AddButton from "./addButton";
import NewsModal from "./NewsModal";
import DELETE from "../assets/trashvec.png";
import EDIT from "../assets/Penvec.png";
import NewsLogo from "../assets/NewsLogo.png";
import cook from "../assets/cook.jpg";
import calender from "../assets/calender.png";

export default function News() {
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: "انطلاق مسابقة الطهاة",
      date: "٢٩ سبتمبر ٢٠٢٥",
      description:
        "بدأت الجولة الأولى من مسابقة الطهاة بمشاركة واسعة من أمهر الشيفات من مختلف المطاعم والفنادق.",
      image: cook,
    },
    {
      id: 2,
      title: "انطلاق مسابقة الطهاة",
      date: "٢٩ سبتمبر ٢٠٢٥",
      description:
        "بدأت الجولة الأولى من مسابقة الطهاة بمشاركة واسعة من أمهر الشيفات من مختلف المطاعم والفنادق.",
      image: cook,
    },
    {
      id: 3,
      title: "انطلاق مسابقة الطهاة",
      date: "٢٩ سبتمبر ٢٠٢٥",
      description:
        "بدأت الجولة الأولى من مسابقة الطهاة بمشاركة واسعة من أمهر الشيفات من مختلف المطاعم والفنادق.",
      image: cook,
    },
    {
      id: 4,
      title: "انطلاق مسابقة الطهاة",
      date: "٢٩ سبتمبر ٢٠٢٥",
      description:
        "بدأت الجولة الأولى من مسابقة الطهاة بمشاركة واسعة من أمهر الشيفات من مختلف المطاعم والفنادق.",
      image: cook,
    },
    {
      id: 5,
      title: "انطلاق مسابقة الطهاة",
      date: "٢٩ سبتمبر ٢٠٢٥",
      description:
        "بدأت الجولة الأولى من مسابقة الطهاة بمشاركة واسعة من أمهر الشيفات من مختلف المطاعم والفنادق.",
      image: cook,
    },
    {
      id: 6,
      title: "انطلاق مسابقة الطهاة",
      date: "٢٩ سبتمبر ٢٠٢٥",
      description:
        "بدأت الجولة الأولى من مسابقة الطهاة بمشاركة واسعة من أمهر الشيفات من مختلف المطاعم والفنادق.",
      image: cook,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newsToEdit, setNewsToEdit] = useState(null);

  const handleAdd = (item) => {
    setNewsList([...newsList, { id: Date.now(), ...item }]);
    setIsModalOpen(false);
  };

  const handleUpdate = (updatedItem) => {
    setNewsList((prev) =>
      prev.map((n) => (n.id === updatedItem.id ? updatedItem : n))
    );
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setNewsList(newsList.filter((n) => n.id !== id));
  };

  const handleEdit = (item) => {
    setNewsToEdit(item);
    setIsModalOpen(true);
  };

  return (
    <div className="Departs NEWS">
      <div className="first flex flex-row-reverse justify-between">
        <div className="mainName">ادارة الأخبار والتحديث ☰</div>
        <AddButton
          label="إضافة خبر جديد"
          onClick={() => {
            setNewsToEdit(null);
            setIsModalOpen(true);
          }}
        />
      </div>

      {/* مودال الإضافة/التعديل */}
      {isModalOpen && (
        <NewsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={newsToEdit ? handleUpdate : handleAdd}
          initialData={newsToEdit}
          fields={[
            { name: "title", label: "العنوان", type: "text" },
            { name: "date", label: "التاريخ", type: "date" },
            { name: "description", label: "الشرح", type: "textarea" },
            { name: "image", label: "الصورة الرئيسية", type: "file" },
          ]}
        />
      )}

      {/* عرض الأخبار */}
      <div className="Events flex flex-wrap justify-around gap-5 mt-6">
        {newsList.map((n) => (
          <div
            key={n.id}
            className="EventCard max-w-80 flex flex-col gap-4 -ml-4 -mr-4 bg-gray-100 p-4 rounded-xl shadow"
          >
            <div className="flex flex-row-reverse items-center gap-2">
              <img src={NewsLogo} alt="logo" className="w-20 h-8 ml-4" />
              <h1 className="font-medium text-lg">{n.title}</h1>
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <img src={calender} alt="calender" className="w-5 h-5" />
              <p>{n.date}</p>
            </div>

            <p className="text-gray-700 text-right text-sm">{n.description}</p>

            {n.image && (
              <img
                src={n.image}
                alt="news"
                className="w-full h-40 object-cover rounded"
              />
            )}

            <div className="flex justify-around flex-row-reverse mt-2">
              <div
                className="cursor-pointer hover:scale-90 flex items-center border-1 px-4 rounded-lg"
                onClick={() => handleEdit(n)}
              >
                <p> تعديل</p> <img src={EDIT} alt="delete" />
              </div>
              <div
                className="cursor-pointer hover:scale-90 flex items-center border-1 px-4 rounded-lg"
                onClick={() => handleDelete(n.id)}
              >
                <p> حذف</p> <img src={DELETE} alt="delete" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
