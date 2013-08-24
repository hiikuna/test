module Account
  class User < ActiveRecord::Base
    # Include default devise modules. Others available are:
    # :token_authenticatable, :confirmable,
    # :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
      :recoverable, :rememberable, :trackable, :validatable

    before_create :initialize_profile

    has_one :profile

    def initialize_profile
      self.build_profile
    end

    delegate :update_attributes,:full_name,:photo, :to => :profile,:prefix => true
  end
end
