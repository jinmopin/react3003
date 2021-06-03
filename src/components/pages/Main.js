import React from "react";
import Header from "../Header";
import Layout from "../Layout";

function Info({ text }) {
  return <div>{text}</div>;
}

const textInfo = [
  { text: "WE PROVIDE" },
  { text: "VISUAL CODING" },
  { text: "SOLUTION" },
  { text: "FOR YOU WEBS" },
];

function Main() {
  return (
    <div id="wrap">
      <Header />
      <Layout>
        <section id="mainCont">
          <div className="main__cont">
            {textInfo.map((el) => (
              <Info text={el.text} key={el.text} />
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Main;
