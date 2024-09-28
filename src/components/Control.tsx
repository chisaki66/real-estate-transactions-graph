import "./Control.scss";
import place_icon_black from "../images/place_icon_black.svg";
import calendar_icon_black from "../images/calendar_icon_black.svg";
import type_icon_black from "../images/type_icon_black.svg";
import { useState } from "react";

interface ControlProps {
  onDownload: (data: { year: number; type: string }) => void;
}

const Control: React.FC<ControlProps> = ({ onDownload }) => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedType, setSelectedType] = useState("");

  const generateYears = () => {
    // 年数は流動的でないため定数とする
    const START_YEAR = 2009;
    const END_YEAR = 2021;

    const years = [];
    for (let year = START_YEAR; year <= END_YEAR; year++) {
      years.push(year);
    }
    return years;
  };

  const handleDownload = () => {
    const dataToSend = {
      year: selectedYear,
      type: selectedType,
    };
    onDownload(dataToSend);
  };

  return (
    <div className="control">
      <div>
        <p className="control__title">表示内容を選択</p>
      </div>
      <table className="control__table">
        <tr>
          <td className="control__data">
            <i className="control__icon">
              <img src={place_icon_black} alt="place_icon_black" />
            </i>
            <span className="control__text">場所</span>
          </td>
          <td>
            <select className="control__value" name="place">
              <option value="tokyo">東京都</option>
            </select>
          </td>
        </tr>
        <tr>
          <td className="control__data">
            <i className="control__icon">
              <img src={calendar_icon_black} alt="calendar_icon_black" />
            </i>
            <span className="control__text">年度</span>
          </td>
          <td>
            <select
              className="control__value"
              name="years"
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {generateYears()
                .reverse()
                .map((year: number) => (
                  <option key={year} value={year}>
                    {year}年
                  </option>
                ))}
            </select>
          </td>
        </tr>
        <tr>
          <td className="control__data--type">
            <i className="control__icon">
              <img src={type_icon_black} alt="type_icon_black" />
            </i>
            <span className="control__text">種類</span>
          </td>
          <td className="control__type">
            <input
              type="radio"
              name="type"
              value="1"
              onChange={(e) => setSelectedType(e.target.value)}
            />{" "}
            土地（住宅地）
            <br />
            <input
              type="radio"
              name="type"
              value="2"
              onChange={(e) => setSelectedType(e.target.value)}
            />{" "}
            土地（商業地）
            <br />
            <input
              type="radio"
              name="type"
              value="3"
              onChange={(e) => setSelectedType(e.target.value)}
            />{" "}
            中古マンション等
            <br />
            <input
              type="radio"
              name="type"
              value="4"
              onChange={(e) => setSelectedType(e.target.value)}
            />{" "}
            農地
            <br />
            <input
              type="radio"
              name="type"
              value="5"
              onChange={(e) => setSelectedType(e.target.value)}
            />{" "}
            林地
          </td>
        </tr>
      </table>
      <button className="control__button" onClick={handleDownload}>
        データをダウンロード
      </button>
    </div>
  );
};

export default Control;
