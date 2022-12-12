import { Label } from "@mui/icons-material";
import moment from "moment";
import React, { useContext } from "react";
import { SportTypeContext } from "../../../context";
import "./styles.css";

export const DateButton = ({ changeDate, checked, label }) => {
  const { today } = useContext(SportTypeContext);
  let day = "";
  let month = "";
  let anotherDay = "";
  let functionDate = "";

  if (label === "today") {
    day = moment(today).format("DD");
    month = moment(today).format("MMM");
    functionDate = moment(today).format("YYYYMMDD");
  } else if (label === "yesterday") {
    let prevDate = new Date(today);
    prevDate.setDate(today.getDate() - 1);
    anotherDay = moment(prevDate).format("ddd");
    day = moment(prevDate).format("DD");
    month = moment(prevDate).format("MMM");

    functionDate = moment(prevDate).format("YYYYMMDD");
  } else if (label === "tomorrow") {
    let nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    anotherDay = moment(nextDay).format("ddd");
    day = moment(nextDay).format("DD");
    month = moment(nextDay).format("MMM");
    functionDate = moment(nextDay).format("YYYYMMDD");
  }

  return (
    <button
      className={
        checked === label ? "date_button checkedDateButton" : "date_button"
      }
      onClick={() => changeDate({ functionDate, label })}
    >
      <span> {anotherDay || label.toUpperCase()}</span>
      <span>{`${day} ${month}`}</span>
    </button>
  );
};
