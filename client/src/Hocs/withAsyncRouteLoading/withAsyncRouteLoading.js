import React, { lazy, Suspense } from "react";

const loadingComponentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
};

const Loading = () => {
  return <div style={loadingComponentStyle}>{"Loading...."}</div>;
};

const withAsyncRouteLoading = component => {
  const LazyComponent = lazy(component);

  return props => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default withAsyncRouteLoading;
