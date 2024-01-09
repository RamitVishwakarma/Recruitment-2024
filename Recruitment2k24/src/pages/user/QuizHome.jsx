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
            </div>
          </Header>
          <h1 className="text-5xl font-bold text-center pb-2">
            Lets start the Quiz!
          </h1>
          <div className="mx-auto mt-2 bg-red/20 w-3/5 h-2/5 flex flex-col justify-center items-center rounded-lg">
            <div className="text-red font-bold text-3xl text-center p-5">
              Guidelines
            </div>

            <ul className="text-red w-[95%] list-disc px-20 pb-10 text-2xl">
              <li className="">
                This is a timed quiz. You will only get 30 mins to complete it.
              </li>
              <li className="mt-3 max-w-4/5">
                You are not allowed to switch tabs or window, if you do, you
                will be disqualified.
              </li>
              <li className="mt-3 max-w-4/5">
                This quiz contains 20 questions, try your best to attempt them
                all.
              </li>
              <li className="mt-3 max-w-4/5">
                All the very best to you. See you later.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <button className="mx-auto mt-4 font-bold text-xl text-button-text bg-lime rounded-lg hover:bg-button-hover px-10 py-3">
              Begin
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
