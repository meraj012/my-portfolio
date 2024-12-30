import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import HackerRankLogo from "../assets/hackerrank.svg";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-emerald-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, I’m <b>Meraj</b>, a passionate <b>Frontend Developer</b>{" "}
              skilled in creating responsive and user-friendly websites with{" "}
              <b>React</b>. I specialize in building clean, modern designs and
              turning ideas into functional web applications. Check out my
              projects to see my work, and feel free to reach out if you’d like
              to collaborate!
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/md-meraj-webdev/"
                      target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/meraj012" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hackerrank.com/profile/WebDevMeraj"
                      target="_blank">
                      <img
                        src={HackerRankLogo}
                        alt="HackerRank"
                        className="w-6 h-6 cursor-pointer align-middle"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://leetcode.com/u/mdmerajansari/"
                      target="_blank">
                      <SiLeetcode className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiCss3 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiJavascript className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className=" mt-16 pt-16 flex justify-center md:justify-start">
              <a
                href="/my_resume.pdf"
                download="Meraj_Resume.pdf"
                className=" border border-black text-white bg-black px-4 py-2 rounded-md transition duration-300 hover:bg-white hover:text-black ">
                Resume
              </a>
            </div>
          </div>
          <div className=" md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src="/photo.jpg"
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
