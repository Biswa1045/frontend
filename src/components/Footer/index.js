

function Footer() {
  return (
    <div className="w-full py-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-semibold text-2xl text-primary">Biswajit Sahu</h1>
          <nav className="max-w-3xl w-full flex flex-wrap justify-center gap-8 mt-4 text-lg">
            <a href="#about" className="text-text_primary hover:text-primary transition-colors duration-200">About</a>
            <a href="#skills" className="text-text_primary hover:text-primary transition-colors duration-200">Skills</a>
            <a href="#experience" className="text-text_primary hover:text-primary transition-colors duration-200">Experience</a>
            <a href="#projects" className="text-text_primary hover:text-primary transition-colors duration-200">Projects</a>
            <a href="#education" className="text-text_primary hover:text-primary transition-colors duration-200">Education</a>
          </nav>
          <div className="flex gap-4 mt-4">
            <a href={""} target="_blank" rel="noopener noreferrer" className="text-text_primary hover:text-primary transition-colors duration-200">
              {/* <Img className="text-3xl" /> */}
            </a>
            <a href={""} target="_blank" rel="noopener noreferrer" className="text-text_primary hover:text-primary transition-colors duration-200">
              {/* <InstagramIcon className="text-3xl" /> */}
            </a>
          </div>
          <p className="text-sm text-soft2 mt-4">&copy; 2023 Biswajit Sahu. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
