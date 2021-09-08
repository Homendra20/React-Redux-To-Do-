import React from "react";
import "./index.css";
import { useState } from "react";
import { add } from "./Redux/changeSlice";
import { useDispatch } from "react-redux";

function CompA() {
  const [name, setName] = useState("");
  const [desp, setDesp] = useState("");
  const [dt, setDt] = useState("");
  const disp = useDispatch();

  return (
    <div className="CompA">
      <div className="heading"><h1>To Do List</h1></div>

      <div>
        <input
          value={name}
          className="input1"
          placeholder="Task"
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
        />

      </div>

      <div>

        <textarea
          value={
            desp
          }
          placeholder="Description"
          className="input2"
          onChange={(event) => {
            setDesp(event.target.value);
          }}
          type="text"
        />

        <div>

          <input
            value={dt}
            className="date"
            id="setdate"
            onChange={(event) => {
              setDt(event.target.value);
            }}
            type="date"
          />

        </div>
        <button
          className="button"
          onClick={() => {
            disp(add({ n: name, de: desp, d: dt }));
          }}
        >
          Add
        </button>
      </div>

    </div>

  );
}

export default CompA;
