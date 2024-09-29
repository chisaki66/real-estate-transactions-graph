import "./Control.scss";
import place_icon_black from "../images/place_icon_black.svg";
import calendar_icon_black from "../images/calendar_icon_black.svg";
import type_icon_black from "../images/type_icon_black.svg";
import { useState } from "react";
import constantList from "../constantList";

interface ControlProps {
  onDownload: (data: {
    prefectures: string;
    year: number;
    type: string;
  }) => void;
}

const { START_YEAR, END_YEAR } = constantList;

const Control: React.FC<ControlProps> = ({ onDownload }) => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const [selectedPrefectures, setSelectedPrefectures] = useState("");

  const generateYears = () => {
    const years = [];
    for (let year = START_YEAR; year <= END_YEAR; year++) {
      years.push(year);
    }
    return years;
  };

  const years = generateYears().reverse();

  const handleDownload = () => {
    const dataToSend = {
      prefectures: selectedPrefectures === "" ? "13" : selectedPrefectures,
      year: selectedYear === 0 ? END_YEAR : selectedYear,
      type: selectedType === "" ? "1" : selectedType,
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
            <select
              className="control__value"
              name="place"
              onChange={(e) => setSelectedPrefectures(e.target.value)}
            >
              <option value="1">北海道</option>
              <option value="2">青森県</option>
              <option value="3">岩手県</option>
              <option value="4">宮城県</option>
              <option value="5">秋田県</option>
              <option value="6">山形県</option>
              <option value="7">福島県</option>
              <option value="8">茨城県</option>
              <option value="9">栃木県</option>
              <option value="10">群馬県</option>
              <option value="11">埼玉県</option>
              <option value="12">千葉県</option>
              <option value="13" selected>
                東京都
              </option>
              <option value="14">神奈川県</option>
              <option value="15">新潟県</option>
              <option value="16">富山県</option>
              <option value="17">石川県</option>
              <option value="18">福井県</option>
              <option value="19">山梨県</option>
              <option value="20">長野県</option>
              <option value="21">岐阜県</option>
              <option value="22">静岡県</option>
              <option value="23">愛知県</option>
              <option value="24">三重県</option>
              <option value="25">滋賀県</option>
              <option value="26">京都府</option>
              <option value="27">大阪府</option>
              <option value="28">兵庫県</option>
              <option value="29">奈良県</option>
              <option value="30">和歌山県</option>
              <option value="31">鳥取県</option>
              <option value="32">島根県</option>
              <option value="33">岡山県</option>
              <option value="34">広島県</option>
              <option value="35">山口県</option>
              <option value="36">徳島県</option>
              <option value="37">香川県</option>
              <option value="38">愛媛県</option>
              <option value="39">高知県</option>
              <option value="40">福岡県</option>
              <option value="41">佐賀県</option>
              <option value="42">長崎県</option>
              <option value="43">熊本県</option>
              <option value="44">大分県</option>
              <option value="45">宮崎県</option>
              <option value="46">鹿児島県</option>
              <option value="47">沖縄県</option>
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
              {years.map((year: number) => (
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
              checked
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
