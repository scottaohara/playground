## Set all variables

cars = 100
space_in_a_car = 4.0
drivers = 30
passengers = 90
cars_not_driven  = cars - drivers
cars_driven = drivers
carpool_capacity = cars_driven * space_in_a_car
average_passengers_per_car = passengers / cars_driven


## Print stuff here
print "######################################################"
print "There are", cars, "cars available."
print ""
print "But there are only", drivers, "drivers..."
print ""
print "there will be", cars_not_driven, "empty cars"
print ""
print "The carpool lane can hold", carpool_capacity, "people in it"
print ""
print "We have", passengers, "to carpool"
print ""
print "we need to put about", average_passengers_per_car, "people in each car"
