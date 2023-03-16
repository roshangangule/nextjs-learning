import EventList from "../../components/event-list";
import { getFeaturedEvents} from "../../dummy-data";

export default function Home() {
  const featuredEvent = getFeaturedEvents();
  console.log(featuredEvent)
  return (
    <div>
      <EventList items = {featuredEvent}/>
      {/* <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul> */}
    </div>
  )
}
