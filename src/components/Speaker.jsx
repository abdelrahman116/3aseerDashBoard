import { useState } from "react";
import AddButton from "./addButton";
import SpeakerModal from "./SpeakerModal";
import SpeakerCard from "./SpeakerCard";
import Yaser from "../assets/Yaser.jpg";

export default function Speaker() {
  const [speakers, setSpeakers] = useState([
    {
      id: 1,
      url: Yaser,
      name: "المهندس أحمد ياسر",
      description: "خبير في الذكاء الاصطناعي وتعلم الآلة.",
      topic: "التحدث عن الذكاء الاصطناعي",
      day: "الخميس, 2 أكتوبر 2025",
      timeFrom: "10:00",
      timeTo: "10:45",
    },
    {
      id: 2,
      url: Yaser,
      name: "المهندس أحمد ياسر",
      description: "خبير في الذكاء الاصطناعي وتعلم الآلة.",
      topic: "التحدث عن الذكاء الاصطناعي",
      day: "الخميس, 2 أكتوبر 2025",
      timeFrom: "10:00",
      timeTo: "10:45",
    },
    {
      id: 3,
      url: Yaser,
      name: "المهندس أحمد ياسر",
      description: "خبير في الذكاء الاصطناعي وتعلم الآلة.",
      topic: "التحدث عن الذكاء الاصطناعي",
      day: "الخميس, 2 أكتوبر 2025",
      timeFrom: "10:00",
      timeTo: "10:45",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleSave = (newSpeaker) => {
    if (editItem) {
      setSpeakers((prev) =>
        prev.map((s) => (s.id === newSpeaker.id ? newSpeaker : s))
      );
    } else {
      setSpeakers((prev) => [...prev, newSpeaker]);
    }
    setEditItem(null);
  };

  const handleDelete = (id) => {
    setSpeakers((prev) => prev.filter((s) => s.id !== id));
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="Departs">
      <div className="first flex flex-row-reverse justify-between">
        <div className="mainName">إدارة المتحدثون - الفعاليات ☰</div>
        <AddButton
          label="إضافة متحدث - فاعلية"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="speakEvents mt-6 flex flex-wrap gap-6 justify-end">
        {speakers.map((item) => (
          <SpeakerCard
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      <SpeakerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditItem(null);
        }}
        onSave={handleSave}
        initialData={editItem}
      />
    </div>
  );
}
