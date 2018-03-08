class TestJob < ApplicationJob
  def perform
    Rails.logger.info "BOOBS"
  end
end