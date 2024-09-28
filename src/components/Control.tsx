import "./Control.scss";
import place_icon from "../images/place_icon.svg";
import calendar_icon from "../images/calendar_icon.svg";
import type_icon from "../images/type_icon.svg";
import { useState } from "react";

interface ControlProps {
  onDownload: (data: { type: string }) => void;
}

const Control: React.FC<ControlProps> = ({ onDownload }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleDownload = () => {
    const dataToSend = {
      type: selectedType,
    };
    onDownload(dataToSend);
  };

  return (
    <div className="control">
      <div className="control__header">
        <p className="control__title">表示内容を選択</p>
      </div>
      <table className="control__table">
        <tr>
          <td className="control__data">
            <i className="control__icon">
              <img src={place_icon} alt="place_icon" />
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
              <img src={calendar_icon} alt="calendar_icon" />
            </i>
            <span className="control__text">年度</span>
          </td>
          <td>
            <select className="control__value" name="years">
              <option value="2022">2022年</option>
            </select>
          </td>
        </tr>
        <tr>
          <td className="control__data--type">
            <i className="control__icon">
              <img src={type_icon} alt="type_icon" />
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
