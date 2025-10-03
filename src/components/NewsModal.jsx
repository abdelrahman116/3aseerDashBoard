import { useState, useEffect } from "react";

export default function NewsModal({ isOpen, onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ title: "", date: "", description: "", image: null });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0] ? URL.createObjectURL(files[0]) : null,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.date || !formData.description) {
      alert("من فضلك املأ كل الحقول المطلوبة");
      return;
    }
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[450px]">
        <h2 className="text-xl font-semibold text-center mb-4">
          {initialData ? "تعديل الخبر" : "إضافة خبر جديد"}
        </h2>

        {/* العنوان */}
        <div className="mb-3">
          <label className="block mb-1 font-medium">العنوان</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="أدخل عنوان الخبر"
          />
        </div>

        {/* التاريخ */}
        <div className="mb-3">
          <label className="block mb-1 font-medium">التاريخ</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* الشرح */}
        <div className="mb-3">
          <label className="block mb-1 font-medium">الشرح</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            rows="3"
            placeholder="أدخل وصف الخبر"
          ></textarea>
        </div>

        {/* الصورة */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">الصورة</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="preview"
              className="w-full h-32 object-cover mt-2 rounded"
            />
          )}
        </div>

        {/* الأزرار */}
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            إلغاء
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            {initialData ? "تعديل" : "إضافة"}
          </button>
        </div>
      </div>
    </div>
  );
}
