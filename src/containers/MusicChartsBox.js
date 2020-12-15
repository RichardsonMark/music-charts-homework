import {useState, useEffect} from "react";
import Chart from "../components/Chart";

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
      <>
    <h1>iTunes music charts top 20!</h1>
    <Chart chart={chart.feed.entry} />
    </>
  );

}

export default MusicChartsBox;