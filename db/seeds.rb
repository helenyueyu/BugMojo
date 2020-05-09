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
Answer.delete_all
Vote.delete_all  

#############
### USERS ###
#############

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

user8 = User.create!({
    username: 'ronil', 
    email: 'ronil@aa.io', 
    password: 'strokesFan25'
})

user9 = User.create!({
    username: 'angela', 
    email: 'angela@aa.io', 
    password: 'angliaFord88'
})


#################
### QUESTIONS ###
#################

question1 = Question.create!({
    title: 'How do I delete a Git branch?', 
    body: 'What should I do differently to successfully delete the remotes/origin/bugfix branch both locally and remotely?', 
    author_id: user1.id
})

question2 = Question.create!({
    title: 'How do I undo the most recent local commits in Git?', 
    body: "I accidentally committed the wrong files to Git, but I haven't pushed the commit to the server  yet. How can I undo those commits from the local repository?", 
    author_id: user2.id 
})

question3 = Question.create!({
    title: "What is the difference between 'git pull' and 'git fetch'?", 
    body: "What are the differences between git pull and git fetch?", 
    author_id: user3.id 
})

question4 = Question.create!({
    title: "How to vertically align text inside a flexbox?", 
    body: "I would like to use flex box to vertically align some content inside an <li> but not having great success.
I've checked online and many of the tutorials actually use a wrapper div which gets the align-items:center from the flex settings on the parent, but I'm wondering is it possible to cut out this additional element?
I've opted to use flex box in this instance as the list item height will be a dynamic %.", 
    author_id: user3.id 
})

question5 = Question.create!({
    title: "How do I check if an element is hidden in jQuery?", 
    body: "It is possible to toggle the visibility of an element, using the functions .hide(), .show() or .toggle().
How would you test if an element is visible or hidden?", 
    author_id: user3.id 
})

question6 = Question.create!({
    title: "Can comments be used in JSON?", 
    body: "Can I use comments inside a JSON file? If so, how?", 
    author_id: user3.id 
})

question7 = Question.create!({
    title: "How to resolve merge conflicts in Git", 
    body: "How do I resolve merge conflicts in Git?", 
    author_id: user4.id 
})

question8 = Question.create!({
    title: "Calling an external command in Python", 
    body: "How can I call an external command (as if I'd typed it at the Unix shell or Windows command prompt) from within a Python script?", 
    author_id: user5.id 
})

question9 = Question.create!({
    title: "What's the difference between using 'let' and 'var'?", 
    body: "ECMAScript 6 introduced the let statement.
I've heard it that it's described as a 'local' variable, but I'm still not quite sure how it behaves differently than the var keyword.
What are the differences? When should let be used over var?", 
    author_id: user5.id 
})

question10 = Question.create!({
    title: "Create GUID / UUID in JavaScript?", 
    body: "I'm trying to create globally-unique identifiers in JavaScript. I'm not sure what routines are available on all browsers, how 'random' and seeded the built-in random number generator is, etc..
The GUID / UUID should be at least 32 characters and should stay in the ASCII range to avoid trouble when passing them around.", 
    author_id: user6.id 
})

question11 = Question.create!({
    title: "How do I sort a dictionary by value?", 
    body: "I have a dictionary of values read from two fields in a database: a string field and a numeric field. The string field is unique, so that is the key of the dictionary.
I can sort on the keys, but how can I sort based on the values? Note: I have read Stack Overflow question here How do I sort a list of dictionaries by a value of the dictionary? and probably could change my code to have a list of dictionaries, but since I do not really need a list of dictionaries I wanted to know if there is a simpler solution to sort either in ascending or descending order.", 
    author_id: user7.id 
})

question12 = Question.create!({
    title: "How do I remove a submodule?", 
    body: "How do I remove a Git submodule?

By the way, is there a reason I can't simply do  git submodule rm whatever ?", 
    author_id: user7.id 
})

question13 = Question.create!({
    title: "grep a file, but show several surrounding lines?", 
    body: "I would like to grep for a string, but also show the preceding five lines and the following five lines as well as the matched line. How would I be able to do this?", 
    author_id: user7.id 
})


###############
### ANSWERS ###
###############

answer1 = Answer.create!({
    body: "As of Git v.1.7.0, you can delete a remote branch.", 
    author_id: user3.id, 
    question_id: question1.id 
})

answer2 = Answer.create!({
    body: "If you want more detailed explanations, see the next part...", 
    author_id: user4.id, 
    question_id: question1.id 
})

answer3 = Answer.create!({
    body: "Attempted to give an answer...", 
    author_id: user5.id, 
    question_id: question1.id 
})

answer4 = Answer.create!({
    body: "The sky is so beautiful today", 
    author_id: user6.id, 
    question_id: question2.id 
})

answer5 = Answer.create!({
    body: "I am a bit hungry right now", 
    author_id: user6.id, 
    question_id: question3.id 
})

answer6 = Answer.create!({
    body: "Sushi sounds good", 
    author_id: user7.id, 
    question_id: question4.id 
})

answer7 = Answer.create!({
    body: "Tacos sound good", 
    author_id: user1.id, 
    question_id: question4.id 
})


#############
### VOTES ###
#############

Vote.create!({
    value: 1, 
    user_id: User.find_by(email: "ronil@aa.io").id, 
    voteable_id: question1.id, 
    voteable_type: 'Question'
})

Vote.create!({
    value: 1, 
    user_id: User.find_by(email: "elliot@aa.io").id, 
    voteable_id: question1.id, 
    voteable_type: 'Question'
})

Vote.create!({
    value: 1, 
    user_id: User.find_by(email: "angela@aa.io").id, 
    voteable_id: question1.id, 
    voteable_type: 'Question'
})

Vote.create!({
    value: -1, 
    user_id: User.find_by(email: "frank@turo.com").id, 
    voteable_id: question1.id, 
    voteable_type: 'Question'
})

# we should get [3, 1]




Vote.create!({
    value: -1, 
    user_id: User.find_by(email: "angela@aa.io").id, 
    voteable_id: answer3.id, 
    voteable_type: 'Answer'
})

Vote.create!({
    value: -1, 
    user_id: User.find_by(email: "ronil@aa.io").id, 
    voteable_id: answer3.id, 
    voteable_type: 'Answer'
})

Vote.create!({
    value: 1, 
    user_id: User.find_by(email: "ronil@aa.io").id, 
    voteable_id: answer5.id, 
    voteable_type: 'Answer'
})

Vote.create!({
    value: 1, 
    user_id: User.find_by(email: "angela@aa.io").id, 
    voteable_id: answer5.id, 
    voteable_type: 'Answer'
})