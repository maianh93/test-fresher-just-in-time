import { useParams } from "react-router-dom";

const Limitmanagement: React.FC = () => {
    const { id } = useParams();
  
    return (
      <div>
        <h1>Limitmanagement: {id}</h1>
      </div>
    );
}

export default Limitmanagement;