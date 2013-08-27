# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :account_expertise, :class => 'Account::Expertise' do
    user nil
    expertise nil
  end
end
