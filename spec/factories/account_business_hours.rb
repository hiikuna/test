# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :account_business_hour, :class => 'Account::BusinessHour' do
    day 1
    start_at "2013-08-25 23:51:41"
    end_at "2013-08-25 23:51:41"
    profile nil
  end
end
