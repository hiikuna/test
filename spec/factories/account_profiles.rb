# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :account_profile, :class => 'Account::Profile' do
    user nil
    zip_code "MyString"
    lat ""
    lng ""
    first_name "MyString"
    last_name "MyString"
    email "MyString"
    phone_number "MyString"
    mon_start "2013-08-25 00:54:16"
    mon_end "2013-08-25 00:54:16"
    wed_start "2013-08-25 00:54:16"
    wed_end "2013-08-25 00:54:16"
    thu_start "2013-08-25 00:54:16"
    thu_end "2013-08-25 00:54:16"
    fri_start "2013-08-25 00:54:16"
    fri_end "2013-08-25 00:54:16"
    sat_start "2013-08-25 00:54:16"
    sat_end "2013-08-25 00:54:16"
    sun_start "2013-08-25 00:54:16"
    sun_end "2013-08-25 00:54:16"
  end
end
