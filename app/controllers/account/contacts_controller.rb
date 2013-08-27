module Account
  class ContactsController < ApplicationController
    def edit
    end

    def update
      if @user.profile_update_attributes(account_profile_params)
        redirect_to edit_account_contact_path
      else 
        exit
      end
    end

    def show
    end

    private
    def account_profile_params
      params.require(:account_profile).permit(:email ,:phone_number )
    end
  end
end
