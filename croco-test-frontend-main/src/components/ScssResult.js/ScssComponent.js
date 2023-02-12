import React from "react";
import "./ScssComponent.scss";

export default function ScssComponent() {
  return (
    <table>
      <tr className="row1">
        <td name="john">john</td>
        <td name="doe">doe</td>
        <td name="john">john</td>
      </tr>
      <tr className="row2">
        <td name="doe">doe</td>
        <td name="doe">doe</td>
        <td name="john">john</td>
      </tr>
    </table>
  );
}
