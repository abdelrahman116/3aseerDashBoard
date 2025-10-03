import { useState, useEffect } from "react";

export default function SponsorModal({ isOpen, onClose, onSave, initialData }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setImage(initialData.image || null);
    } else {
      setTitle("");
      setImage(null);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, image });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-40 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "تعديل الراعي" : "إضافة راعي"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">العنوان</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">الصورة</label>
            <input
              type="file"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
              className="w-full border rounded px-3 py-2 mt-1"
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                className="w-32 h-20 mt-2 object-cover rounded"
              />
            )}
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
