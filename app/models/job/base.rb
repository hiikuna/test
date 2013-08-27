module Job
  class Base < ActiveRecord::Base
    has_ancestry
  end
end
