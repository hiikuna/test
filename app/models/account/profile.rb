module Account 
  class FullName
    include Virtus
    attribute :first_name,String
    attribute :last_name,String

    def to_s
      self.first_name + " "  + self.last_name
    end
  end

  class Profile < ActiveRecord::Base
    belongs_to :user,class_name: 'Account::User'

    belongs_to :profession,class_name: 'Job::Profession'

    mount_uploader :photo, PhotoUploader

    def full_name
      FullName.new(first_name: first_name,last_name: last_name)
    end

  end

end

