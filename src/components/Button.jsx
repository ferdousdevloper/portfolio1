const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 bg-primary text-black rounded-full font-medium hover:scale-105 transition">
      {children}
    </button>
  );
};

export default Button;
