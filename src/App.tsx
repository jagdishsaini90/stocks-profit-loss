import React, { useState } from "react";
import "./App.css";

function App() {
  const [initial, setInitial] = useState<number>();
  const [quantity, setQuantity] = useState<number>();
  const [current, setPrice] = useState<number>();
  const [output, setOutPut] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (Number(initial) > Number(current)) {
      var loss = (Number(initial) - Number(current)) * Number(quantity);
      var lossPercentage = (loss / Number(initial)) * 100;

      setOutPut(
        `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
      );
    } else if (Number(current) > Number(initial)) {
      var profit = (Number(current) - Number(initial)) * Number(quantity);
      var profitPercentage = (profit / Number(initial)) * 100;

      setOutPut(
        `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
      );
    } else {
      setOutPut(`No pain no gain and no gain no pain`);
    }
  }

  return (
    <div className="App">
      <h1>Stock Profile & Loss Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label className="input-label">Initial Price</label>
          </div>
          <input
            className="input"
            type="number"
            value={initial}
            onChange={(e) => setInitial(e.target.value as unknown as number)}
          />
        </div>
        <div>
          <div>
            <label className="input-label">Initial Price</label>
          </div>
          <input
            className="input"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value as unknown as number)}
          />
        </div>
        <div>
          <div>
            <label className="input-label">Initial Price</label>
          </div>
          <input
            className="input"
            type="number"
            value={current}
            onChange={(e) => setPrice(e.target.value as unknown as number)}
          />
        </div>
        <div>
          <button className="btn-check" onClick={handleSubmit}>
            Tell Me!!
          </button>
        </div>
      </form>
      <h1>{output}</h1>
    </div>
  );
}

export default App;
