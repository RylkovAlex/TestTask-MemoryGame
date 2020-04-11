import React, { useState } from "react";
import "./results-page.css";
import { storage } from "src/utils/storage";

const TabelItem: React.FC<Result> = (result: Result) => (
  <tr key={result.date}>
    <td>{result.name}</td>
    <td>{new Date(result.date).toLocaleString()}</td>
    <td>{`${result.time} sec`}</td>
    <td>{result.mistakes}</td>
  </tr>
);

enum Sort {
  Date = "date",
  Mistakes = "mistakes",
  TimeSpend = "time",
  Default = "default",
}

const ResultPage: React.FC<{}> = () => {
  const [sort, setSort] = useState("default");
  let results;
  switch (sort) {
    case Sort.Date:
      results = storage.getResults().sort((a, b) => b.date - a.date);
      break;
    case Sort.Mistakes:
      results = storage.getResults().sort((a, b) => a.mistakes - b.mistakes);
      break;
    case Sort.TimeSpend:
      results = storage.getResults().sort((a, b) => a.time - b.time);
      break;
    default:
      results = storage.getResults().sort((a, b) => b.date - a.date);
  }
  return (
    <>
      <h3 className="center-align results">Here you can see best results</h3>
      <table className="responsive-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>
              <p
                className={`btn blue lighten-1 ${(sort === Sort.Default || sort === Sort.Date) ? 'disabled' : ''}`}
                onClick={() => setSort(Sort.Date)}
              >
                Game Date
              </p>
            </th>
            <th>
              <p
                className={`btn blue lighten-1 ${(sort === Sort.TimeSpend) ? 'disabled' : ''}`}
                onClick={() => setSort(Sort.TimeSpend)}
              >
                Time spend
              </p>
            </th>
            <th>
              <p
                className={`btn blue lighten-1 ${(sort === Sort.Mistakes) ? 'disabled' : ''}`}
                onClick={() => setSort(Sort.Mistakes)}
              >
                Mistakes
              </p>
            </th>
          </tr>
        </thead>

        <tbody>{results.map((result) => TabelItem(result))}</tbody>
      </table>
    </>
  );
};

export default ResultPage;
