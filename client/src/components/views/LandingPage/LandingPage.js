import React, { useEffect } from "react";
import axios from "axios";

const LandingPage = (props) => {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  });

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃에 실패했습니다.");
      }
    });
  };

  return <button onClick={onClickHandler}>로그아웃</button>;
};

export default LandingPage;
