const HeroCardsGallery = () => {
  return (
    <>
      <div>
        <h2>Other your cards</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {heroes.map((hero, index) => (
            <div key={index} className="col">
              <HeroCard id={index} hero={hero} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroCardsGallery;
