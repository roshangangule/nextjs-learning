import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../../components/events/event-list";
import EventSearch from "../../../components/events/event-search";
import { getAllEvents } from "../../../dummy-data";

export default function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();
    function findEventsHandler(year: any, month: any) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return(
        <Fragment>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items = {events}/>
        </Fragment>
    ); 
}