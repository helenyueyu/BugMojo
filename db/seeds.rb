# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# I don't think I need to run db:setup db:test:load (no tests)

# How to see if your development Postgresql database: 
# click on your database once inside Elephant
# run \dt to view the databases (users should pop up)
# run SELECT * FROM users; 

# Might use faker later on to populate more users 

# User.create!({
#     username: Faker::Internet.username(4..10),
#     password: FAker::Internet.password(6, 15), 
#     email: Faker::Internet.email
# })

require 'faker'

User.delete_all 
Question.delete_all

# This will be the user for the demo login 
user1 = User.create!({
    username: 'guest',
    email: 'hello@bugmojo.com', 
    password: 'bugmojo7'
})

user2 = User.create!({
    username: 'frank_the_tank', 
    email: 'frank@turo.com', 
    password: '9theshoeguy'
})

user3 = User.create!({
    username: 'phil_nye', 
    email: 'phil@spotify.net', 
    password: 'PrincePhillip2'
})

user4 = User.create!({
    username: 'benjy', 
    email: 'ben@zoho.io', 
    password: 'slytherin4Lyfe'
})

user5 = User.create!({
    username: 'aditya', 
    email: 'aditya@steam.edu', 
    password: 'secretGryffindor1'
})

user6 = User.create!({
    username: 'elliot_the_wise', 
    email: 'elliot@aa.io', 
    password: 'harold44'
})

user7 = User.create!({
    username: 'soph', 
    email: 'soph@opentable.net', 
    password: 'soph9944'
})





Question.create!({
    title: 'How do I delete a Git branch?', 
    body: 'What should I do differently to successfully delete the remotes/origin/bugfix branch both locally and remotely?', 
    author_id: user1.id
})

Question.create!({
    title: 'How do I undo the most recent local commits in Git?', 
    body: "I accidentally committed the wrong files to Git, but I haven't pushed the commit to the server  yet. How can I undo those commits from the local repository?", 
    author_id: user2.id 
})

Question.create!({
    title: "What is the difference between 'git pull' and 'git fetch'?", 
    body: "What are the differences between git pull and git fetch?", 
    author_id: user3.id 
})

Question.create!({
    title: "How to vertically align text inside a flexbox?", 
    body: "I would like to use flex box to vertically align some content inside an <li> but not having great success.
I've checked online and many of the tutorials actually use a wrapper div which gets the align-items:center from the flex settings on the parent, but I'm wondering is it possible to cut out this additional element?
I've opted to use flex box in this instance as the list item height will be a dynamic %.", 
    author_id: user3.id 
})


Question.create!({
    title: "How do I check if an element is hidden in jQuery?", 
    body: "It is possible to toggle the visibility of an element, using the functions .hide(), .show() or .toggle().
How would you test if an element is visible or hidden?", 
    author_id: user3.id 
})

Question.create!({
    title: "Can comments be used in JSON?", 
    body: "Can I use comments inside a JSON file? If so, how?", 
    author_id: user3.id 
})

Question.create!({
    title: "How to resolve merge conflicts in Git", 
    body: "How do I resolve merge conflicts in Git?", 
    author_id: user4.id 
})

Question.create!({
    title: "Calling an external command in Python", 
    body: "How can I call an external command (as if I'd typed it at the Unix shell or Windows command prompt) from within a Python script?", 
    author_id: user5.id 
})

Question.create!({
    title: "What's the difference between using 'let' and 'var'?", 
    body: "ECMAScript 6 introduced the let statement.
I've heard it that it's described as a 'local' variable, but I'm still not quite sure how it behaves differently than the var keyword.
What are the differences? When should let be used over var?", 
    author_id: user5.id 
})

Question.create!({
    title: "Create GUID / UUID in JavaScript?", 
    body: "I'm trying to create globally-unique identifiers in JavaScript. I'm not sure what routines are available on all browsers, how 'random' and seeded the built-in random number generator is, etc..
The GUID / UUID should be at least 32 characters and should stay in the ASCII range to avoid trouble when passing them around.", 
    author_id: user6.id 
})

Question.create!({
    title: "How do I sort a dictionary by value?", 
    body: "I have a dictionary of values read from two fields in a database: a string field and a numeric field. The string field is unique, so that is the key of the dictionary.
I can sort on the keys, but how can I sort based on the values? Note: I have read Stack Overflow question here How do I sort a list of dictionaries by a value of the dictionary? and probably could change my code to have a list of dictionaries, but since I do not really need a list of dictionaries I wanted to know if there is a simpler solution to sort either in ascending or descending order.", 
    author_id: user7.id 
})

Question.create!({
    title: "How do I remove a submodule?", 
    body: "How do I remove a Git submodule?

By the way, is there a reason I can't simply do  git submodule rm whatever ?", 
    author_id: user7.id 
})

Question.create!({
    title: "grep a file, but show several surrounding lines?", 
    body: "I would like to grep for a string, but also show the preceding five lines and the following five lines as well as the matched line. How would I be able to do this?", 
    author_id: user7.id 
})