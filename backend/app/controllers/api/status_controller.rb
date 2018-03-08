class Api::StatusController < ApplicationController
  def index
    render json: { status: "OK" }
  end

  def job
    # Just an example of enqueuing an ActiveJob to the worker container.
    # perform_later will cause it to be enqueud to the worker
    # whilst perform will cause it to be executed in the current Rails process
    TestJob.perform_later
  end
end