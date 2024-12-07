import React from "react";
import {useParams} from "react-router-dom";

export default function WorkPage() {
  const {name} = useParams();

  return (
    <div>
      <h1>{name}의 작업물</h1>
      <p>여기에 작업물 내용을 표시하세요.</p>
    </div>
  );
}
