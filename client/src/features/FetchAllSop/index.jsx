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

        const countCommentsAndReplies = (comment) => {
          const replyCount = comment.replies ? comment.replies.length : 0;
          return 1 + replyCount;
        };

        const commentCount = sop.comments.reduce(
          (total, comment) => total + countCommentsAndReplies(comment),
          0
        );

        const sopWithReplies = {
          ...sop,
          user: userToAdd,
          comment_count: commentCount,
          comments: sop.comments.map((comment) => ({
            ...comment,
            reply_count: comment.replies ? comment.replies.length : 0,
          })),
        };

        return sopWithReplies;
      })
    );

    return sopDataWithUser;
  } catch (error) {
    console.log(error);
  }
};

export default FetchAllSop;
