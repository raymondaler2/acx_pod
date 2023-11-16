import axios from "axios";

const FetchAllSop = async () => {
  try {
    const sop = await axios.get("http://localhost:3000/api/sop/");
    return sop.data;
  } catch (error) {
    console.log(error);
  }
};

export default FetchAllSop;
