class Account::BusinessHour < ActiveRecord::Base
  extend Enumerize
  extend ActiveModel::Naming

  enumerize :day, in: %w(mon tue wed thu fri sat sun)
  belongs_to :user,class_name: 'Account::User'


  def self.hello
    puts "hello"
    p self
  end
end
