class Api::QuestionsController < ApplicationController
    impressionist actions: [:index, :show]
    
    def index 
        @questions = Question.all
        @questions.each do |question|
            question.vote_count = question.get_vote_count 
            question.answer_count = question.answers.count 
            question.view_count = question.impressionist_count
        end
    end

    def create 
        @question = Question.new(question_params)
        if @question.save 
            render :show 
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def update 
        @question = Question.find(params[:id])
        if @question.update_attributes(question_params)
            render :show 
        else
            render json: @question.errors.full_messages, status: 422 
        end
    end

    def show 
        @question = Question.find(params[:id])
        @question.vote_count = @question.get_vote_count
        @question.view_count = @question.impressionist_count  
    end

    def destroy 
        @question = Question.find(params[:id])
        
        if @question.destroy 
            render :show 
        else
            render json: @question.errors.full_messages, status: 422 
        end
    end

    private 
    def question_params 
        params.require(:question).permit(:title, :body, :author_id)
    end
end
