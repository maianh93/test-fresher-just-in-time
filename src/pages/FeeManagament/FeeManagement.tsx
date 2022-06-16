import { useParams } from "react-router-dom";

const Feemanagement: React.FC = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>Feemanagement: {id}</h1>
      </div>
    );
}

export default Feemanagement;