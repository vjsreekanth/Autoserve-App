# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "123"
TYPES = ['Car', 'Truck']

Appointment.delete_all()
ServiceOffer.delete_all()
ServiceRequest.delete_all()
Vehicle.delete_all()
User.delete_all()

super_user = User.create(
    first_name: "Jon",
    last_name: "Snow",
    email: "js@winterfell.gov",
    phone: "+17787896666",
    password: PASSWORD,
    is_admin: true,
    is_mechanic: true,
  )
  
  10.times do |x|
    User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.email,
      password: PASSWORD,
      phone: Faker::PhoneNumber.cell_phone,
    
    )
  end
  
  users = User.all

  10.times do |x|
    Vehicle.create({
      vehicle_type: TYPES.sample,
      make: Faker::Vehicle.make,
      model: Faker::Vehicle.model,
      trim: Faker::Vehicle.style,
      year: Faker::Vehicle.year,
      vin: Faker::Vehicle.vin,
      customer: users.sample,
      })
    end
    vehicles = Vehicle.all

      10.times do |x|
      ServiceRequest.create({
        title: Faker::Marketing.buzzwords,
        description: Faker::Hacker.say_something_smart,
        appointment_date: Faker::Time.between(from: DateTime.now + 1, to: DateTime.now + 6, format: :default),
        customer: users.sample,
        vehicle: vehicles.sample,
        })

      end
     service_requests = ServiceRequest.all

     10.times do |x|
      ServiceOffer.create({
        comment: Faker::Marketing.buzzwords,
        estimate_price: Faker::Number.decimal(l_digits: 3, r_digits: 2),
        start_date: Faker::Time.between(from: DateTime.now + 1, to: DateTime.now + 6, format: :default),
        delivery_date: Faker::Time.between(from: DateTime.now + 7, to: DateTime.now + 14, format: :default),
        mechanic: users.sample,
        service_request: service_requests.sample
        })

      end
     service_offers = ServiceOffer.all

     20.times do |x|
      Appointment.create({
        
        start_time: Faker::Time.between(from: DateTime.now + 1, to: DateTime.now + 6, format: :default), #=> "Tue, 16 Oct 2018 10:48:27 AM -05:00",
        service_offer: service_offers.sample,
        customer: users.sample,
        mechanic: users.sample,
      })
    end
    appointments = Appointment.all
  
  

  puts Cowsay.say("Generated #{vehicles.count}  vehicles!", :turtle)
  puts Cowsay.say("Generated #{User.count} users", :ghostbusters)
  puts Cowsay.say("Generated #{ServiceRequest.count}  service-requests!", :bunny)
  puts Cowsay.say("Generated #{ServiceOffer.count}  service_offers!", :kitty)
  puts Cowsay.say("Sign in with #{super_user.email} and password: #{PASSWORD}", :cow)
  puts Cowsay.say("Generated #{Appointment.count}  appointments!", :kitty)