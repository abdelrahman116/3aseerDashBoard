import AddButton from "./addButton";
import "../CSS/Departes.css";
import DELETE from "../assets/DELETE.png";
import EDIT from "../assets/EDIT.png";

import Yaser from "../assets/Yaser.jpg";
import calender from "../assets/calender.png";
import NewsLogo from "../assets/NewsLogo.png";
export default function Speaker() {
  let Notification = 5;
  return (
    <>
      <div className="Departs ">
        <div className="first flex flex-row-reverse justify-between">
          <div className="mainName">ادارة المتحدثون- الفعاليات ☰ </div>
          <AddButton label="إضافة متحدث - فاعلية" />
        </div>
        <div className="speakEvents">
          <div className="speakerCard">
            <img className="speakerimg" src={Yaser} alt="" />
            <h1>المهندس احمد ياسرِ</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fuga eos, aut nemo magnam suscipit itaque id qui voluptates. Saepe
              dignissimos nesciunt quasi impedit exercitationem! Doloremque unde
              quo beatae earum!
            </p>
            <div className="line"></div>

            <div className="flex flex-row-reverse justify-around gap-4">
              <h2>موضوع الحديث</h2>
              <p>التحدث عن الذكاء الاصطناعي</p>
            </div>
            <div className="flex flex-row-reverse justify-around gap-4">
              <h2>اليوم</h2>
              <p>الخميس,2 اكتوبر 2025</p>
            </div>
            <div className="flex flex-row-reverse justify-around gap-4">
              <h2>الوقت</h2>
              <p>10:00 صباحا- 10:45 صباحا</p>
            </div>
            <div className="flex justify-around flex-row-reverse">
              <img className="hover:scale-90" src={EDIT} alt="" />
              <img className="hover:scale-90" src={DELETE} alt="" />
            </div>
          </div>
          <div className="speakerCard">
            <img className="speakerimg" src={Yaser} alt="" />
            <h1>المهندس احمد ياسرِ</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fuga eos, aut nemo magnam suscipit itaque id qui voluptates. Saepe
              dignissimos nesciunt quasi impedit exercitationem! Doloremque unde
              quo beatae earum!
            </p>
            <div className="line"></div>

            <div className="flex flex-row-reverse justify-around gap-4">
              <h2>موضوع الحديث</h2>
              <p>التحدث عن الذكاء الاصطناعي</p>
            </div>
            <div className="flex flex-row-reverse justify-around gap-4">
              <h2>اليوم</h2>
              <p>الخميس,2 اكتوبر 2025</p>
            </div>
            <div className="flex flex-row-reverse justify-around gap-4">
              <h2>الوقت</h2>
              <p>10:00 صباحا- 10:45 صباحا</p>
            </div>
            <div className="flex justify-around flex-row-reverse">
              <img className="hover:scale-90" src={EDIT} alt="" />
              <img className="hover:scale-90" src={DELETE} alt="" />
            </div>
          </div>
          <div className="speakerCard">
            <img className="speakerimg" src={Yaser} alt="" />
            <h1>المهندس احمد ياسرِ</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fuga eos, aut nemo magnam suscipit itaque id qui voluptates. Saepe
              dignissimos nesciunt quasi impedit exercitationem! Doloremque unde
              quo beatae earum!
            </p>
            <div className="line"></div>

            <div className="flex flex-row-reverse justify-around gap-4">
              <h2>موضوع الحديث</h2>
              <p>التحدث عن الذكاء الاصطناعي</p>
            </div>
            <div className="flex flex-row-reverse justify-around gap-4">
              <h2>اليوم</h2>
              <p>الخميس,2 اكتوبر 2025</p>
            </div>
            <div className="flex flex-row-reverse justify-around gap-4">
              <h2>الوقت</h2>
              <p>10:00 صباحا- 10:45 صباحا</p>
            </div>
            <div className="flex justify-around flex-row-reverse">
              <img className="hover:scale-90" src={EDIT} alt="" />
              <img className="hover:scale-90" src={DELETE} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
