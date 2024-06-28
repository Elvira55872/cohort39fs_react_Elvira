import "./styles.css";

function Card() {
  return (
    <div className="card-component">
      <img
        src="https://i.pinimg.com/564x/ef/ea/19/efea19854801e1d60f3638ebd28c0000.jpg"
        alt="Homer Simpson"
      ></img>
      <h1>Homer Simpson</h1>
      <p>
        {" "}
        <b>Род деятельности:</b> химик и инспектор по безопасности оператор
        атомной электростанции
      </p>
      <p>
        {" "}
        <b>Хобби:</b> везде ходить пешком
      </p>
    </div>
  );
}

export default Card;
