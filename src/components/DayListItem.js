import React from "react";
import {action} from "@storybook/addon-actions/dist/preview";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}