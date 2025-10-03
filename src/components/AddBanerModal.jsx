import { useState } from "react";

export default function AddBannerModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [active, setActive] = useState("نشط");
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !image) {
      alert("من فضلك أكمل كل البيانات");
      return;
    }

    const newBanner = {
      id: Date.now(),
      title,
      date,
      image: URL.createObjectURL(image),
      active,
    };

    onAdd(newBanner);
    setTitle("");
    setDate("");
    setImage(null);
    setActive("معطل");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 text-right">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">إضافة بانر جديد</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1">عنوان البانر</label>
            <input
              type="text"
              className="border rounded w-full p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="اكتب العنوان"
            />
          </div>

          <div>
            <label className="block mb-1">تاريخ الإضافة</label>
            <input
              type="date"
              className="border rounded w-full p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1">صورة البانر</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div>
            <label className="block mb-1">الحالة</label>
            <select
              className="border rounded w-full p-2"
              value={status}
              onChange={(e) => setActive(e.target.value)}
            >
              <option value="نشط">نشط</option>
              <option value="معطل">معطل</option>
            </select>
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              إضافة البانر
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
