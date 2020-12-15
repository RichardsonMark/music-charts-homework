import './Song.css'


const Song = ({title, artist, covimg, chartpos}) => {
    return (
        <div className="song-item">
        <h1>{title}</h1>
        <h2>{artist}</h2>
        <img src={covimg} alt="image" />
        <p>Chart Pos: {chartpos}</p>
        </div>
    )
  
  }
  
  export default Song;