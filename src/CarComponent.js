import './App.css';

const CarComponent = props => {
    console.log(props);
    return <div className="text-center">
        <h3>{props.vehicle.model}</h3>
        <h4>{props.vehicle.make}</h4>
        <h4>{props.vehicle.year}</h4>
    </div>;
}

export default CarComponent;