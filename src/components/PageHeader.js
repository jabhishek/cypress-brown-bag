import { Link as RouterLink } from "react-router-dom";
import React from "react";
import Link from "@material-ui/core/Link";

export const PageHeader = () => {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: 10 }}>
      <Link component={RouterLink} to="/" style={{ marginRight: 12 }}>
        Home
      </Link>
      <Link component={RouterLink} to="/list" style={{ marginRight: 12 }}>
        List
      </Link>
    </div>
  );
};
