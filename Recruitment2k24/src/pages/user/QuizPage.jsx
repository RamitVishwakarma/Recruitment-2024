import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import HeaderProfile from "../../components/HeaderProfile";

export default function QuizPage() {
  return (
    <>
      <div className="h-full">
        <Navbar />
        <div className="mx-40">
          <Header>
            {/* REMOVE THE COMPLETE PROFILE FROM HERE */}
            <HeaderProfile></HeaderProfile>
          </Header>
          {/* Question section and question navigator will be using states*/}
        </div>
      </div>
    </>
  );
}
