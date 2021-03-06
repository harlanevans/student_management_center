# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def create_school_course_students
@first_namesFT = ["Tom", "Ed", "Charles"]
1.times do 
  @school = School.create(
    name: 'U of U',
    )

    School.create(
      name: "UNLV"
    )

  @course1 = Course.create(
    title: 'Full Time Spring 2020',
    school_id: @school.id
  )

  Student.create(
    first_name: "John",
    last_name: "Smith",
    technical: 3,
    effort: 3, 
    social: 3, 
    times_helped: 0,  
      course_id: @course1.id
  )
  Student.create(
    first_name: "Katy",
    last_name: "Perry",
    technical: 3,
    effort: 3, 
    social: 3, 
    times_helped: 0,  
      course_id: @course1.id
  )
  @course2 = Course.create(
    title: 'Part Time Spring 2020',
    school_id: @school.id
    )
    
      Student.create(
        first_name: "Bob",
        last_name: "Dylan",
        technical: 3,
        effort: 3, 
        social: 3, 
        times_helped: 0,  
        course_id: @course2.id
        )
      Student.create(
        first_name: "Ryan",
        last_name: "Gosling",
        technical: 3,
        effort: 3, 
        social: 3, 
        times_helped: 0,  
        course_id: @course2.id
        )
        puts "Schools, Courses, and students Seeded"
  end
end

def create_users
    1.times do

    User.create(
      email: "harlan.evans@devpointlabs.com",
      password: 'DevPoint',
    )
    User.create(
      email: "will@devpointlabs.com",
      password: 'DevPoint',
      name: "Will"
    )
    User.create(
      email: "nick.ristagno@devpointstudios.com",
      password: 'DevPoint',
      name: "Nick"
    )
    User.create(
      email: "scott.christensen@devpointlabs.com",
      password: 'DevPoint',
      name: "DC"
    )
    User.create(
      email: "derek@devpointlabs.com",
      password: 'DevPoint',
      name: "Derek"
    )
    User.create(
      email: "james.yeates@devpointlabs.com",
      password: 'DevPoint',
      name: "James"
    )
    User.create(
      email: "contact@devpointlabs.com",
      password: 'DevPoint',
      name: "Admin"
    )
    User.create(
      email: "marc.price@devpointlabs.com",
      password: 'DevPoint',
      name: "Marc"
    )
    User.create(
      email: "nhi@devpointlabs.com",
      password: 'DevPoint',
      name: "Nhi"
    )
    User.create(
      email: "henry@devpointlabs.com",
      password: 'DevPoint',
      name: "Henry"
    )

      puts "Users Seeded"
    end
  end

 create_users
create_school_course_students