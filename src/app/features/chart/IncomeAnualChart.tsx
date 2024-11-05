import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const LineChart = () => {
  const [chartOptions] = useState({
    xAxis: {
      categories: [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
      ],
    },
    series: [
      { data: [100, 70, 500, 300, 200, 500, 700, 900] }, // Change to numerical values if necessary
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            // mouseOver: (e) => setHoverData(e.target.category)
          },
        },
      },
    },
  });

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default LineChart;
