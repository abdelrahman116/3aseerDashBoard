// HostCard.jsx
import trash from "../assets/trash.png";
import pen from "../assets/Pen.png";

export default function HostCard({ item, onDelete, onEdit }) {
  return (
    <div className="spon flex flex-col items-center gap-2">
      <img
        className="w-28 h-18 rounded-xl object-cover"
        src={item.url}
        alt={item.title}
      />
      <h1>{item.title}</h1>
      <div className="flex justify-around gap-3">
        <img
          className="w-10 cursor-pointer hover:bg-gray-200 p-1 rounded"
          src={trash}
          alt="delete"
          onClick={() => onDelete(item.id)}
        />
        <img
          className="w-10 cursor-pointer hover:bg-gray-200 p-1 rounded"
          src={pen}
          alt="edit"
          onClick={() => onEdit(item)}
        />
      </div>
    </div>
  );
}
