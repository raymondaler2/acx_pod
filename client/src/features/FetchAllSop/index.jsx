import axios from "axios";

const FetchAllSop = async () => {
  const storedToken = localStorage.getItem("token");

  try {
    const sop = await axios.get("http://localhost:3000/api/sop/", {
      headers: {
        authorization: `${storedToken}`,
      },
    });
    return sop.data;
  } catch (error) {
    console.log(error);
  }
};

export default FetchAllSop;
