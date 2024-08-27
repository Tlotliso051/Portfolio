import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-center py-6">
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tlotliso-arthur-matea-92a43a2a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BN11lQXMVSCWlQU6BqeTGwA%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Tlotliso051" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://wa.me/0792778680" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
