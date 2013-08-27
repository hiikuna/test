module Account

  class BusinessHoursController < ApplicationController

    def edit
      @business_hour_form = BusinessHourWeekly.new(@user.business_hours)
    end

    def update
      @business_hour_weekly = BusinessHourWeekly.new(@user.business_hours)
      
      if @business_hour_weekly.update_attributes(availability_params)
        redirect_to edit_setting_business_hour_path
      else 
        exit
      end
    end

    def show
    end

    private
    def availability_params
      params.require(:account_business_hour_weekly).permit(
        :mon => [:start_at,:end_at],
        :tue => [:start_at,:end_at],
        :wed => [:start_at,:end_at],
        :thu => [:start_at,:end_at],
        :fri => [:start_at,:end_at],
        :sat => [:start_at,:end_at],
        :sun => [:start_at,:end_at]
      )
    end

  end
end
