import style from "./Navbar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Searchbox from "../Searchbox/Searchbox";

export default function Navbar() {
  return <nav className={style.navbar}>
    <Logo />
    <Searchbox />
    <Button>Give Feedback</Button>
  </nav>;
}


