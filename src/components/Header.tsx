const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 w-[1120px]">
      <img
        className="rounded-full w-12 h-12"
        src="https://i.ibb.co/k6z2SSRp/profile-Photo.jpg"
        alt="nico tosoroni photo"
      />
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
