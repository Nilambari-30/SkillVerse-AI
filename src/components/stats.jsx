function Stats() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-center text-3xl font-bold mb-10">
        Why Choose Virelo?
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h1 className="text-4xl font-bold text-indigo-600">100+</h1>
          <p className="text-gray-500 mt-2">Skills</p>
        </div>

        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h1 className="text-4xl font-bold text-indigo-600">500+</h1>
          <p className="text-gray-500 mt-2">Students</p>
        </div>

        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h1 className="text-4xl font-bold text-indigo-600">50+</h1>
          <p className="text-gray-500 mt-2">Mentors</p>
        </div>

        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h1 className="text-4xl font-bold text-indigo-600">AI</h1>
          <p className="text-gray-500 mt-2">Guidance</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;