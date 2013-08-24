module Account
  class ProfilesController < ApplicationController

    def edit
    end

    def update
      if @user.profile_update_attributes(account_profile_params)
        redirect_to edit_setting_profile_path
      else 
        exit
      end
    end

    def show
    end


    private
    def account_profile_params
      params.require(:account_profile).permit(:first_name ,:last_name ,:email ,:phone_number )
    end
  end
end
