import Link from "next/link";
import s from "./navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <>
      <div className={`${s.navbar}`}>
        <div
          role="button"
          tabIndex="0"
          onClick={() => router.push(`/`)}
          className={`${s.logo}`}
        >
          <img src="/general/favicon.ico" alt="logo" />
        </div>
        <div className={`${s.links_container}`}>
          <Link href="/" className={`${s.link}`}>
            Heroes
          </Link>
          <Link href="/about" className={`${s.link}`}>
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
