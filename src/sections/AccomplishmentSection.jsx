import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";

const AccomplishmentSection = () => {
  return (
    <section className="py-28 bg-white/5">
      <FadeIn>
        <SectionTitle title="Accomplishments" />
        <p className="text-white/70 text-center">
          Awards, publications and achievements.
        </p>
      </FadeIn>
    </section>
  );
};

export default AccomplishmentSection;
