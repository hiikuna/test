module Account
  class SkillsController < ApplicationController
    before_filter :set_fields,:set_user_expertises

    def set_fields
      profession = @user.profile_profession
      redirect_to edit_account_profile_path unless @user.profile_profession

      @fields = profession.children
    end

    def set_user_expertises
      @user_expertises = @user.expertises
    end
    
    def edit
    end

    def update
      @user.expertises = Job::Expertise.find( skill_params )
      if @user.save
        redirect_to edit_account_skill_path
      else 
        raise "error"
      end
    end

    def skill_params
      params.require(:account_user).permit(expertise_ids: [])[:expertise_ids].reject(&:blank?)
    end

  end
end
