module Account
  class User < ActiveRecord::Base
    # Include default devise modules. Others available are:
    # :token_authenticatable, :confirmable,
    # :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
      :recoverable, :rememberable, :trackable, :validatable

    has_one :profile,class_name: 'Account::Profile'

    has_many :business_hours ,class_name: 'Account::BusinessHour'

    before_create :initialize_profile

    before_create :initialize_businss_hours

    def initialize_businss_hours
      Account::BusinessHour.day.values.each do |day|
        self.business_hours.build(day: day)
      end
    end

    def initialize_profile
      self.build_profile
    end

    delegate :update_attributes,:full_name,:photo, :to => :profile,:prefix => true
  end
end
