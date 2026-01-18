import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";

const Training = () => {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6">
      <FadeIn>
        <SectionTitle title="Training" />
        <p className="text-white/70 text-center">
          Professional training & certifications details here.
        </p>
      </FadeIn>
    </section>
  );
};

export default Training;
