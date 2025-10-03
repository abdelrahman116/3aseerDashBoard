import AddButton from "./addButton";
import "../CSS/Departes.css";
import trash from "../assets/trash.png";
import pen from "../assets/Pen.png";
import Dash3 from "../assets/Dash3.jpg";
import Add from "../assets/Add.png";
export default function Host() {
  let Notification = 5;
  return (
    <>
      <div className="Departs">
        <div className="mainName">راعي الضيافة الرسمي ☰</div>
        <div className="first flex flex-row-reverse justify-between">
          <h1>الأقسام الحالية</h1>
          <AddButton label="إضافة قسم" />
        </div>
        <div className="Sponser">
          <div className="flex flex-row  justify-around gap-120 mt-5">
            <div className="bg-white px-2 rounded-xl"> </div>

            <p className="block font-medium font-3xl"> شعارات السطر الأول</p>
          </div>
          <div className="SponserShip mt-5 flex-row-reverse flex justify-around max-w-200">
            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي 1</h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>
            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي 2</h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>
            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي 3</h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>

            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي 4</h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>
            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي 5</h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>
            <div id="addnew" className="spon add flex flex-row">
              <p className="max-w-5">اضافة راعي جديد</p>{" "}
              <img className="hover:scale-90  " src={Add} alt="" />
            </div>
          </div>
        </div>
        <div className="Sponser">
          <div className="flex flex-row justify-around gap-120 mt-5">
            <div className="bg-white px-2 rounded-xl"> </div>
            <p className="block font-medium"> شعارات السطر الثاني</p>
          </div>
          <div className="SponserShip mt-5 flex-row-reverse flex justify-around max-w-200">
            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي</h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>
            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي</h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>
            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي</h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>

            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي</h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>
            <div className="spon">
              <img className="w-25 h-15 rounded-xl" src={Dash3} alt="" />
              <h1>راعي </h1>
              <div className="flex justify-around gap-2">
                <img className="hover:bg-gray-200" src={trash} alt="" />
                <img className="hover:bg-gray-200" src={pen} alt="" />
              </div>
            </div>
            <div id="addnew" className="spon add flex flex-row">
              <p className="max-w-5">اضافة راعي جديد</p>{" "}
              <img className="hover:scale-90  " src={Add} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
