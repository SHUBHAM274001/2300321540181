import axios from "axios";

const API = axios.create({
  baseURL: "YOUR_API_BASE_URL",
  headers: {
    Authorization: "Bearer YOUR_TOKEN",
  },
});

export const getNotifications = async (
  page = 1,
  limit = 5,
  type = "All"
) => {
  try {
    let url = `/notifications?page=${page}&limit=${limit}`;

    if (type !== "All") {
      url += `&notification_type=${type}`;
    }

    const response = await API.get(url);

    return response.data;
  } catch (error) {
    console.log(error);

    return {
      notifications: [],
      totalPages: 1,
    };
  }
};