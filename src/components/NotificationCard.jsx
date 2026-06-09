function NotificationCard({ notification }) {

  return (

    <div
      style={{
        border: "1px solid #ddd",
        padding: "18px",
        marginBottom: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>{notification.Type}</h3>

        <span
          style={{
            background: "#2563eb",
            color: "white",
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          New
        </span>
      </div>

      <p>{notification.Message}</p>

      <small>{notification.Timestamp}</small>

    </div>

  );

}

export default NotificationCard;

// function NotificationCard() {
//   return (
//     <div
//       style={{
//         border: "1px solid #ddd",
//         padding: "20px",
//         marginBottom: "15px",
//         borderRadius: "10px",
//         boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between"
//         }}
//       >
//         <h3>Result</h3>

//         <span
//           style={{
//             background: "#dbeafe",
//             color: "#1e40af",
//             padding: "5px 10px",
//             borderRadius: "20px",
//             fontSize: "12px"
//           }}
//         >
//           New
//         </span>
//       </div>

//       <p>Mid Semester Result has been declared.</p>

//       <small>22 April 2026 | 10:30 AM</small>
//     </div>
//   );
// }

// export default NotificationCard;