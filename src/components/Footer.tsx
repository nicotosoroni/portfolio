const Footer = () => {
  return (
    <footer className=" rounded-lg shadow-sm m-4 bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm  sm:text-center text-orange-200/90">
          © 2025{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Nicolas Tosoroni
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0">
          <li>
            <a href="#experience" className="hover:underline me-4 md:me-6">
              Experience
            </a>
          </li>
          <li>
            <a href="#about-me" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
