import '../styles/Loading.css';
import r2d2_loading from '../media/r2d2_loading.gif';

function Loading() {
  return (
    <div className='loading-container'>
      <div className='loading-image-container'>
      <img
      src={r2d2_loading}
      alt='Gif that indicates the page is loading the data'
      className='loading-image'
      />
      </div>
      <p className='loading-p'>Loading...</p>
    </div>
  );
}

export default Loading;
