import Boy from "./Boy";

const Boys = () => {
  return (
    <div className="cast-container">
      <div className="line">
        <Boy name="Adam" imgName="bluecrystal.png" subPage="adam"/>
        <Boy name="Lucas" imgName="frogyfro.png" subPage="lucas"/>
        <Boy name="Nico" imgName="nico.png" subPage="nico"/>
        <Boy name="Jon" imgName="shadowlugia.png" subPage="jon"/>
      </div>
      <div className="line">
        <Boy name="Matthew" imgName="lordgeek101.png" subPage="matthew"/>
        <Boy name="Dan" imgName="dtm.png" subPage="dan"/>
        <Boy name="Aidan" imgName="aidanbh123.png" subPage="aidan"/>
        <Boy name="Will" imgName="geosquare.png" subPage="will"/>
      </div>
    </div>
  );
};

export default Boys;
