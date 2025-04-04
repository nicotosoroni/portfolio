const Header = () => {
  return (
    <header className="flex justify-center items-center py-3 w-[1120px]">
      <nav className="flex flex-rox gap-x-10 opacity-80">
        <a href="#home" className="hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#projects" className="hover:text-gray-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
