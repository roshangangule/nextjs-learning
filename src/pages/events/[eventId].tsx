import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../../components/event-detail/event-content";
import EventLogistic from "../../../components/event-detail/event-logistics";
import EventSummary from "../../../components/event-detail/event-summary";
import ErrorAlert from "../../../components/ui/error-alert";
import { getAllEvents, getEventById, getFeaturedEvents } from "../../../utils/utils";
import { eventNames } from "process";

export default function EventDetailsPage(props: any) {
    const event  = props.selectedEvent;
    
    if(!event) {
        return <div className="center">
        <p>Loading...</p>
      </div>
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

export async function getStaticProps(context: any) {
    const eventId = context.params.eventId;

    const event = await getEventById(eventId);

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    };
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();

    const paths = events.map(event => ({ params: { eventId: event.id }}));

    return {
        paths: paths,
        fallback: 'blocking'
    }
}