import React from "react";
import { useMutation } from "@tanstack/react-query";
import { instance } from "../../Components/Utils/axiosInstance";
import sass from "../Join/index.module.scss";
function Join() {
  const mute = useMutation((data) => instance.post("/users", data));
  console.log(mute);

  const submit = (a) => {
    a.praventDefault();
    let cd = new FormData(a.target);
    mute.mutate({
      text: cd.get("text"),
      surname: cd.get("surname"),
    });
  };
  return (
    <div className={sass.join}>
      <form action="" onSubmit={submit}>
        <input name="text" placeholder="Name"  />
        <input name="surname" placeholder="Surname" />
        <button>Send</button>
        <button>Delete</button>
      </form>

      <h1>{mute?.data?.data.text}</h1>
      <h1>{mute?.data?.data.surname}</h1>
    </div>
  );
}

export default Join;
