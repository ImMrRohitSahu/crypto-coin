import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = () => {
  const { pid } = useParams();
  const [coinChart, setCoinChart] = useState([]);
  const [day, setDay] = useState(1);
  const [btnStatus, setBtnStatus] = useState(1);

  useEffect(() => {
    const getCoinChart = () => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${pid}/market_chart?vs_currency=inr&days=${day}&x_cg_demo_api_key=CG-NoKwAbkgJSXrr1AymgNnqMhb`
      )
        .then((res) => res.json())
        .then((data) => setCoinChart(data.prices))
        .catch(() => console.log("Error In Server!!!"));
    };
    getCoinChart();
  }, [pid, day]);

  const myData = {
    labels: coinChart.map((value) => {
      const date = new Date(value[0]);
      const time =
        date.getHours() > 12
          ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
          : `${date.getHours()} : ${date.getMinutes()} AM`;
      return day === 1 ? time : date.toLocaleDateString();
    }),

    datasets: [
      {
        label: `Price Of Past ${day} Days`,
        data: coinChart.map((value) => value[1]),
        borderColor: "orange",
        borderWidth: "2",
      },
    ],
  };

  return (
    <>
      <Col
        md={7}
        xs={12}
        className="d-flex flex-column justify-content-evenly align-items-md-start align-items-center coin-card"
      >
        <div className="chart-div">
          <Line
            className="chart mt-3"
            data={myData}
            options={{
              elements: {
                point: {
                  radius: 0,
                },
              },
            }}
          />
        </div>
        {/* "currency-btn mx-2" */}
        <div className="w-100 text-center my-2">
          <button
            className={
              btnStatus === 1 ? "select currency-btn mx-2" : "currency-btn mx-2"
            }
            onClick={() => {
              setDay(1), setBtnStatus(1);
            }}
          >
            1 Day
          </button>
          <button
            className={
              btnStatus === 2 ? "select currency-btn mx-2" : "currency-btn mx-2"
            }
            onClick={() => {
              setDay(30), setBtnStatus(2);
            }}
          >
            1 Month
          </button>
          <button
            className={
              btnStatus === 3 ? "select currency-btn mx-2" : "currency-btn mx-2"
            }
            onClick={() => {
              setDay(365), setBtnStatus(3);
            }}
          >
            1 Year
          </button>
        </div>
      </Col>
    </>
  );
};

export default CoinChart;
