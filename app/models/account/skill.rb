module Account
  class Skill < ActiveRecord::Base
    belongs_to :user,class_name: 'Account::User'
    belongs_to :expertise,class_name: 'Job::Expertise'
  end
end
