import EventList from "../../components/events/event-list";
import { getFeaturedEvents } from "../../../nextjs-learning/utils/utils";

export default function Home(props: any) {
  const { events } = props; 

  return (
    <div>
      <EventList items = {events}/>
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
export async function getStaticProps() {
  const featuredEvent = await getFeaturedEvents();
  console.log(featuredEvent);
  return {
    props: {
      events: featuredEvent
    }
  }
}
