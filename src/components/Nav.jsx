import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
const Nav = () => {
  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="HeaderLogo"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-montserrat leading-normal text-lg text-slate-gray  hover:underline duration-200  transition-transform ease-in-out hover:scale-190"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block cursor-pointer">
          <img src={hamburger} width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
