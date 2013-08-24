module Account
  class AvailabilitiesController < ApplicationController
    def edit
    end

    def update
      if @user.profile_update_attributes(availability_params)
        redirect_to edit_setting_availability_path
      else 
        exit
      end
    end

    def show
    end

    private
    def availability_params
      availability = [:mon,:tue,:wed,:thu,:fri,:sat,:sun].map{|d| 
        ["#{d}_start","#{d}_end"]
      }

      params.require(:account_profile).permit(*availability)
    end

  end
end
