class Api::VotesController < ApplicationController
    def create 
        @vote = Vote.new(vote_params)
        if @vote.save 
            render "/api/questions/show"
        else
            render json: @vote.errors.full_messages 
        end
    end

    def destroy 
        @vote = Vote.find(params[:id])

        if @vote.destroy 
            render :show 
        else
            render json: @vote.errors.full_messages, status: 422 
        end
    end

    private 
    def vote_params 
        params.require(:vote).permit(:value, :user_id, :voteable_id, :voteable_type)
    end
end
