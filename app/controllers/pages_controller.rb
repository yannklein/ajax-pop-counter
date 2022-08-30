class PagesController < ApplicationController
  def tinder
    @countries = Country.all
  end
end
