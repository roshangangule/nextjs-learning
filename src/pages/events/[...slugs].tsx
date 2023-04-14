import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import EventList from "../../../components/events/event-list";
import ResultsTitle from "../../../components/events/result-title";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/error-alert";
import { getFilteredEvents } from "../../../dummy-data";
import  useSWR  from "swr";

export default function FilteredEventsPage() {
    const router = useRouter();
    const filteredData  = router.query.slugs;
    const [loadedEvents, setLoadedEvents] = useState<any[]>([]);

    const { data, error } = useSWR('https://nextjs-course-85da7-default-rtdb.firebaseio.com/events.json', (url: any) => fetch(url).then(res => res.json()));

    useEffect(() => {
        if (data) {
            const events: any = [];
            for (const key in data) {
                events.push({
                    id: key,
                    ...data[key]
                })
            }
            setLoadedEvents(events);
        }
    },[]);


    if (!loadedEvents || !filteredData) {
        return <p className='center'>Loading...</p>;
      }

    const filteredYear = filteredData[0]; 
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12 || error
    ) {
        return <Fragment>
            <ErrorAlert><p>Invalid filter, Please adjust your values.</p></ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>
    }
    let filteredEvents = loadedEvents.filter((event: any) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <Fragment>
            <ErrorAlert><p>No events found for the chose filter!</p></ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>
    }
    const date = new Date(numYear, numMonth - 1);
    return(
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList items= {filteredEvents}/>
        </Fragment>
    );
}

/*export async function getServerSideProps(context: any) {

    const { param } = context;
    const filteredData = param.slug;
    const filteredYear = filteredData[0]; 
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return <Fragment>
            <ErrorAlert><p>Invalid filter, Please adjust your values.</p></ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>
    }
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });


    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        }
    }
}*/