import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Preview = () => {
  const { resumeId } = useParams;
  const [resumeData, setResumeData] = useState(null);
  return <div>Preview Page</div>;
};

export default Preview;
