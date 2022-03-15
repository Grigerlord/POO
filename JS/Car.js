class Car {
    constructor(license, driver, passenger, id) {
        this.id = id
        this.license = license
        this.driver = driver
        this.passenger = passenger
    }
    printDataCar() {
        console.table(this.driver)
        console.log(this.driver.name)
        console.log(this.driver.document)
    }
}