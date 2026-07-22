import Community from "../components/Community";
import AIMentor from "../components/AIMentor";
import SkillCategories from "../components/SkillCategories";
import Challenges from "../components/Challenges";
import Portfolio from "../components/Portfolio";
import Dashboard from "../components/Dashboard";
import CareerAssistant from "../components/CareerAssistant";
import ProgressTracker from "../components/ProgressTracker";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import Stats from "../components/Stats";

function Home() {
  return (
    <>

      <Hero />

      <Stats />

      <SkillCategories />

      <AIMentor />

      <Dashboard />

      <Community />

      <Challenges />

      <Portfolio />

      <CareerAssistant />

      <ProgressTracker />

    <section className="max-w-7xl mx-auto py-20 px-8">

  <h1 className="text-4xl font-bold text-center mb-14">
    Everything You Need
  </h1>

  <div className="grid md:grid-cols-3 gap-8">

    <FeatureCard
      icon="📚"
      title="Learn Skills"
      description="Explore programming, AI, web development and much more."
    />

    <FeatureCard
      icon="🎓"
      title="Teach Others"
      description="Share your knowledge and become a mentor."
    />

    <FeatureCard
      icon="🤝"
      title="Find Teammates"
      description="Connect with students for mini projects and hackathons."
    />

    <FeatureCard
      icon="🧠"
      title="AI Guidance"
      description="Receive personalized learning recommendations."
    />

    <FeatureCard
      icon="🏆"
      title="Skill Badges"
      description="Earn badges by completing learning milestones."
    />

    <FeatureCard
      icon="💼"
      title="Portfolio"
      description="Showcase your achievements in one professional profile."
    />

  </div>

</section> 

      <Footer />
    </>
  );
}

export default Home;