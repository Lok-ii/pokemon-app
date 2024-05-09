import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Stats = ({ details }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-4">
        {details?.stats?.map((stat, idx) => {
          return (
            <div key={idx} className="flex gap-8 items-center">
              <div className="font-inglobal text-[1rem] flex items-center w-[30%] justify-between">
                <p>{stat.stat.name.toUpperCase()}</p> <p>{stat.base_stat}</p>
              </div>
              <ProgressBar
                className="w-full h-[0.3rem]"
                striped
                variant="success"
                animated
                now={stat.base_stat}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
