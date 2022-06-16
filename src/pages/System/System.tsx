import { useParams } from "react-router-dom";

const System: React.FC = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>System: {id}</h1>
      </div>
    );
}

export default System;