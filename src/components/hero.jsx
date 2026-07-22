import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Hero() {

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">


      <div className="grid md:grid-cols-2 items-center gap-16">


        {/* Left Side */}

        <div>


          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">

            🚀 AI Powered Learning Platform

          </span>



          <motion.h1

            initial={{
              opacity:0,
              y:50
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:1
            }}

            className="text-6xl font-bold mt-8 leading-tight"

          >

            Learn.

            <br />

            Teach.

            <br />

            Build Together.

          </motion.h1>




          <motion.p

            initial={{
              opacity:0,
              y:30
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:1,
              delay:0.3
            }}

            className="mt-8 text-gray-600 text-lg leading-8"

          >

            Virelo helps students discover new skills,
            teach others, find project teammates,
            and build an impressive portfolio with AI guidance.

          </motion.p>




          <div className="flex gap-5 mt-10">


            <Link

              to="/roadmap"

              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition"

            >

              Start Learning

            </Link>



            <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition">

              Explore

            </button>


          </div>


        </div>





        {/* Right Side */}


        <div className="flex justify-center">


          <motion.div


            initial={{
              scale:0
            }}


            animate={{
              scale:1
            }}


            transition={{
              duration:0.8
            }}


            className="bg-indigo-600 w-80 h-80 rounded-3xl shadow-2xl flex items-center justify-center"


          >


            <h1 className="text-white text-7xl font-bold">

              V

            </h1>


          </motion.div>


        </div>



      </div>


    </section>
  );

}


export default Hero;