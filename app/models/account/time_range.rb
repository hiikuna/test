module Account
  class TimeRange
    include Virtus::ValueObject
    extend ActiveModel::Naming
    include ActiveModel::Conversion
    attribute :start_at,DateTime
    attribute :end_at,DateTime
  end
end
