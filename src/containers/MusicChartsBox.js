import {useState, useEffect} from "react";
import Chart from "../components/Chart";
import './MusicChartsBox.css';


const MusicChartsBox = () => {

    const [chart, setChart] = useState(null);

    const getChart = () => {
      console.log("getting chart info...")
      fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setChart(data);
      })
    };

    useEffect(() => {
        getChart();
      }, []);


    if (!chart) return null;

  return (
      <div className="charts-box">
          <h1>iTunes/🍏Music charts top 20!</h1>
          <Chart chart={chart.feed.entry} />
      </div>
  );

}

export default MusicChartsBox;