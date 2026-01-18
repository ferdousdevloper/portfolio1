import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";

const ProjectsSection = () => {
  return (
    <section className="py-28 bg-white/5">
      <FadeIn>
        <SectionTitle title="Projects" />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[1,2,3].map(i => (
            <div key={i} className="p-6 bg-black/40 rounded-xl">
              <h3 className="font-semibold mb-2">Project {i}</h3>
              <p className="text-white/60 text-sm">
                Short project description.
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default ProjectsSection;
