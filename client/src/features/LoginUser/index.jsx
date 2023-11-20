import axios from "axios";

const LoginUser = async (username, password) => {
  try {
    const login = await axios.post("http://localhost:4000/api/user/login", {
      username: username,
      password: password,
    });

    const token = login.data.token;
    const _id = login.data._id;
    localStorage.setItem("_id", _id);
    localStorage.setItem("token", token);

    return true;
  } catch (error) {
    console.log(error);
  }
};

export default LoginUser;
