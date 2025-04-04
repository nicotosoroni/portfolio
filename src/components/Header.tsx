const Header = () => {
  return (
    <header className="flex justify-center items-center py-5 w-full xl:w-[1120px] mx-auto">
      <nav className="flex flex-row gap-x-10 opacity-80">
        <a href="#top" className="hover:text-gray-400">
          Home
        </a>
        <a href="#experience" className="hover:text-gray-400">
          Experience
        </a>
        <a href="#about-me" className="hover:text-gray-400">
          About
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
