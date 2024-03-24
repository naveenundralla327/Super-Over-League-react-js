const element = (
  //   Write your code here.
  <div className="league-container">
    <h1 className="league-heading">Super Over League</h1>
    <div className="image-league-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="league-image-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="league-image-logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
