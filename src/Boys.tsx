import Boy from "./Boy";

const Boys = () => {
  return (
    <div className="cast-container">
      <div className="line">
        <Boy name="Adam" imgName="bluecrystal.png"/>
        <Boy name="Lucas" imgName="frogyfro.png"/>
        <Boy name="Nico" imgName="nico.png"/>
        <Boy name="Jon" imgName="shadowlugia.png"/>
      </div>
      <div className="line">
        <Boy name="Matthew" imgName="lordgeek101.png"/>
        <Boy name="Dan" imgName="dtm.png"/>
        <Boy name="Aidan" imgName="aidanbh123.png"/>
        <Boy name="Will" imgName="geosquare.png"/>
      </div>
    </div>
  );
};

export default Boys;
