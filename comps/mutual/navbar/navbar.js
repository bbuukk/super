import Link from "next/link";
import s from "./navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="container">
      <div className={`${s.navbar}`}>
        <div
          role="button"
          tabIndex="0"
          onClick={() => router.push(`/`)}
          className={`${s.logo}`}
        >
          <img src="/general/logotype.png" alt="logo" />
        </div>
        <div className={`${s.links_container}`}>
          <Link href="/" className={`${s.link}`}>
            HEROES
          </Link>
          {/* <Link href="/about" className={`${s.link}`}>
              ABOUT
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
