import axios from "axios";
import FetchUserByID from "./../FetchUserByID/index.jsx";

const FetchAllSop = async () => {
  const storedToken = localStorage.getItem("token");

  try {
    const sop = await axios.get("http://localhost:3000/api/sop/", {
      headers: {
        authorization: `${storedToken}`,
      },
    });

    const sopDataWithUser = await Promise.all(
      sop.data.map(async (sop) => {
        const userToAdd = await FetchUserByID(sop.user_id);
        return {
          ...sop,
          user: userToAdd.username,
          comment_count: sop.comments.length,
        };
      })
    );

    return sopDataWithUser;
  } catch (error) {
    console.log(error);
  }
};

export default FetchAllSop;
