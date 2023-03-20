import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../../components/event-detail/event-content";
import EventLogistic from "../../../components/event-detail/event-logistics";
import EventSummary from "../../../components/event-detail/event-summary";
import ErrorAlert from "../../../components/ui/error-alert";
import { getEventById } from "../../../dummy-data";

export default function EventDetailsPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    console.log(eventId);

    const event = getEventById(eventId);
    if(!event) {
        return <ErrorAlert><p>No event found!</p></ErrorAlert>
    }
    return(
        <Fragment> 
            <EventSummary title = {event.title}/>
            <EventLogistic 
                date= {event.date}
                address= {event.location}
                image= {event.image}
                imageAlt= {event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}