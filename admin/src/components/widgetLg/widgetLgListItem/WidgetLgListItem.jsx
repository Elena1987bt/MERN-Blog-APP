import React from 'react';

import './widgetLgListItem.css';

const WidgetLgListItem = ({ img, name, date, price, type }) => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img src={img} alt="" className="widgetLgImg" />
        <span className="widgetLgName">{name}</span>
      </td>
      <td className="widgetLgDate">{date}</td>
      <td className="widgetLgAmount">${price}</td>
      <td className="widgetLgStatus">
        <Button type={type} />
      </td>
    </tr>
  );
};

export default WidgetLgListItem;
