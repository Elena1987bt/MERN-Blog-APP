import './widgetLg.css';
import WidgetLgListItem from './widgetLgListItem/WidgetLgListItem';

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <WidgetLgListItem
            img="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            name="Sara Key"
            price={122.0}
            date="2 May 2021"
            type="Declined"
          />
          <WidgetLgListItem
            img="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            name="Susan Doe"
            price={712.0}
            date="2 Jun 2021"
            type="Approved"
          />
          <WidgetLgListItem
            img="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            name="Mia Carol"
            price={122.0}
            date="8 Jun 2021"
            type="Declined"
          />
          <WidgetLgListItem
            img="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            name="Nicol Keybey"
            price={1522.0}
            date="1 Sep 2021"
            type="Pending"
          />
        </tbody>
      </table>
    </div>
  );
};
export default WidgetLg;
