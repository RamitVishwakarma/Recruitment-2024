import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Flame from "../../../src/assets/flame.svg";
import Sapling from "../../../src/assets/sapling.svg";
import GDSClogo from "../../../src/assets/gdsc_logo_centered.svg";
import Homebg from "../../../src/assets/homepagebg.svg";
import Recruitments from "../../../src/assets/recruitments-text.svg";
import Timeline from "../../../src/assets/timeine.svg";
import Pointer from "../../../src/assets/tri.svg";

import Android from "../../../src/assets/android.svg";
import WebClub from "../../../src/assets/webclub.svg";
import Programming from "../../../src/assets/programming.svg";
import Design from "../../../src/assets/design.svg";
import ML from "../../../src/assets/machinelearning.svg";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Homepage() {
  const lenis = new Lenis({
    lerp: 0.3,
    easing: (t) => 1 - Math.pow(1 - t, 5),
    //duration: 0.2,
  });

  // Scroll to domain logic
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".gdsclogo", { opacity: 0 });
    gsap.to(".text1", {
      scrollTrigger: {
        trigger: ".text1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: -120,
    });
    gsap.to(".text2", {
      scrollTrigger: {
        trigger: ".text2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: -120,
    });
    gsap.to(".gdsclogo", {
      scrollTrigger: {
        duration: 1,
        trigger: ".gdsclogo",
        start: "top 50%",
        end: "bottom 90%",
        scrub: false,
      },
      opacity: 1,
    });
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-20 items-center mb-20 text-grey">
        <img className="mt-52 mx-auto" src={Recruitments}></img>

        <div className="flex items-center gap-12">
          <h2 className="font-bold text-5xl">Register Here</h2>
          <a href="/register">
            <button className="cta flex items-center gap-6 bg-lime px-10 rounded-xl py-4">
              <h5 className="text-2xl">Let&apos;s Go</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none">
                <path
                  d="M28.9491 13.1501H2.08261C1.75223 13.1501 1.47618 13.0392 1.25448 12.8175C1.03274 12.5958 0.921875 12.3197 0.921875 11.9894C0.921875 11.659 1.03274 11.3829 1.25448 11.1612C1.47618 10.9395 1.75223 10.8286 2.08261 10.8286H28.9491L20.2793 2.15882C20.0531 1.93264 19.9348 1.66627 19.9244 1.35972C19.914 1.05317 20.0323 0.771921 20.2793 0.51598C20.5353 0.259999 20.8114 0.129787 21.1075 0.125337C21.4036 0.120849 21.6797 0.246595 21.9356 0.502576L32.1099 10.6769C32.3123 10.8792 32.4544 11.0861 32.5363 11.2974C32.6181 11.5087 32.659 11.7393 32.659 11.9894C32.659 12.2394 32.6181 12.47 32.5363 12.6813C32.4544 12.8927 32.3123 13.0995 32.1099 13.3019L21.9356 23.4762C21.7094 23.7023 21.4408 23.8207 21.1298 23.8311C20.8188 23.8415 20.5353 23.7187 20.2793 23.4627C20.0323 23.2068 19.9066 22.933 19.9021 22.6413C19.8976 22.3496 20.0234 22.0758 20.2793 21.8199L28.9491 13.1501Z"
                  fill="#2F3B00"
                />
              </svg>
            </button>
          </a>
        </div>
        {/* flame */}
        <div className="mt-36 text-center relative">
          <img src={Flame} alt="" />
          <p className="text1 text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            Every talent is precious to us
          </p>
        </div>

        {/* sapling */}
        <div className="mt-48 text-center mb-4 relative">
          <img src={Sapling} alt="" />
          <p className="text2 text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            A place to hone your skills and grow
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="204"
          viewBox="0 0 3 204"
          fill="none">
          <path
            opacity="0.4"
            d="M1.5 0L1.50001 204"
            stroke="#353535"
            strokeWidth="3"
          />
        </svg>

        {/* club intro */}
        <div className="mt-4 flex text-center flex-col gap-6 items-center">
          <h3 className="text-5xl">Welcome to</h3>
          <div className="relative">
            <img src={Homebg} className="w-screen" alt="" />
            <img
              className="gdsclogo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={GDSClogo}
              alt=""
            />
          </div>
          <h3 className="text-5xl" id="domains">
            and find a place in our domains
          </h3>
        </div>

        {/* domains */}
        <div className="cards">
          <div className="row1">
            <div className="card bg-purple/20 text-purple font-bold">
              <img src={Programming} alt="" />
              <h2>Programming</h2>
              <p>
                The art of instructing computers through code to perform
                specific tasks, solve problems, and create software
                applications.
              </p>
              <span>01</span>
            </div>
            <div className="card bg-red/20 text-red font-bold">
              <img src={WebClub} alt="" />
              <h2>Web Club</h2>
              <p>
                Creating wonders in web apps, encompassing both front-end and
                back-end development to ensure a seamless online user
                experience.
              </p>
              <span>02</span>
            </div>
            <div className="card bg-lime/20 text-lime font-bold">
              <img src={Android} alt="" />
              <h2>Android</h2>
              <p>
                The domain focused on developing applications and systems for
                the Android operating system, powering a vast majority of mobile
                devices.
              </p>
              <span>03</span>
            </div>
          </div>

          <div className="row2">
            <div className="card bg-light-blue/20 text-light-blue font-bold">
              <img src={Design} alt="" />
              <h2>Design</h2>
              <p>
                The creative process of shaping the visual and user interface
                aspects of digital products, including websites, apps to enhance
                user engagement and satisfaction.
              </p>
              <span>04</span>
            </div>
            <div className="card bg-[#D2BD0026] text-[#ECCD2A] font-bold">
              <img src={ML} alt="" />
              <h2>
                Machine
                <br />
                Learning
              </h2>
              <p>
                Harnessing algorithms to enable computers to learn from data,
                recognize patterns, and make predictions autonomously.
              </p>
              <span>05</span>
            </div>
          </div>
        </div>

        {/* ready? */}
        <div className="mt-10">
          <p className="text-6xl w-3/5 mx-auto text-center">
            Ready to be a part of a thriving community of geeks?
          </p>
        </div>
        {/* timeline */}
        <div className="flex items-end gap-8">
          <div className="flex">
            <img src={Timeline} alt="" />
            <img
              className="absolute mt-2 -translate-x-2"
              src={Pointer}
              alt=""
            />
          </div>
          <div className="flex gap-14 text-4xl flex-col pr-8">
            <div className="flex gap-14 justify-between">
              <h3>Registrations Start</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">20</span>{" "}
                <span className="text-purple">Feb</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
            <div className="flex gap-14 justify-between">
              <h3>Project Submissions</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">27</span>{" "}
                <span className="text-purple">Feb</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
            <div className="flex gap-14 justify-between">
              <h3>Quiz Round</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">03</span>{" "}
                <span className="text-purple">Mar</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
            <div className="flex gap-14 justify-between">
              <h3>Interview Shortlisting</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">05</span>{" "}
                <span className="text-purple">Mar</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
            <div className="flex gap-14 justify-between">
              <h3>Results</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">10</span>{" "}
                <span className="text-purple">Mar</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
          </div>
        </div>

        {/* easter */}
        <div className="flex text-xl gap-8 opacity-40 mt-12">
          <p>------------------------------</p>
          <p>May the force be with you</p>
          <p>------------------------------</p>
        </div>

        {/* admin login */}
        <a href="/admin-login">
          <button className="flex gap-4 rounded-full bg-text-box py-1 px-4 hover:bg-grey/5">
            <p>Admin Login</p>
            <span className="material-symbols-rounded">arrow_circle_right</span>
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
}
