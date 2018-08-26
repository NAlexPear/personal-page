module Main exposing (main)

import Browser
import Html exposing (Html, text)


main =
    Browser.sandbox
        { init = init
        , update = update
        , view = view
        }


type alias Model =
    String


init : Model
init =
    "Hello World"


type Msg
    = Noop


update : Msg -> Model -> Model
update msg model =
    case msg of
        Noop ->
            model


view : Model -> Html Msg
view model =
    text "Hello World!!"
