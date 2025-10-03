import AddButton from "./addButton";
import "../CSS/Departes.css";

import Dash3 from "../assets/Dash3.jpg";
import HostModal from "./HostModal";
import HostCard from "./HostCard";
import { useState } from "react";
export default function CookComp() {
  const [items, setItems] = useState([
    { id: 1, url: Dash3, title: "راعي 1" },
    { id: 2, url: Dash3, title: "راعي 2" },
    { id: 3, url: Dash3, title: "راعي 3" },
    { id: 4, url: Dash3, title: "راعي 4" },
    { id: 5, url: Dash3, title: "راعي 5" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleSave = (newItem) => {
    if (editItem) {
      setItems((prev) => prev.map((i) => (i.id === newItem.id ? newItem : i)));
    } else {
      setItems((prev) => [...prev, newItem]);
    }
    setEditItem(null);
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="Departs">
        <div className="mainName"> راعي مسابقة طاهي الجنوب ☰</div>
        <div className="first flex flex-row-reverse justify-between">
          <h1>الأقسام الحالية</h1>
          <AddButton label="إضافة راعي" onClick={() => setIsModalOpen(true)} />
        </div>
        <div className="Sponser">
          <div className="flex flex-row  justify-around gap-120 mt-5">
            <div className="bg-white px-2 rounded-xl"> </div>

            <p className="block font-medium font-3xl"> شعارات السطر الأول</p>
          </div>
          <div className="SponserShip mr-10 mt-5 flex  flex-wrap gap-6 justify-end">
            {items.map((item) => (
              <HostCard
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>

        <HostModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditItem(null);
          }}
          onSave={handleSave}
          initialData={editItem}
        />
      </div>
    </>
  );
}
