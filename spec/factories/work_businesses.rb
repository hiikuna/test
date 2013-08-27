# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :work_business, :class => 'Work::Business' do
    name "MyString"
    ancestry "MyString"
  end
end
