module Model exposing (Model, Screen(..))

import Browser exposing (Document)
import Html exposing (Html)
import Msg exposing (Msg)


type Screen
    = Loading
    | Loaded (List (Html Msg))


type alias Model =
    { title : String
    , screen : Screen
    }
