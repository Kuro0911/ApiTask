import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./contents.css";
function Contents() {
  const [Contents, setContents] = useState([]);

  useEffect(() => {
    async function fetchContent() {
      const request = await fetch(
        "https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba"
      );
      var data = await request.json();
      setContents(data.clients);
      return request;
    }
    fetchContent();
  }, []);
  console.log(Contents);

  function Check(props) {
    const num = props.type;
    if (num === 0) {
      const new_style = {
        color: "green",
      };
      return (
        <div className="status" style={new_style}>
          Complete
        </div>
      );
    } else {
      return <div className="status">Pending</div>;
    }
  }
  const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };
      setStyle(newStyle);
    }, 1000);

    return (
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    );
  };

  return (
    <div className="backdrop">
      <div className="helper"> Light Table </div>
      <table>
        <tr>
          <th>Company</th>
          <th>Total</th>
          <th>Status</th>
          <th>Name</th>
          <th>Completion</th>
        </tr>
        {Contents.map((content, key) => {
          return (
            <tr key={key}>
              <td>{content.company}</td>
              <td>
                ${Number(content.invoicepaid) + Number(content.invoicePending)}{" "}
                USD
              </td>
              <td>
                <Check type={Number(content.invoicePending)} />
              </td>
              <td>{content.name}</td>
              <td>
                <Progress
                  done={Math.round(
                    (Number(content.invoicepaid) * 100) /
                      (Number(content.invoicepaid) +
                        Number(content.invoicePending))
                  )}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Contents;
