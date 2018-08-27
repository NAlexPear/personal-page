module Model exposing (Model)

import Browser exposing (Document)
import Browser.Navigation exposing (Key)
import Screens exposing (Screen)
import Url exposing (Url)


type alias Model =
    { url : Url
    , key : Key
    , title : String
    , screen : Screen
    }
