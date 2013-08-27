# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :job_basis, :class => 'Job::Base' do
    name "MyString"
    ancestry "MyString"
  end
end
