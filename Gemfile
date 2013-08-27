source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.0'

# Use postgresql as the database for Active Record
gem 'mysql2'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', :require => false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]


###
# tests
###

group :test do
  # 便利マッチャー集
  gem "shoulda-matchers"
end

group :development, :test do
  gem 'rspec'
  gem 'rspec-rails'
  gem 'guard-rspec'
  gem 'guard-rails'
  gem 'guard-spring'
  gem 'guard-livereload'
  gem 'factory_girl_rails'
  gem 'rb-fsevent', :require => false # if RUBY_PLATFORM =~ /darwin/i
  gem 'growl' # テスト結果をGrowlで通知する(Lion向け)
  # gem 'terminal-notifier-guard' # テスト結果を通知センターに表示する(Mountain Lion向け)
  gem 'pry-rails' # Railsコンソールの多機能版
  gem 'pry-coolline'  # pryの入力に色付け
  gem 'pry-remote' # コードに"binding.remote_pry(rspec内ではbinding.pry_remote)" => pry-remoteでpryに入れます
  gem "pry-debugger"
  gem "pry-doc"
  gem 'pry-stack_explorer'

  # simple coverage
  gem 'simplecov'
  gem 'simplecov-rcov'
end

###
# model
###
gem 'activerecord-postgres-hstore'
gem 'enumerize'
gem 'squeel'
gem 'acts-as-taggable-on'
gem 'GeoRuby'
gem 'geocoder'
gem 'acts_as_list'
gem 'mailboxer'
gem 'ancestry'
gem 'simple_form'
gem 'validates_email_format_of'
# value object
gem 'virtus'
gem 'acts_as_commentable'
gem 'thumbs_up'


###
# Authentication
###
gem 'devise'
gem 'devise_invitable',   :github => 'scambra/devise_invitable'


###
# Assets
###
gem 'underscore-rails'
gem 'rails-backbone'
gem 'formtastic-bootstrap',github: 'nickl-/formtastic-bootstrap3'
gem 'rmagick',  :require => 'RMagick'

###
# views
###
gem 'draper'
gem 'slim-rails'
gem 'slim_assets'
