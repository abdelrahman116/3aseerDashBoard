// SpeakerModal.jsx
import { useState, useEffect } from "react";

export default function SpeakerModal({ isOpen, onClose, onSave, initialData }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [day, setDay] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");

  // كل مرة initialData تتغير (يعني لما تضغط تعديل كارد مختلف)
  // نحدّث الحقول
  useEffect(() => {
    if (initialData) {
      setPreview(initialData.url || null);
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setTopic(initialData.topic || "");
      setDay(initialData.day || "");
      setTimeFrom(initialData.timeFrom || "");
      setTimeTo(initialData.timeTo || "");
    } else {
      // في حالة إضافة جديد نخليها فاضية
      setPreview(null);
      setName("");
      setDescription("");
      setTopic("");
      setDay("");
      setTimeFrom("");
      setTimeTo("");
    }
  }, [initialData, isOpen]);
  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!preview || !name || !topic || !day || !timeFrom || !timeTo) {
      alert("من فضلك املأ جميع الحقول");
      return;
    }

    const newSpeaker = {
      id: initialData?.id || Date.now(),
      url: preview,
      name,
      description,
      topic,
      day,
      timeFrom,
      timeTo,
    };

    onSave(newSpeaker);
    setFile(null);
    setPreview(null);
    setName("");
    setDescription("");
    setTopic("");
    setDay("");
    setTimeFrom("");
    setTimeTo("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl p-6 w-[500px] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">
            {initialData ? "تعديل متحدث / فاعلية" : "إضافة متحدث / فاعلية"}
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
            placeholder="اسم المتحدث / الفاعلية"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />

          <textarea
            placeholder="الوصف"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="موضوع الحديث"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="اليوم"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="border p-2 rounded"
          />

          <div className="flex gap-2">
            <input
              type="time"
              value={timeFrom}
              onChange={(e) => setTimeFrom(e.target.value)}
              className="border p-2 rounded w-1/2"
            />
            <input
              type="time"
              value={timeTo}
              onChange={(e) => setTimeTo(e.target.value)}
              className="border p-2 rounded w-1/2"
            />
          </div>

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
