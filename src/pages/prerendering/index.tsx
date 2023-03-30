import fs from "fs/promises";
import path from "path";

export default function Product(props: any) {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((product: any) => {
          return <li>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  console.log("Re-Generating")
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  }
}
