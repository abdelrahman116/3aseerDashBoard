// // MediaModal.jsx
// import { useState, useEffect } from "react";

// export default function MediaModal({ isOpen, onClose, onAdd }) {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     if (!file) {
//       setPreview(null);
//       return;
//     }
//     const url = URL.createObjectURL(file);
//     setPreview(url);
//     return () => {
//       URL.revokeObjectURL(url);
//     };
//   }, [file]);

//   if (!isOpen) return null;

//   const handleFileChange = (e) => {
//     const f = e.target.files && e.target.files[0];
//     if (!f) {
//       setFile(null);
//       return;
//     }
//     setFile(f);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!file) {
//       alert("من فضلك اختر صورة أو فيديو");
//       return;
//     }

//     const newMedia = {
//       id: Date.now(),
//       url: preview, // already created above
//       mime: file.type,
//       isVideo: file.type.startsWith("video"),
//     };

//     console.log("MediaModal.onAdd ->", newMedia);
//     onAdd(newMedia);

//     // reset
//     setFile(null);
//     setPreview(null);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
//       <div className="bg-white rounded-2xl shadow-lg p-6 w-[420px]">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">إضافة صورة / فيديو</h2>
//           <button
//             onClick={() => {
//               setFile(null);
//               setPreview(null);
//               onClose();
//             }}
//             className="text-gray-500 text-xl"
//           >
//             ✖
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             type="file"
//             accept="image/*,video/*"
//             onChange={handleFileChange}
//             className="border p-2 rounded-lg"
//           />

//           {preview && (
//             <div className="mt-2">
//               {file.type.startsWith("video") ? (
//                 <video
//                   src={preview}
//                   controls
//                   className="w-full h-44 rounded-lg object-cover"
//                 />
//               ) : (
//                 <img
//                   src={preview}
//                   alt="preview"
//                   className="w-full h-44 rounded-lg object-cover"
//                 />
//               )}
//             </div>
//           )}

//           <div className="flex justify-end gap-3 mt-3">
//             <button
//               type="button"
//               onClick={() => {
//                 setFile(null);
//                 setPreview(null);
//                 onClose();
//               }}
//               className="px-4 py-2 bg-gray-300 rounded"
//             >
//               إلغاء
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded"
//             >
//               إضافة
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// MediaModal.jsx
import { useState, useEffect } from "react";

export default function MediaModal({ isOpen, onClose, onAdd }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) {
      setFile(null);
      return;
    }
    setFile(f);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("من فضلك اختر صورة أو فيديو");
      return;
    }

    const newMedia = {
      id: Date.now(),
      url: preview,
      mime: file.type,
      isVideo: file.type.startsWith("video"),
    };

    onAdd(newMedia);

    // reset
    setFile(null);
    setPreview(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[420px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">إضافة صورة / فيديو</h2>
          <button
            onClick={() => {
              setFile(null);
              setPreview(null);
              onClose();
            }}
            className="text-gray-500 text-xl"
          >
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="border p-2 rounded-lg"
          />

          {preview && (
            <div className="mt-2">
              {file.type.startsWith("video") ? (
                <video
                  src={preview}
                  controls
                  className="w-full h-44 rounded-lg object-cover"
                />
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-44 rounded-lg object-cover"
                />
              )}
            </div>
          )}

          <div className="flex justify-end gap-3 mt-3">
            <button
              type="button"
              onClick={() => {
                setFile(null);
                setPreview(null);
                onClose();
              }}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              إضافة
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
