## Vars

name = 'Scott'
age = 32
height = 70 # inches
weight = 172 # lbs
eyes = 'blue'
teeth = 'white'
hair = 'brown'

height_cm = height * 2.54 # 1 in = 2.54 cm


## Print this stuff outs
print "Let\'s talk about %s." % name
print "He\'s %d inches tall." % height
print "He\'s %d pounds." % weight
print "He\'s got %s eyes and %s hair." % (eyes, hair)
print "His teeth are %s and he's never had a cavity." % teeth

print ""
print ""
print ""
print "If I add %d, %d, and %d I get %d." %(age, height, weight, age + height + weight)

print ""
print ""
print ""
print "I am %d inches which is %s CM" %(height, height_cm)
