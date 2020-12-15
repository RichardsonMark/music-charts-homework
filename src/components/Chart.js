import Song from "./Song";
import './Chart.css';

const Chart = ({chart}) => {

    const chartNodes = chart.map((entry) => {
        let title = entry["im:name"].label;
        let artist = entry["im:artist"].label;
        let chartpos = chart.indexOf(entry);
        let covimg = entry["im:image"][0].label;
        let preview = entry.link[1].attributes.href;
        
        return (
            <Song title={title} artist={artist} chartpos={chartpos + 1} covimg={covimg} preview={preview} key={chartpos} />
        )
    })

  return (
    <div className="chart-list">
    <ul>
        {chartNodes}
    </ul>
    </div>
  )

}

export default Chart;