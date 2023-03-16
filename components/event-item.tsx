import Link from "next/link";

export default function EventItem(props: any) {
  const { id, title, description, location, date, image } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
  const formattedAddress = location.replace(", ", "/n");
  const exploreEventLink = `/events/${id}`;
  return (
    <li>
      <div>
        <img src={"/"+image} alt={title} />
        <div>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
            <Link href={exploreEventLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
