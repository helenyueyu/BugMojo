class Api::AnswersController < ApplicationController
    def index
        @question = Question.all.find_by({id: params[:question_id]})
        @answers = @question.answers 
    end

    def create 
        @answer = Answer.new(answer_params)
        if @answer.save 
            render :show
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def destroy 
        @answer = Answer.all.find_by(question_id: params[:question_id], author_id: answer_params[:author_id])

        if @answer.destroy 
            render :show 
        else
            render json: @answer.errors.full_messages, status: 422 
        end
    end

    private 
    def answer_params
        params.require(:answer).permit(:body, :author_id, :question_id)
    end
end
