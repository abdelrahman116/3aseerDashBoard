// HostModal.jsx
import { useState, useEffect } from "react";

export default function HostModal({ isOpen, onClose, onSave, initialData }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(initialData?.url || null);
  const [title, setTitle] = useState(initialData?.title || "");

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!preview || !title) {
      alert("من فضلك اختر صورة واكتب عنوان");
      return;
    }

    const newHost = {
      id: initialData?.id || Date.now(),
      url: preview,
      title,
    };

    onSave(newHost);
    setFile(null);
    setTitle("");
    setPreview(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl p-6 w-[420px]">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">
            {initialData ? "تعديل الراعي" : "إضافة راعي جديد"}
          </h2>
          <button onClick={onClose} className="text-gray-500 text-xl">
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="border p-2 rounded"
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-full h-40 object-cover rounded-lg"
            />
          )}

          <input
            type="text"
            placeholder="اسم الراعي"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {initialData ? "تعديل" : "إضافة"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
