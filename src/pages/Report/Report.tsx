import { useParams } from "react-router-dom";

const Report: React.FC = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>Report: {id}</h1>
      </div>
    );
}

export default Report;