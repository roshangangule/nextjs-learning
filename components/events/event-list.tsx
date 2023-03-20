import EventItem from "./event-item";
import classes from "../events/event-list.module.css";


export default function EventList(props: any) {
    const { items } = props;
    return(
        <ul className={classes.list}>
            {
                items.map((event: any) => {
                    return <EventItem
                        key= {event.id}
                        id= {event.id}
                        title= {event.title}
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