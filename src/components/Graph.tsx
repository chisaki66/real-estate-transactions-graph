import "./Graph.scss";
import { Bar } from "react-chartjs-2";
import { Chart, registerables, ScriptableContext } from "chart.js";
import place_icon_white from "../images/place_icon_white.svg";
import calendar_icon_white from "../images/calendar_icon_white.svg";
import type_icon_white from "../images/type_icon_white.svg";
import replaceData from "../replaceData";
import constantList from "../constantList";

Chart.register(...registerables);

interface GraphProps {
  downloadPrefectures: string;
  year: number;
  type: string;
  selectedRealEstateTransactionPrice: number;
  averageRealEstateTransactionPrice: number;
}

const { replaceDownloadPrefectures, replaceType } = replaceData;
const {
  DEFAULT_SElECTED_REAL_ESTATE_TRANSACTION_PRICE,
  DEFAULT_AVERAGE_REAL_ESTATE_TRANSACTION_PRICE,
} = constantList;

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "rgba(255, 99, 132, 1)",
      },
    },
    tooltip: {
      titleColor: "rgba(255, 255, 255, 1)",
      bodyColor: "rgba(255, 255, 255, 1)",
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

const Graph: React.FC<GraphProps> = ({
  downloadPrefectures,
  year,
  type,
  selectedRealEstateTransactionPrice,
  averageRealEstateTransactionPrice,
}) => {
  const data = {
    labels: [`${replaceDownloadPrefectures(downloadPrefectures)}`, "全国平均"],
    datasets: [
      {
        label: "不動産取引価格",
        data: [
          selectedRealEstateTransactionPrice === 0
            ? DEFAULT_SElECTED_REAL_ESTATE_TRANSACTION_PRICE
            : selectedRealEstateTransactionPrice,
          averageRealEstateTransactionPrice === 0
            ? DEFAULT_AVERAGE_REAL_ESTATE_TRANSACTION_PRICE
            : averageRealEstateTransactionPrice,
        ],
        backgroundColor: (context: ScriptableContext<"bar">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return undefined;
          }

          const gradient = ctx.createLinearGradient(
            0,
            0,
            chartArea.right,
            chartArea.bottom,
          );
          gradient.addColorStop(0, "rgba(0, 153, 180, 1)");
          gradient.addColorStop(0.6, "rgba(191, 191, 74, 1)");
          gradient.addColorStop(1, "rgba(255, 221, 74, 1)");

          const index = context.dataIndex;

          return index === 0 ? gradient : "rgba(112, 109, 101, 1)";
        },
      },
    ],
  };

  return (
    <div className="graph">
      <ul className="graph__header">
        <li className="graph__header-list">
          <i>
            <img src={place_icon_white} alt="place_icon_white" />
          </i>
          <span className="graph__text">
            {replaceDownloadPrefectures(downloadPrefectures)}
          </span>
        </li>
        <li className="graph__header-list">
          <i>
            <img src={calendar_icon_white} alt="calendar_icon_white" />
          </i>
          {year === 0 ? (
            <span className="graph__text">2021年</span>
          ) : (
            <span className="graph__text">{year}年</span>
          )}
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
