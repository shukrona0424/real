import React, { useEffect } from "react";
import { first } from "../../Components/Utils/axiosPosts.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import sass from "../../Pages/Users/index.module.scss";

export default function Details() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    first.get("/posts").then((data) => setposts(data.data));
  }, []);

  console.log(posts);
  return (
    <div className={sass.details}>
       
<button className={sass.accordian}>
  Section 1
</button>
<div className={sass.panel}>
<ul>
        {posts.map((e) => (
          <li key={e.id}>
            <h6>{e.id}</h6>
            <h5>{e.body}</h5>
            <h4>{e.title}</h4>
          </li>
        ))}
      </ul>
</div>

    </div>
  );
}
