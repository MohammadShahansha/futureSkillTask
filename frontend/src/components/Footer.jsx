import icon from "../assets/image/icon.png";
const Footer = () => {
  return (
    <footer className="footer bg-black text-[#ededed]  p-10 mt-40">
      <nav className="md:ml-20">
        <h6 className="text-2xl font-bold text-white">Abstructs</h6>
        <a className="link link-hover">Branches</a>
      </nav>
      <nav>
        <h6 className="text-2xl font-bold text-white">Resources</h6>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Release Notes</a>
        <a className="link link-hover">Status</a>
      </nav>
      <nav>
        <h6 className="text-2xl font-bold text-white">Community</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Linkdin</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Dribbble</a>
        <a className="link link-hover">Podcast</a>
      </nav>
      <nav>
        <h6 className="text-2xl font-bold text-white">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Legal</a>
        <h6 className="text-lg font-bold text-white mt-5">Contact Us</h6>
        <a className="link link-hover">info@abstruct.com</a>
      </nav>
      <nav className="mt-36">
        <img src={icon} alt="icon" />
        <a className="link link-hover">© Copyright 2022</a>
        <a className="link link-hover">Abstruct Studio Design. Inc.</a>
        <a className="link link-hover">All rights reserved</a>
      </nav>
    </footer>
  );
};

export default Footer;
