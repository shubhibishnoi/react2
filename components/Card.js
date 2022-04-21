import { React } from "react";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://image.shutterstock.com/image-photo/man-runner-jogger-running-isolated-260nw-390360016.jpg"
        className="card-img"
      />
      <div className="card-stats">
        <img
          src="https://image.shutterstock.com/image-vector/star-icon-260nw-158747405.jpg"
          className="star-img"
        />
        <span> 5.0</span>
        <span>6*</span>
        <span> USA</span>
      </div>
      <p>life of athelte is so tough.</p>
      <p>
        <span className="bold"> from $22</span> /person
      </p>
    </div>
  );
}
