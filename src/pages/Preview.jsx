import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Preview = () => {
  const { resumeId } = useParams;
  const [resumeData, setResumeData] = useState(null);
  const loadResume = async () => {
    setResumeData()
  }
  return <div>Preview Page</div>;
};

export default Preview;
