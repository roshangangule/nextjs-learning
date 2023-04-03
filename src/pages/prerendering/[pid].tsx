import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";

export default function ProductDetails(props: any)  {
    const { loadedProduct } = props;
    if (!loadedProduct) {
        return <p>Loading...</p>
    }
    return (
       <Fragment>
            <h2>{loadedProduct.title}</h2>
            <p>{loadedProduct.description}</p>
       </Fragment>
    );
}
async function getData(){
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData =  await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    return data;
  }

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map((product: any) => product.id);
    const pathWithParams = ids.map((id: any) => ({ params: { pid: id}}))

    return {
        paths: pathWithParams,
        fallback: true
    }
}

export async function getStaticProps(context: any) {
    const { params } = context;
    const data = await getData();
    const product = data.products.find((product: any) => product.id === params.pid);
    if (!product) {
        return { notFound: true };
      }
    return {
        props: {
            loadedProduct: product,
        },

    }
}