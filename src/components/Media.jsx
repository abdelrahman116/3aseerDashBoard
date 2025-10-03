import AddButton from "./addButton";
import trash from "../assets/trash.png";

import media from "../assets/media.jpg";
export default function Media() {
  return (
    <>
      <div className="Departs MediaPage">
        <div className="first flex flex-row-reverse justify-between">
          <div className="mainName">ادارة الأخبار والتحديث ☰</div>
          <AddButton label="إضافة صورة / فيديو" />
        </div>
        <h2 className="text-end mr-10 font-medium text-lg">
          الصور / الفيديوهات
        </h2>
        <div className="media">
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
        </div>
        <div className="media">
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
          <div className="mediaCard flex flex-col items-center  gap-7 ">
            <img className="w-40 h-40 rounded-xl" src={media} alt="" />
            <img className="w-8" src={trash} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
