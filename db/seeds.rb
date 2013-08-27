# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Job::Base.destroy_all

lawyer = Job::Profession.create(name: 'lawyer')

field1 = Job::Field.create(:name => 'Criminal Defense',parent: lawyer)
field2 = Job::Field.create(:name => 'Family'          ,parent: lawyer)
field3 = Job::Field.create(:name => 'Employment'      ,parent: lawyer)

['Traffic violations','Sex crimes',' Court Proceedings '].map{|e| Job::Expertise.create(name: e,parent: field1)}
['Child custody','Divorce','Emancipation'].map{|e| Job::Expertise.create(name: e,parent: field2)}
['Wrongful termination','Employment contracts','Unemployment benefits'].map{|e| Job::Expertise.create(name: e,parent: field3)}
