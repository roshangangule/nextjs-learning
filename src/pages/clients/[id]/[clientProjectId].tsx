import { useRouter } from "next/router";

export default function SelectedClientPeoject() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>The project page for a specific project for selected client.</h1>
        </div>
    );
}