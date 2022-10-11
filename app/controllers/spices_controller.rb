class SpicesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #GET /spices
    def index
      spices=Spice.all
      render json: spices
    end

    #POST /spices
    def create
      spices=Spice.create(spice_params)
      render json: spices,status: :created
    end

    #PATCH/spices/:id
    def update
      spices=find_spice
      spices.update(spice_params)
      render json: spices
    end

    #DELETE/spices/:id
    def destroy
      spices=find_spice
      spices.destroy
      head :no_content
    end

  private

  def find_spice
    Spice.find(params[:id])
  end

  def spice_params
    params.permit(:title,:image,:description,:notes,:rating)
  end

  def render_not_found_response
    render json: {error:"Spice not found!"},status: :not_found
  end
end
