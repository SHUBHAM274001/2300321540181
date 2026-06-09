
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import NotificationCard from "../components/NotificationCard";
import Pagination from "../components/Pagination";

import { getNotifications } from "../services/api";

function Home() {

  const [notifications, setNotifications] = useState([]);

  const [page, setPage] = useState(1);

  const [filter, setFilter] = useState("All");

  const [loading, setLoading] = useState(true);
  useEffect(() => {

    loadNotifications();

  }, [page, filter]);

  const loadNotifications = async () => {

  setLoading(true);

  const data = await getNotifications(page,5,filter);

  setNotifications(data.notifications || []);

  setLoading(false);

};
if (loading) {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "22px",
        fontWeight: "bold",
      }}
    >
      Loading Notifications...
    </div>
  );
}
  return (

    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      <Navbar />

      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      {

        notifications.length === 0 ?

          <h3>No Notifications Found</h3>

          :

          notifications.map((item) => (

            <NotificationCard

              key={item.ID}

              notification={item}

            />

          ))

      }

      <Pagination

        page={page}

        setPage={setPage}

      />

    </div>

  );

}

export default Home;