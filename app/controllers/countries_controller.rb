class CountriesController < ApplicationController
  def index
    @countries = Country.all
    respond_to do |format|
      format.html
      format.json
    end
  end
end
