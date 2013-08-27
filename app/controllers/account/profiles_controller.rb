module Account
  class ProfilesController < ApplicationController

    def edit
    end

    def update
      profile = @user.profile
      profile.attributes = account_profile_params

      if profile.update_attributes(account_profile_params)
        redirect_to edit_account_profile_path
      else 
        exit
      end
    end

    def show
    end

    private
    
    def account_profile_params
      params.require(:account_profile).permit(
        :first_name ,:last_name ,:email ,:phone_number,:profession_id
      )
    end
  end
end
