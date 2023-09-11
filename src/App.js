import "./index.css";

function App() {
  return (
    <div className="main">
      <div className="sub-container">
        <div className="tip-container">
          <h1 className="main-title">Tip Calculator</h1>
          <div className="card-container">
            <h2 className="title">How much was the bill</h2>
            <input
              className="box"
              type="number"
              placeholder="Total Bill Amount"
            />
          </div>

          <div className="card-container">
            <h2 className="title">How do you like the service</h2>
            <select className="box">
              <option value="" className="" defaultValue={"selected"}>
                Dissatisfied(0%)
              </option>

              <option value="" className="" defaultValue={"selected"}>
                It was Okay(5%)
              </option>

              <option value="" className="" defaultValue={"selected"}>
                It's Good (10%)
              </option>

              <option value="" className="" defaultValue={"selected"}>
                It's was Awesome (20%)
              </option>
            </select>
          </div>

          <div className="card-container">
            <h2 className="title">How your friend like the service</h2>
            <select className="box">
              <option value="" className="" defaultValue={"selected"}>
                Dissatisfied(0%)
              </option>

              <option value="" className="" defaultValue={"selected"}>
                It was Okay(5%)
              </option>

              <option value="" className="" defaultValue={"selected"}>
                It's Good (10%)
              </option>

              <option value="" className="" defaultValue={"selected"}>
                It's was Awesome (20%)
              </option>
            </select>
          </div>
          <h2>You pay $100 (80$ + 20$ tip)</h2>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
