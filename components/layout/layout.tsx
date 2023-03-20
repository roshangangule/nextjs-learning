import { Fragment } from "react";

export default function Layout(props: any) {
  return (
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  );
}
