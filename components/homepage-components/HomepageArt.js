import { useContext } from 'react';
import { Context } from '../../pages/Store';

const HomepageArt = () => {
  const { art } = useContext(Context);
  return (
    <div id="artGalleryContainer" className="flex mt-28">
      {art &&
        art.map((a, idx) => (
          <div id="paintingContainer" className="w-28">
            <img
              className="w-56 object-cover"
              key={idx}
              src={a.artPhoto}
              alt=""
            ></img>
          </div>
        ))}
    </div>
  );
};

export default HomepageArt;
