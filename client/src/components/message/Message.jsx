// import "./message.css";

// export default function Message({own}) {
//   return (
//     <div className={own ? "message own" : "message"}>
//       <div className="messageTop">
//         <img
//           className="messageImg"
//           src="https://media.istockphoto.com/photos/handsome-young-businessman-picture-id997770954?b=1&k=20&m=997770954&s=170667a&w=0&h=vK063QTVtGVtQ_JOXxocxJdSwY18_rVoMTut7QXhz3c="
//           alt="img"
//         />
//         <p className="messageText">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//         </p>
//       </div>
//       <div className="messageBottom">1 hour ago</div>
//     </div>
//   );
// }


import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}