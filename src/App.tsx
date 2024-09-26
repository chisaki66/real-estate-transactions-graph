import "./App.scss";
import Graph from "./components/Graph";
import logo_landit from "./images/logo_landit.png";
import window_icon from "./images/window_icon.png";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header__title">
          <img src={logo_landit} alt="logo" />
        </div>
      </header>
      <main className="main">
        <Graph />
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
