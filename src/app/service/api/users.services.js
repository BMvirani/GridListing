"use client";
import apiRoutes from "../../../../config/apiRoutes";
import { callGetAPI } from "../axios.services";


// Function to get actions
const getUsers = async (param) => {
  let isToast = false;
  let queryParams = `limit=${param?.limit}&skip=${param?.skip}&select=${param?.select}`;
  const apiName = apiRoutes.users + `?${queryParams}`;
  const rawResult = await callGetAPI(apiName, isToast);
  return rawResult;
};

// Exporting the function
export { getUsers };
