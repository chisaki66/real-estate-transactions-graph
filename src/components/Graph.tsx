import "./Graph.scss";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import place_icon_white from "../images/place_icon_white.svg";
import calendar_icon_white from "../images/calendar_icon_white.svg";
import type_icon_white from "../images/type_icon_white.svg";

Chart.register(...registerables);

interface GraphProps {
  downloadPrefectures: string;
  year: number;
  type: string;
  selectedRealEstateTransactionPrice: number;
}

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

const Graph: React.FC<GraphProps> = ({
  downloadPrefectures,
  year,
  type,
  selectedRealEstateTransactionPrice,
}) => {
  const replaceDownloadPrefectures = (data: string) => {
    switch (data) {
      case "1":
        return "北海道";
      case "2":
        return "青森県";
      case "3":
        return "岩手県";
      case "4":
        return "宮城県";
      case "5":
        return "秋田県";
      case "6":
        return "山形県";
      case "7":
        return "福島県";
      case "8":
        return "茨城県";
      case "9":
        return "栃木県";
      case "10":
        return "群馬県";
      case "11":
        return "埼玉県";
      case "12":
        return "千葉県";
      case "13":
        return "東京都";
      case "14":
        return "神奈川県";
      case "15":
        return "新潟県";
      case "16":
        return "富山県";
      case "17":
        return "石川県";
      case "18":
        return "福井県";
      case "19":
        return "山梨県";
      case "20":
        return "長野県";
      case "21":
        return "岐阜県";
      case "22":
        return "静岡県";
      case "23":
        return "愛知県";
      case "24":
        return "三重県";
      case "25":
        return "滋賀県";
      case "26":
        return "京都府";
      case "27":
        return "大阪府";
      case "28":
        return "兵庫県";
      case "29":
        return "奈良県";
      case "30":
        return "和歌山県";
      case "31":
        return "鳥取県";
      case "32":
        return "島根県";
      case "33":
        return "岡山県";
      case "34":
        return "広島県";
      case "35":
        return "山口県";
      case "36":
        return "徳島県";
      case "37":
        return "香川県";
      case "38":
        return "愛媛県";
      case "39":
        return "高知県";
      case "40":
        return "福岡県";
      case "41":
        return "佐賀県";
      case "42":
        return "長崎県";
      case "43":
        return "熊本県";
      case "44":
        return "大分県";
      case "45":
        return "宮崎県";
      case "46":
        return "鹿児島県";
      case "47":
        return "沖縄県";
      default:
        return "東京都";
    }
  };

  const replaceType = (data: string) => {
    switch (data) {
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
      default:
        return "土地（住宅地）";
    }
  };

  const data = {
    labels: [`${replaceDownloadPrefectures(downloadPrefectures)}`, "全国平均"],
    datasets: [
      {
        label: "Dataset",
        data: [
          selectedRealEstateTransactionPrice === 0
            ? 391400
            : selectedRealEstateTransactionPrice,
          20000,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(112, 109, 101, 1)"],
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
          <span className="graph__text">{year === 0 ? 2021 : year}年</span>
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
