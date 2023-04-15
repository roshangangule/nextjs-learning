import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../../components/events/event-list";
import EventSearch from "../../../components/events/event-search";
import { getAllEvents } from "../../../utils/utils";
import Head from "next/head";

export default function AllEventsPage(props: any) {
    const events = props.events;

    const router = useRouter();
    function findEventsHandler(year: any, month: any) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return(
        <Fragment>
            <Head>
                <title>All Events</title>
            </Head>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items = {events}/>
        </Fragment>
    ); 
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events
        },
        revalidate: 10
    }
}