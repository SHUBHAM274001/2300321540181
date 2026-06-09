import axios from "axios";

const API = axios.create({
  baseURL: "http://4.224.186.213/evaluation-service",
  timeout: 10000,
});

export const getNotifications = async (
  page = 1,
  limit = 10,
  notificationType = "All"
) => {
  try {
    let url = `/notifications?page=${page}&limit=${limit}`;

    if (
      notificationType &&
      notificationType !== "All"
    ) {
      url += `&notification_type=${notificationType}`;
    }

    const response = await API.get(url);

    return {
      success: true,
      notifications: response.data.notifications || [],
      total: response.data.total || 0,
      totalPages: response.data.totalPages || 1,
    };
  } catch (error) {
    console.log("API Error:", error);

    return {
      success: false,
      notifications: [],
      total: 0,
      totalPages: 1,
      message: error.message,
    };
  }
};