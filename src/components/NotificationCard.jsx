function NotificationCard({ notification }) {

  const viewedNotifications =
    JSON.parse(localStorage.getItem("viewedNotifications")) || [];

  const isViewed = viewedNotifications.includes(notification.ID);

  const handleClick = () => {

    if (!isViewed) {

      const updated = [...viewedNotifications, notification.ID];

      localStorage.setItem(
        "viewedNotifications",
        JSON.stringify(updated)
      );

      window.location.reload();

    }

  };

  return (

    <div
      onClick={handleClick}
      style={{
        border: "1px solid #ddd",
        padding: "18px",
        marginBottom: "15px",
        borderRadius: "10px",
        cursor: "pointer",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >

        <h3>{notification.Type}</h3>

        <span
          style={{
            background: isViewed ? "#16a34a" : "#2563eb",
            color: "white",
            padding: "5px 12px",
            borderRadius: "20px"
          }}
        >
          {isViewed ? "Viewed" : "New"}
        </span>

      </div>

      <p>{notification.Message}</p>

      <small>{notification.Timestamp}</small>

    </div>

  );

}

export default NotificationCard;