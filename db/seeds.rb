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
User.create!({
    username: 'guest',
    email: 'hello@bugmojo.com', 
    password: 'bugmojo7'
})

User.create!({
    username: 'frank_the_tank', 
    email: 'frank@turo.com', 
    password: '9theshoeguy'
})

User.create!({
    username: 'phil_nye', 
    email: 'phil@spotify.net', 
    password: 'PrincePhillip2'
})

User.create!({
    username: 'benjy', 
    email: 'ben@zoho.io', 
    password: 'slytherin4Lyfe'
})

User.create!({
    username: 'aditya', 
    email: 'aditya@steam.edu', 
    password: 'secretGryffindor1'
})

User.create!({
    username: 'elliot_the_wise', 
    email: 'elliot@aa.io', 
    password: 'harold44'
})





Question.create!({
    title: 'How do I delete a Git branch?', 
    body: 'What should I do differently to successfully delete the remotes/origin/bugfix branch both locally and remotely?', 
    author_id: 35
})

Question.create!({
    title: 'How do I undo the most recent local commits in Git?', 
    body: "I accidentally committed the wrong files to Git, but I haven't pushed the commit to the server  yet. How can I undo those commits from the local repository?", 
    author_id: 36
})

Question.create!({
    title: "What is the difference between 'git pull' and 'git fetch'?", 
    body: "What are the differences between git pull and git fetch?", 
    author_id: 36
})
