import React from "react";
import styles from "./Blogs.module.css";

const Blogs = () => {
  const imgsPrag = [
    {
      id: 1,
      src: "/assets/blogs/1.png",
      description:
        "Blood donation is a safe and well-regulated process that involves several steps to ensure the health and well-being of both the donor and the recipient. Before donating, potential donors undergo a thorough screening process to assess their eligibility. This screening includes checking for factors like age, weight, overall health, and medical history. The donated blood is also carefully tested for various infectious diseases to prevent any potential risks to the recipient.",
    },
    {
      id: 2,
      src: "/assets/blogs/2.png",
      description:
        "The impact of a single blood donation can be significant. One donation can help save up to three lives as different components of blood, such as red blood cells, platelets, and plasma, can be separated and used to treat different medical conditions. For example, red blood cells are commonly used to replace blood loss during surgeries or treat.",
    },
    {
      id: 3,
      src: "/assets/blogs/3.png",
      description:
        "Blood donation relies heavily on the generosity of volunteers. While blood banks and hospitals often organize blood drives to encourage donations, the need for blood is constant. Therefore, it's crucial for eligible individuals to consider becoming regular blood donors. Your donation can truly make a difference and give hope to those who are battling illness or injury. By giving the gift of life through blood donation, you become a part of a compassionate community dedicated to saving lives and improving the well-being of others.",
    },
    {
      id: 4,
      src: "/assets/blogs/4-4.png",
      description:
        "Blood types are classified into four main groups: A, B, AB, and O. Type O negative is considered a universal donor, compatible with all blood types. Conversely, individuals with AB positive are universal recipients, able to receive blood from any type. Matching blood types is crucial in transfusions to minimize risks and maximize effectiveness.",
    },
    {
      id: 5,
      src: "/assets/blogs/5.png",
      description:
        "Individuals who wish to donate blood generally need to be at least 17 or 18 years old, in good health, meet weight requirements, and have a sufficient hemoglobin level. Factors such as recent travel or medical treatments may temporarily defer donation. It's essential to consult the local blood donation center or blood bank for precise eligibility criteria, as guidelines may vary by region.",
    },
  ];
  return (
    <div>
      {imgsPrag.map((img, index) => (
        <div key={index} className="imgParaContainer">
          <img src={img.src} alt={`Iamge ${index + 1}`} className="img" />
          <p className="p">{img.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
