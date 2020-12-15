import './Song.css';
import ReactAudioPlayer from 'react-audio-player';


const Song = ({title, artist, covimg, preview, chartpos}) => {
    return (
        <div className="song-item">
            <h1>{title}</h1>
            <h2>{artist}</h2>
            <img src={covimg} alt="image" />
            <ReactAudioPlayer
            src={preview}
            autoPlay
            controls
            />
            <p>Chart Pos: {chartpos}</p>
        </div>
    )
  
  }
  
  export default Song;