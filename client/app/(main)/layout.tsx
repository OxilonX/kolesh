import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="max-h-full">{children}</section>;
};

export default layout;
