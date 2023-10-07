import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [amount, setAmount] = useState(1);
  const [upgrade, setUpgrade] = useState(10);

  const addOne = () => {
    setCounter(counter + 1);
    setCurrency(currency + amount);
  };

  const buildingClick = () => {
    if (currency >= 10) {
      setAmount(amount + 1);
      setCurrency(currency - 10);
      setUpgrade(upgrade * 2);
    }
  };
  return (
    <>
      <div className="App">
        <div>
          <img
            src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-pink-cute-plus-and-minus-symbol-image_1314145.jpg"
            width={"40px"}
          />
          <h3 style={{ color: "maroon" }}>Counter: {counter}</h3>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/money-cartoon-vector-illustration-flying-dollar-flat-icon-outline_385450-1305.jpg?w=2000"
            width={"50px"}
          />
          <h3 style={{ color: "maroon" }}>Currency: {currency}</h3>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/cute-money-safe-box-vector-illustration-cartoon-dollar_562381-59.jpg?w=2000"
            width={"50px"}
          />
          <h3 style={{ color: "maroon" }}>Amount: {amount}</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            gap: "10px",
          }}
        >
          <h6 style={{ color: "blue" }}>CLICK ME!</h6>
          <img
            style={{
              cursor: "pointer",
            }}
            onClick={addOne}
            src="https://clipart-library.com/images/BcgEjdn9i.jpg"
            width={"50px"}
          />
        </div>
        <div>
          {currency >= upgrade && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button onClick={buildingClick}>Buy Building</button>
              <img
                src="https://banner2.cleanpng.com/20180723/stx/kisspng-building-architecture-house-animated-5b5580e4968c85.9820865515323302126167.jpg"
                width={"20px"}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
