import axios from "axios";

const FetchUserByID = async (id) => {
  const storedToken = localStorage.getItem("token");

  try {
    const sop = await axios.get(`http://localhost:4000/api/user/${id}`, {
      headers: {
        authorization: `${storedToken}`,
      },
    });
    return sop.data;
  } catch (error) {
    console.log(error);
  }
};

export default FetchUserByID;
