from car import Car
from account import Account

if __name__ == "__main__":
    print("Hola Mundo")

    car = Car("JGH867", Account("Griger Ratia", "YFJ546"))
    print(vars(car))
    print(vars(car.driver))