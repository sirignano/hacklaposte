require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get acceuil" do
    get :acceuil
    assert_response :success
  end

  test "should get nouveau_trajet" do
    get :nouveau_trajet
    assert_response :success
  end

  test "should get mes_trajets" do
    get :mes_trajets
    assert_response :success
  end

end
