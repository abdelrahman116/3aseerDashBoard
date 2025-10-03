import { useState } from "react";
import SponsorModal from "./SponsorModal";
import trash from "../assets/trash.png";
import pen from "../assets/Pen.png";
import Dash3 from "../assets/Dash3.jpg";
import Add from "../assets/Add.png";

export default function Departs() {
  const [sponsors, setSponsors] = useState([
    { id: 1, title: "راعي 1", image: Dash3 },
    { id: 2, title: "راعي 2", image: Dash3 },

    { id: 3, title: "راعي 2", image: Dash3 },
    { id: 4, title: "راعي 2", image: Dash3 },

    { id: 5, title: "راعي 2", image: Dash3 },
    { id: 6, title: "راعي 2", image: Dash3 },

    { id: 7, title: "راعي 2", image: Dash3 },

    { id: 8, title: "راعي 2", image: Dash3 },

    { id: 9, title: "راعي 2", image: Dash3 },

    { id: 10, title: "راعي 2", image: Dash3 },

    { id: 11, title: "راعي 2", image: Dash3 },

    { id: 12, title: "راعي 2", image: Dash3 },

    { id: 13, title: "راعي 2", image: Dash3 },

    { id: 14, title: "راعي 2", image: Dash3 },

    { id: 15, title: "راعي 2", image: Dash3 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSponsor, setEditingSponsor] = useState(null);

  const handleAdd = () => {
    setEditingSponsor(null);
    setIsModalOpen(true);
  };

  const handleEdit = (sponsor) => {
    setEditingSponsor(sponsor);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setSponsors(sponsors.filter((s) => s.id !== id));
  };

  const handleSave = (data) => {
    if (editingSponsor) {
      setSponsors(
        sponsors.map((s) =>
          s.id === editingSponsor.id ? { ...s, ...data } : s
        )
      );
    } else {
      setSponsors([
        ...sponsors,
        { id: Date.now(), title: data.title, image: data.image },
      ]);
    }
  };

  return (
    <div className="Departs">
      <div className="mainName">إدارة الرعاة والمشاركين ☰</div>

      <div className="first flex flex-row-reverse justify-between">
        <h1>الأقسام الحالية</h1>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          إضافة قسم
        </button>
      </div>

      <div className="SponserShip mt-5 flex flex-row-reverse gap-5 flex-wrap">
        {sponsors.map((s) => (
          <div key={s.id} className="spon p-3 bg-gray-100 rounded-xl shadow">
            <img
              className="w-32 h-20 rounded-xl object-cover"
              src={s.image}
              alt=""
            />
            <h1 className="mt-2 text-center">{s.title}</h1>
            <div className="flex justify-around gap-2 mt-2">
              <img
                src={trash}
                alt=""
                className="cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => handleDelete(s.id)}
              />
              <img
                src={pen}
                alt=""
                className="cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => handleEdit(s)}
              />
            </div>
          </div>
        ))}

        <div
          id="addnew"
          className="spon add flex flex-col items-center justify-center p-5 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-xl"
          onClick={handleAdd}
        >
          <p>إضافة راعي جديد</p>
          <img className="hover:scale-90 mt-2" src={Add} alt="" />
        </div>
      </div>

      <SponsorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={editingSponsor}
      />
    </div>
  );
}
