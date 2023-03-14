import { useRouter } from "next/router";

export default function ClientsProjectPage() {
    const router = useRouter();
    function loadProjectHandler() {
        //router.push("/clients/max/projecta");
        router.push(
            {
                pathname: "/clients/[id]/[clientProjectId]",
                query: {
                    id: "max",
                    clientProjectId: "projecta"
                }
            }
        )
    }
    return (
        <div>
            <h1>The project of given clients</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}