import Logo from "../assets/header-logo.svg";

export default function Header({ children }) {
  return (
    <>
      <div className="flex my-12 justify-between">
        <img src={Logo} alt="Logo" />
        {children}
      </div>
    </>
  );
}
