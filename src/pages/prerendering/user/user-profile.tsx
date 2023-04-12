export default function UserProfile(props: any) {   

    return (
        <div>
            <h2>{props.username}</h2>
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const {params, req, res } = context;

    return {
        props: {
            username: "Max"
        }
    }
} 