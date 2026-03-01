const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl text-gray-900 dark:text-white font-bold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
