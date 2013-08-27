# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :account_skill, :class => 'Account::Skill' do
    user nil
    expertise nil
  end
end
