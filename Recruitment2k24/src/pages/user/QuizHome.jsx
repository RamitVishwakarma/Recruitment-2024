import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arrow from "../../assets/arw-circle-right.svg";
import Profile from "../../assets/prof.svg";
import { Link } from "react-router-dom";

export default function QuizHome() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mx-40">
          <Header>
            <div className="flex flex-col">
              <div className="flex text-right gap-3">
                <div className="flex flex-col">
                  <span className="text-grey text-xl">Hello</span>
                  <span className="text-grey text-2xl font-bold">
                    Ramit Vishwakarma
                  </span>
                </div>
                <div>
                  <img src={Profile} />
                </div>
              </div>
              {/* conditional if the profile is not completed */}
              <Link to="/user-profile">
                <div className="flex ml-32 mt-1 border-b-2 border-red">
                  <span className=" text-red text-lg">
                    Complete Profile &nbsp;
                  </span>
                  <img className="w-6" src={arrow} />
                </div>
              </Link>
            </div>
          </Header>
          <h1 className="text-5xl text-center">Lets start the Quiz!</h1>
          <div className="mx-auto m-5 bg-red/20 w-3/5 h-[20rem] flex flex-col justify-center items-center rounded-lg">
            <div className="text-red font-bold text-2xl text-center w-[60rem]">
              Guidelines
            </div>

            <ul className="text-red list-disc px-20 py-10 text-xl">
              <li className="w-[]">
                This is a timed quiz. You will only get 30 mins to complete it.
              </li>
              <li>
                You are not allowed to switch tabs or window, if you do, you
                will be disqualified.
              </li>
              <li>
                This quiz contains 20 questions, try your best to attempt them
                all.
              </li>
              <li>All the very best to you. See you later.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <button className="mx-auto font-bold text-xl text-button-text bg-lime rounded-lg hover:bg-button-hover px-6 py-2">
              Begin
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
