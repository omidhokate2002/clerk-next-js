"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
function Example() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          datasets: [
            {
              data: [86, 114, 106, 106, 107, 111, 133],
              label: "Applied",
              borderColor: "#3e95cd",
              backgroundColor: "#7bb6dd",
              fill: false,
            },
            {
              data: [70, 90, 44, 60, 83, 90, 100],
              label: "Accepted",
              borderColor: "#3cba9f",
              backgroundColor: "#71d1bd",
              fill: false,
            },
            {
              data: [10, 21, 60, 44, 17, 21, 17],
              label: "Pending",
              borderColor: "#ffa500",
              backgroundColor: "#ffc04d",
              fill: false,
            },
            {
              data: [6, 3, 2, 2, 7, 0, 16],
              label: "Rejected",
              borderColor: "#c45850",
              backgroundColor: "#d78f89",
              fill: false,
            },
          ],
        },
      });
      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="w-[1100px] flex mx-auto my-10 ">
        <div className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl">
          <canvas id="myChart" ref={chartRef}></canvas>
        </div>
      </div>
    </>
  );
}

export default Example;
