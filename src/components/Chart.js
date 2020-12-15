import Song from "./Song";


const Chart = ({chart}) => {

    const chartNodes = chart.map((entry) => {
        let title = entry["im:name"].label;
        let artist = entry["im:artist"].label;
        let chartpos = chart.indexOf(entry);
        
        return (
            <Song title={title} artist={artist} chartpos={chartpos + 1} key={chartpos} />
        )
    })

  return (
    <>
    <ul>
        {chartNodes}
    </ul>
    </>
  )

}

export default Chart;