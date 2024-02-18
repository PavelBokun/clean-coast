import "./title.css";

const Title = () => {
  const title = "Чистый Берег";
const nameUser="Павел";
const tel = "+ 375 29 304 22 00"
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="title">
          <h1>{title}</h1>
          <div className="dop">С нами удобно!</div>
        <div><h2>{nameUser}:{tel}</h2></div>
        </div>
      </div>
    </div>
  );
};
export default Title;
