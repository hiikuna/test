module Account 
  class BusinessHourWeekly
    include Virtus
    extend ActiveModel::Naming
    include ActiveModel::Conversion
    include ActiveModel::Validations

    BusinessHour.day.values.each do |day|
      self.attribute day,TimeRange
    end

    def initialize(business_hours)
      @business_hours = business_hours
    end

    def update_attributes(attr)
      attr.each do |day,time_range| 
        get(day).update_attributes(time_range)
      end
    end

    def get(day)
      @business_hours.find {|hour| hour.day == day.to_s}
    end
  end
end

