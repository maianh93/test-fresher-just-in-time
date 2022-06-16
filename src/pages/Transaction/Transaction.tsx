import { useParams } from "react-router-dom";

const Transaction: React.FC = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>Transaction: {id}</h1>
      </div>
    );
}

export default Transaction;