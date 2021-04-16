<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import { Row } from "reactstrap";
import AddCar from "./AddCar.js";
=======
import React, { useEffect } from "react";
import { Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import AddCar from "./AddCar";
>>>>>>> 6b234f8... Task #8 part 1
import Car from "./Car";
import "./Cars.css";
import { getCars } from "./carsSlice";

export default function Cars(props) {
  const { carList, loading, error } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
    fetch("/api/cars")
    .then((response) => response.json())
    .then ((data) => setCars(data))
    .catch((error) => console.log(error));
  }, []);
=======
    dispatch(getCars());
  }, [dispatch]);
>>>>>>> 6b234f8... Task #8 part 1

  const removeCar = (id) => {
    // fetch(`/api/cars/${id}`, {
    //   method: "DELETE",
    // }).then(() => {
    //   setCars(cars.filter((car) => car.id !== id));
    // });
  };

  if (error) {
    return error;
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <React.Fragment>
<<<<<<< HEAD
      <AddCar onCarAdded={(car) => setCars([...cars, car])} />
        <Row id="cars">
          {cars.map((car) => (
            <Car 
              key={car.id} 
              make={car.make} 
              model={car.model}
              onDelete={() => removeCar(car.id)}
              />
          ))}
        </Row>
=======
      <AddCar onCarAdded={() => {} /*(car) => setCars([...cars, car])*/} />
      <Row id="cars">
        {carList.map((car) => (
          <Car
            key={car.id}
            make={car.make}
            model={car.model}
            onDelete={() => removeCar(car.id)}
          />
        ))}
      </Row>
>>>>>>> 6b234f8... Task #8 part 1
    </React.Fragment>
  );

}