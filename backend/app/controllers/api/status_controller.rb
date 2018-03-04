class Api::StatusController < ApplicationController
  def index
    render json: { status: "OK" }
  end
end