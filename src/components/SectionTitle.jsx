const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl text-black font-bold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-black max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
