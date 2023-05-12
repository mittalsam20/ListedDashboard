import React, { lazy, Suspense } from "react";

// Hoc for codeSplitting and lazy loading
// will add chunking here too later on
const Loading = () => {
  return <>{"Loading...."}</>;
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
