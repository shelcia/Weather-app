import React from "react";

const CountryPage = ({ match }) => {
  console.log(match.params.id);
  return (
    <React.Fragment>
      <h1>hi</h1>
    </React.Fragment>
  );
};

export default CountryPage;
