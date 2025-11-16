import React from "react";
import { useParams } from "react-router-dom";

const Preview = () => {
  const { resumeId } = useParams;
  return <div>Preview Page</div>;
};

export default Preview;
