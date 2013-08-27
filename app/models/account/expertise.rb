class Account::Expertise < ActiveRecord::Base
  belongs_to :user
  belongs_to :expertise
end
