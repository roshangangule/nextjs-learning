import Link from "next/link";

export default function ClientsPage() {
    const clients = [
        {id: "max", name: "Maxmilion"},
        {id: "man", name: "Manual"}
    ];
    return (
        <div>
            <h1>THE CLIENTS PAGE</h1>
            <ul>
                {
                    clients.map((client) => (
                        <li key={client.id}>
                            <Link href={`/clients/${client.id}`}>{client.name}</Link>
                        </li>
                    ))
                }
                {/* Different way of setting href */}
                {
                    clients.map((client) => (
                        <li key={client.id}>
                            <Link 
                                href={{
                                    pathname: "/clients/[id]",
                                    query: {id: client.id}
                                }}
                            >{client.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}