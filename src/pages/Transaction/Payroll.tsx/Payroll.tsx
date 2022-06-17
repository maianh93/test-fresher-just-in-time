import PromotionSlider from "../../../components/Slider/PromotionSlider";
import PayrollTable from "../../../components/Table/Table";

const Payroll: React.FC = () => {
    return (
      <div>
        <h1>Payroll services in bank</h1>
        <PayrollTable />
        <PromotionSlider />
      </div>
    );
}

export default Payroll;