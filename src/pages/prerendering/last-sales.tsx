import { useEffect, useState } from "react";
import useSWR from 'swr';


export default function LastSales (props: any) {

    //const [loading, setIsLoading] = useState(false);
    const [sales, setSales]: any = useState();

    /*useEffect (() => {
        setIsLoading(true);
        fetch("https://nextjs-course-85da7-default-rtdb.firebaseio.com/sales.json")
        .then((response) => response.json() )
        .then((data) => {
            const transferedData: any = [];

            for (const key in data) {
                transferedData.push ({
                    id: key,
                    username: data[key].username,
                    volumn: data[key].volumn
                });
            }
            setSales(transferedData);
            setIsLoading(false);
        });
        
    }, []);*/


    const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())
    const { data, error } = useSWR("https://nextjs-course-85da7-default-rtdb.firebaseio.com/sales.json", fetcher);
    
    useEffect(() => {
        if (data) {
            const transferedData: any = [];

            for (const key in data) {
                transferedData.push ({
                    id: key,
                    username: data[key].username,
                    volumn: data[key].volumn
                });
            }
    
          setSales(transferedData);
        }
    }, [data]);

    if (!data &&!sales) {
        return <p>No data found</p>
    }
    if (error) {
        return <p>Error while fetching sales</p>
    }

    return (
        <div>
            <ul>
                {
                    sales.map((sale: any) => {
                        return <li key={sale.id}>{sale.username} - ${sale.volumn}</li>
                    })
                }
            </ul>
        </div>
    );
}

export async function getStaticProps(context: any) {
    const response = await fetch("https://nextjs-course-85da7-default-rtdb.firebaseio.com/sales.json");
    const data = await response.json();
    const transferedData: any = [];
    if (data) {
        for (const key in data) {
            transferedData.push ({
                id: key,
                username: data[key].username,
                volumn: data[key].volumn
            });
        }
    }
    return {
        props: {
            sales: transferedData
        }
    }
}
