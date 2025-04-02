const Footer = () => {
  return (
    <div className="bg-gray-900 text-white h-44 w-full flex items-center justify-center border-t border-gray-600">
      <p className="text-lg text-[#B8B8B8]">
        &copy; {new Date().getFullYear()} Raunak. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
