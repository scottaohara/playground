# x = a string of text with a value of 10 brought in at %d
x = "there are %d types of people." % 10

# set a variable to string "binary"
binary = "binary"

# set a variable to string "don't"
do_not = "don't"

# y = a string that pulls in variables binary and do_not
y = "Those who know %s and those who %s." % (binary, do_not)


print "######################################"

print x
print y

print "I said: %r." % x
print "I also said: '%s'." % y

hilarious = False
joke_eval = "Isn't that joke so funny?! %r"

print joke_eval % hilarious

w = "this is the left side of..."
e = "a string with a right side."

print w + e
