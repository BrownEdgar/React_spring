import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./About.css";

export default function About() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Gexam",
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      paragraph2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      listItems: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
      photoURL: "./public/photo1.jpg",
      isActive: true,
    },
    {
      id: 2,
      name: "Vardan",
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      paragraph2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      listItems: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
      photoURL: "./public/photo1.jpg",
      isActive: false,
    },
    {
      id: 3,
      name: "Karlen",
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      paragraph2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      listItems: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
      photoURL: "./public/photo1.jpg",
      isActive: false,
    },
    {
      id: 4,
      name: "Seroj",
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      paragraph2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      listItems: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
      photoURL: "./public/photo1.jpg",
      isActive: false,
    },
  ]);

  //   const leftSlide = (users) => {
  //     const index = users.findIndex((item) => item.isActive === true);
  //     if (index === 0) {
  //       setUsers(
  //         users.map((item, ind) => {
  //           if (ind === 0) {
  //             item.isActive = false;
  //           }
  //           if (ind === users.length - 1) {
  //             item.isActive = true;
  //           }
  //         })
  //       );
  //     }
  //     setUsers(
  //       users.map((item, ind) => {
  //         if (ind === index - 1) {
  //           item.isActive = true;
  //         }
  //         if (ind === index) {
  //           item.isActive = false;
  //         }
  //       })
  //     );
  //   };

  return (
    <div className="About">
      <FaArrowLeft className="icon left" />
      {users.map((item) => {
        if (item.isActive === true) {
          return (
            <div key={item.id} className="user_container">
              <h2>About {item.name}</h2>
              <div className="container">
                <div className="image_container">
                  <img src={item.photoURL} />
                </div>

                <div className="user_info">
                  <p className="first_paragraph">{item.paragraph1}</p>
                  <p className="second_paragraph">{item.paragraph2}</p>
                  <ul>
                    {item.listItems.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        }
      })}
      <FaArrowRight className="icon right" />
    </div>
  );
}
