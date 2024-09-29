import "./App.scss";
import Graph from "./components/Graph";
import Control from "./components/Control";
import logo_landit from "./images/logo_landit.svg";
import graph_icon from "./images/graph_icon.svg";
import window_icon from "./images/window_icon.svg";
import axios from "axios";
import { useState } from "react";

interface DownloadData {
  prefectures: string;
  year: number;
  type: string;
}

const App = () => {
  const [
    selectedRealEstateTransactionPrice,
    setSelectedRealEstateTransactionPrice,
  ] = useState(0);
  const [downloadPrefectures, setDownloadPrefectures] = useState("");
  const [downloadYear, setDownloadYear] = useState(0);
  const [downloadType, setDownloadType] = useState("");

  const URL = process.env.REACT_APP_RESAS_API_URL;
  const API_KEY = process.env.REACT_APP_RESAS_API_KEY;

  const fetchData = async (
    prefectures: string,
    year: number,
    displayType: string,
  ) => {
    try {
      await axios
        .get(
          `${URL}/api/v1/townPlanning/estateTransaction/bar?year=${year}&prefCode=${prefectures}&displayType=${displayType}`,
          {
            headers: {
              "X-API-KEY": API_KEY,
            },
          },
        )
        .then((response) => {
          setSelectedRealEstateTransactionPrice(
            response.data.result?.years[0].value,
          );
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDataDownload = (data: DownloadData) => {
    fetchData(data.prefectures, data.year, data.type);
    setDownloadPrefectures(data.prefectures);
    setDownloadYear(data.year);
    setDownloadType(data.type);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header__title">
          <img src={logo_landit} alt="logo" />
        </div>
      </header>
      <main className="main">
        <div className="main__header">
          <h1 className="main__title">
            <i className="main__title-icon">
              <img src={graph_icon} alt="widow_icon" />
            </i>
            <span className="main__title--normal">取引価格</span>
            <span className="main__title--small">※取引面積1㎡あたり</span>
          </h1>
        </div>
        <div className="contents">
          <div className="graph-box">
            <Graph
              downloadPrefectures={downloadPrefectures}
              year={downloadYear}
              type={downloadType}
              selectedRealEstateTransactionPrice={
                selectedRealEstateTransactionPrice
              }
            />
          </div>
          <div className="control">
            <Control onDownload={handleDataDownload} />
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__left">
          <a
            className="footer__left--terms-of-use"
            href="https://www.google.co.jp/"
          >
            利用規約
            <i className="footer__left-icon">
              <img src={window_icon} alt="widow_icon" />
            </i>
          </a>
          <a
            className="footer__left--privacy-policy"
            href="https://www.google.co.jp/"
          >
            プライバシーポリシー
            <i className="footer__left-icon">
              <img src={window_icon} alt="widow_icon" />
            </i>
          </a>
        </div>
        <div className="footer__right">
          <p>© 2023 Landit Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
