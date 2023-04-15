import EventList from "../../components/events/event-list";
import { getFeaturedEvents } from "../../../nextjs-learning/utils/utils";
import Head from "next/head";

export default function Home(props: any) {
  const { events } = props; 

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
      </Head>
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
