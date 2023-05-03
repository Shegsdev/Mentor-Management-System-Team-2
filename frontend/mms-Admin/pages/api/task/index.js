import http from "services/axios";

export const fetchTasks = async (query) => {
  const url = "/task" + query;
  return await http.get(url);
};

export const createTask = async (payload) => {
  const url = "/task";
  return await http.post(url, payload);
};
