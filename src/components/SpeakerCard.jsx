import DELETE from "../assets/trashvec.png";
import EDIT from "../assets/Penvec.png";

export default function SpeakerCard({ item, onDelete, onEdit }) {
  return (
    <div className="speakerCard bg-white shadow p-4 rounded-lg flex flex-col gap-3 w-[350px]">
      <img
        className="speakerimg w-full h-40 object-cover rounded-lg"
        src={item.url}
        alt={item.name}
      />
      <h1 className="font-medium text-lg">{item.name}</h1>
      <p className="text-sm text-gray-700">{item.description}</p>
      <div className="line border-b my-2"></div>

      <div className="flex flex-col gap-1 text-sm">
        <div className="flex flex-row-reverse justify-between">
          <h2 className="font-medium text-lg">موضوع الحديث</h2>
          <p>{item.topic}</p>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <h2 className="font-medium text-lg">اليوم</h2>
          <p>{item.day}</p>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <h2 className="font-medium text-lg">الوقت</h2>
          <p>
            {item.timeFrom} - {item.timeTo}
          </p>
        </div>
      </div>

      <div className="flex justify-around flex-row-reverse mt-2">
        <div
          onClick={() => onEdit(item)}
          className="cursor-pointer hover:scale-90 flex items-center border-1 px-4 rounded-lg"
        >
          <p> تعديل</p> <img src={EDIT} alt="delete" />
        </div>
        <div
          onClick={() => onDelete(item.id)}
          className="cursor-pointer hover:scale-90 flex items-center border-1 px-4 rounded-lg"
        >
          <p> حذف</p> <img src={DELETE} alt="delete" />
        </div>
      </div>
    </div>
  );
}
