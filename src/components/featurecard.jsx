function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-gray-500 leading-7">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;