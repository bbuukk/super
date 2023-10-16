import { useHeroContext } from "@/back/hooks/useHeroContext";
import BackHeroCard from "@/comps/backHeroCard";

const Test = () => {
  const { heroes } = useHeroContext();
  return (
    <>
      {heroes && (
        <div className="container">
          <BackHeroCard hero={heroes[1]} idx={1} />
        </div>
      )}
    </>
  );
};

export default Test;
