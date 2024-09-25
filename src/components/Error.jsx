import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <p className="text-xl mb-2">
        {err.status}: {err.statusText}
      </p>
      <p className="opacity-60">{err.error.message}</p>
    </div>
  );
};

export default Error;
