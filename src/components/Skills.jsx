import React from "react";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: "/html.png",
      name: "HTML",
    },
    {
      id: 2,
      logo: "/css.jpg",
      name: "CSS",
    },
    {
      id: 3,
      logo: "/javascript.png",
      name: "Java Script",
    },
    {
      id: 4,
      logo: "/reactjs.png",
      name: "React JS",
    },
    {
      id: 5,
      logo: "/redux.png",
      name: "Redux",
    },
    {
      id: 6,
      logo: "/tailwind.png",
      name: "Tailwind CSS",
    },
    {
      id: 7,
      logo: "/bootstrap.jpg",
      name: "Boot Strap",
    },
    {
      id: 8,
      logo: "/node.png",
      name: "Node JS",
    },
    {
      id: 9,
      logo: "/express.png",
      name: "Express JS",
    },
    {
      id: 10,
      logo: "/mongodb.jpg",
      name: "Mongo DB",
    },
    {
      id: 11,
      logo: "/git.png",
      name: "Git",
    },
    {
      id: 12,
      logo: "/github.png",
      name: "GitHub",
    },
    {
      id: 13,
      logo: "/vscode.jpg",
      name: "VS Code",
    },
    {
      id: 14,
      logo: "/npm.png",
      name: "NPM",
    },
    {
      id: 15,
      logo: "/netlify.jpg",
      name: "Netlify",
    },
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Technical Skills & Tools</h1>
        <br></br>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}>
              <img src={logo} className="w-[110px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
