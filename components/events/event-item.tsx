import classes from "../events/event-item.module.css";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";

export default function EventItem(props: any) {
  const { id, title, description, location, date, image } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
  const formattedAddress = location.replace(", ", "\n");
  console.log(title)
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <span><DateIcon /></span>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <span><AddressIcon /></span>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}><ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  );
}
