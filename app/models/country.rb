class Country < ApplicationRecord
  def population
    time_spent = (Time.now - self.created_at).to_i * 999
    (self.pop_growth * time_spent).to_i
  end
end
