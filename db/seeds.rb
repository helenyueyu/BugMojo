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

require 'faker'

User.delete_all 

# This will be the user for the demo login 
User.create!({
    username: 'guest',
    email: 'guest@email.com', 
    password: 'password'
})

# Will prepopulate 
User.create!({
    username: 'frank_the_tank', 
    email: 'frank@turo.com', 
    password: 'the_shoe_guy'
})

User.create!({
    username: 'phil_nye', 
    email: 'phil@spotify.net', 
    password: 'PrincePhillip'
})

User.create!({
    username: 'benjy', 
    email: 'ben@zoho.io', 
    password: 'slytherin'
})

User.create!({
    username: 'aditya', 
    email: 'aditya@steam.edu', 
    password: 'secret_gryffindor'
})

User.create!({
    username: 'percy', 
    email: 'percy@medium.com', 
    password: 'password'
})

User.create!({
    username: 'elliot_the_wise', 
    email: 'elliot@aa.io', 
    password: 'harold'
})


# Might use faker later on to populate more users 

# User.create!({
#     username: Faker::Internet.username(4..10),
#     password: FAker::Internet.password(6, 15), 
#     email: Faker::Internet.email
# })
