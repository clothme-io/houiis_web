import axiosClient from "./axiosClient";

export const getAllMembers = async () => {
  try {
    const response = await axiosClient.get("");
  } catch (error) {}
};

export const getSingleMember = (memberId) => {};
