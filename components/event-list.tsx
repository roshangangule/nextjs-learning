import EventItem from "./event-item";

export default function EventList(props: any) {
    const { items } = props;
    return(
        <ul>
            {
                items.map((event: any) => {
                    return <EventItem
                        key= {event.id}
                        id= {event.id}
                        image= {event.image}
                        description= {event.description}
                        location= {event.location}
                        date= {event.date}
                    />
                })
            }
        </ul>
    );
}