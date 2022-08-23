class CountriesController < ApplicationController
  def index
    @countries = Country.all
  end

  def show
    @country = Country.find(params[:id])
    respond_to do |format|
      format.html
      format.json
    end
  end
end
