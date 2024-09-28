import "./Graph.scss";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import place_icon_white from "../images/place_icon_white.svg";
import calendar_icon_white from "../images/calendar_icon_white.svg";
import type_icon_white from "../images/type_icon_white.svg";

Chart.register(...registerables);

interface GraphProps {
  year: number;
  type: string;
}

const data = {
  labels: ["東京都", "全国平均"],
  datasets: [
    {
      label: "Dataset",
      data: [100, 59],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(112, 109, 101, 1)"],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "rgba(255, 99, 132, 1)",
      },
    },
    tooltip: {
      titleColor: "rgba(0, 0, 0, 1)",
      bodyColor: "rgba(0, 0, 0, 1)",
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 1)",
      },
    },
    y: {
      grid: {
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 1)",
      },
    },
  },
};

const Graph: React.FC<GraphProps> = ({ year, type }) => {
  const replaceType = (type: string) => {
    switch (type) {
      case "1":
        return "土地（住宅地）";
      case "2":
        return "土地（商業地）";
      case "3":
        return "中古マンション等";
      case "4":
        return "農地";
      case "5":
        return "林地";
    }
  };

  return (
    <div className="graph">
      <ul className="graph__header">
        <li className="graph__header-list">
          <i>
            <img src={place_icon_white} alt="place_icon_white" />
          </i>
          <span className="graph__text">東京都</span>
        </li>
        <li className="graph__header-list">
          <i>
            <img src={calendar_icon_white} alt="calendar_icon_white" />
          </i>
          <span className="graph__text">{year}年</span>
        </li>
        <li className="graph__header-list">
          <i>
            <img src={type_icon_white} alt="type_icon_white" />
          </i>
          <span className="graph__text">{replaceType(type)}</span>
        </li>
      </ul>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
