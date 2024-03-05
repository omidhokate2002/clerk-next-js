"use client";
import { useEffect } from "react";
import Chart from "chart.js/auto";

function RadarChart(): JSX.Element {
  useEffect(() => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "radar",
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
              backgroundColor: "rgb(62,149,205,0.1)",
              borderWidth: 2,
            },
            {
              data: [70, 90, 44, 60, 83, 90, 100],
              label: "Accepted",
              borderColor: "#3cba9f",
              backgroundColor: "rgb(60,186,159,0.1)",
              borderWidth: 2,
            },
            {
              data: [10, 21, 60, 44, 17, 21, 17],
              label: "Pending",
              borderColor: "#ffa500",
              backgroundColor: "rgb(255,165,0,0.1)",
              borderWidth: 2,
            },
            {
              data: [6, 3, 2, 2, 7, 0, 16],
              label: "Rejected",
              borderColor: "#c45850",
              backgroundColor: "rgb(196,88,80,0.1)",
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
          },
        },
      });
      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="border border-gray-400 pt-0 rounded-xl w-full h-full shadow-xl flex items-center justify-center">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default RadarChart;
