export default function UserDetails (props: any) {

    return (
        <div>
            <h3>{props.userId}</h3>
        </div>
    );
}

export async function getServerSideProps(context: any) {

    const { params } = context;

    const userId = params.uid;

    return {
        props: {
            userId: "userId - "+ userId
        }
    };
}