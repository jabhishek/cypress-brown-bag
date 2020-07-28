import React from "react";
import { PageHeader } from "./PageHeader";
import Container from "@material-ui/core/Container";

export const Page = ({ children }) => {
  return (
    <div>
      <PageHeader />
      <Container>{children}</Container>
    </div>
  );
};
