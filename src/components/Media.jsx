// import AddButton from "./addButton";
// import trash from "../assets/trash.png";

// import media from "../assets/media.jpg";
// export default function Media() {
//   return (
//     <>
//       <div className="Departs MediaPage">
//         <div className="first flex flex-row-reverse justify-between">
//           <div className="mainName">ادارة الأخبار والتحديث ☰</div>
//           <AddButton label="إضافة صورة / فيديو" />
//         </div>
//         <h2 className="text-end mr-10 font-medium text-lg">
//           الصور / الفيديوهات
//         </h2>
//         <div className="media">
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//         </div>
//         <div className="media">
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//           <div className="mediaCard flex flex-col items-center  gap-7 ">
//             <img className="w-40 h-40 rounded-xl" src={media} alt="" />
//             <img className="w-8" src={trash} alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import { useState } from "react";
// import AddButton from "./addButton";
// import MediaModal from "./MediaModal";
// import trash from "../assets/trash.png";

// export default function Media() {
//   const [mediaItems, setMediaItems] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAdd = (newMedia) => {
//     setMediaItems([...mediaItems, newMedia]);
//   };

//   const handleDelete = (id) => {
//     setMediaItems(mediaItems.filter((m) => m.id !== id));
//   };

//   return (
//     <>
//       <div className="Departs MediaPage">
//         <div className="first flex flex-row-reverse justify-between">
//           <div className="mainName">إدارة الصور والفيديوهات ☰</div>
//           <AddButton
//             label="إضافة صورة / فيديو"
//             onClick={() => setIsModalOpen(true)}
//           />
//         </div>

//         <h2 className="text-end mr-10 font-medium text-lg">
//           الصور / الفيديوهات
//         </h2>

//         <div className="media flex flex-wrap gap-6 justify-end">
//           {mediaItems.map((item) => (
//             <div
//               key={item.id}
//               className="mediaCard flex flex-col items-center gap-4"
//             >
//               {item.type.startsWith("image") ? (
//                 <img
//                   className="w-40 h-40 rounded-xl object-cover"
//                   src={item.url}
//                   alt=""
//                 />
//               ) : (
//                 <video className="w-40 h-40 rounded-xl" controls>
//                   <source src={item.url} type={item.type} />
//                 </video>
//               )}
//               <img
//                 className="w-8 cursor-pointer"
//                 src={trash}
//                 alt="delete"
//                 onClick={() => handleDelete(item.id)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <MediaModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onAdd={handleAdd}
//       />
//     </>
//   );
// }

// // Media.jsx
// import { useState } from "react";
// import AddButton from "./addButton";
// import MediaModal from "./MediaModal";
// import trash from "../assets/trash.png";
// import media from "../assets/media.jpg";
// export default function Media() {
//   const [mediaItems, setMediaItems] = useState([
//     {
//       id: 1,
//       url: media,
//       mime: "image/png",
//       isVideo: false,
//     },
//     {
//       id: 2,
//       url: media,
//       mime: "video/mp4",
//       isVideo: true,
//     },
//     {
//       id: 3,
//       url: media,
//       mime: "image/png",
//       isVideo: false,
//     },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAdd = (newMedia) => {
//     console.log("Media.handleAdd received ->", newMedia);
//     setMediaItems((prev) => [...prev, newMedia]);
//   };

//   const handleDelete = (id) => {
//     setMediaItems((prev) => prev.filter((m) => m.id !== id));
//   };

//   return (
//     <>
//       <div className="Departs MediaPage">
//         <div className="first flex flex-row-reverse justify-between">
//           <div className="mainName">إدارة الصور والفيديوهات ☰</div>
//           <AddButton
//             label="إضافة صورة / فيديو"
//             onClick={() => setIsModalOpen(true)}
//           />
//         </div>

//         <h2 className="text-end mr-10 font-medium text-lg">
//           الصور / الفيديوهات
//         </h2>

//         <div className="media flex flex-wrap gap-6 justify-end">
//           {mediaItems.map((item) => (
//             <div
//               key={item.id}
//               className="mediaCard flex flex-col items-center gap-4"
//             >
//               {item.isVideo ? (
//                 <video className="w-40 h-40 rounded-xl" controls>
//                   <source src={item.url} type={item.mime} />
//                 </video>
//               ) : (
//                 <img
//                   className="w-40 h-40 rounded-xl object-cover"
//                   src={item.url}
//                   alt=""
//                 />
//               )}
//               <img
//                 className="w-8 cursor-pointer"
//                 src={trash}
//                 alt="delete"
//                 onClick={() => handleDelete(item.id)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <MediaModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onAdd={handleAdd}
//       />
//     </>
//   );
// }

// Media.jsx
import { useState } from "react";
import AddButton from "./addButton";
import MediaModal from "./MediaModal";
import trash from "../assets/trash.png";
import media from "../assets/media.jpg";

export default function Media() {
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      url: media,
      mime: "image/png",
      isVideo: false,
    },
    {
      id: 2,
      url: media,
      mime: "image/png",
      isVideo: false,
    },
    {
      id: 3,
      url: media,
      mime: "image/png",
      isVideo: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (newMedia) => {
    setMediaItems((prev) => [...prev, newMedia]);
  };

  const handleDelete = (id) => {
    setMediaItems((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <>
      <div className="Departs MediaPage">
        <div className="first flex flex-row-reverse justify-between">
          <div className="mainName">إدارة الصور والفيديوهات ☰</div>
          <AddButton
            label="إضافة صورة / فيديو"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <h2 className="text-end mr-10 font-medium text-lg">
          الصور / الفيديوهات
        </h2>

        <div className="media flex flex-wrap gap-6 justify-end">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="mediaCard flex flex-col items-center gap-4"
            >
              {item.isVideo ? (
                <video className="w-40 h-40 rounded-xl" controls>
                  <source src={item.url} type={item.mime} />
                </video>
              ) : (
                <img
                  className="w-40 h-40 rounded-xl object-cover"
                  src={item.url}
                  alt=""
                />
              )}
              <img
                className="w-8 cursor-pointer"
                src={trash}
                alt="delete"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <MediaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </>
  );
}
