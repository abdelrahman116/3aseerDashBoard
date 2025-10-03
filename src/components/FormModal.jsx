import { useState, useEffect } from "react";

export default function FormModal({ isOpen, onClose, onSubmit, initialData }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("نشط");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDate(initialData.date || "");
      setImage(null);
      setStatus(initialData.active ? "نشط" : "معطل");
    }
  }, [initialData, isOpen]);
  if (!isOpen) return null;

  // handle input change
  const handleChange = (e, fieldName) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        [fieldName]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [fieldName]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date) {
      alert("من فضلك أكمل كل البيانات");
      return;
    }
    const updatedBanner = {
      ...initialData,
      title,
      date,
      image: image ? URL.createObjectURL(image) : initialData.image, // لو ما غيرتش الصورة خلي القديمة
      active: status === "نشط",
    };

    onSubmit(updatedBanner);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 text-right">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">تعديل البانر</h2>
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
            <label className="block mb-1">صورة البانر (اختياري)</label>
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
              onChange={(e) => setStatus(e.target.value)}
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
              حفظ التعديلات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
