import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef } from "react";
import Scroll from "./lib/scroll";

function App() {
  const mainRoot = useRef(null);
  const scrollPanel = useRef(null);
  const scrollWrapper = useRef(null);

  useEffect(() => {
    const scroll = new Scroll();

    scroll.connect({
      root: mainRoot.current,
      target: scrollPanel.current,
      scrollWrapper: scrollWrapper.current,
      start: "0",
    });

    return () => {
      scroll.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <section className="section-1"></section>
        <section className="section-2" ref={mainRoot}>
          <div className="content" ref={scrollPanel}>
            <div className="content-left"></div>
            <div className="content-end"></div>
          </div>
        </section>
        <section className="section-3"></section>
      </div>
    </div>
  );
}

export default App;
