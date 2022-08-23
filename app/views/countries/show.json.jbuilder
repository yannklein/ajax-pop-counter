json.extract! @country, :id, :name, :pop_growth, :flag, :created_at, :updated_at, :population
json.url country_url(@country, format: :json)
