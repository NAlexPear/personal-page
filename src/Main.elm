module Main exposing (main)

import Browser
import Model exposing (Model, Screen(..))
import Msg exposing (Msg)
import Update exposing (update)
import View exposing (view)


init : () -> ( Model, Cmd Msg )
init _ =
    ( Model "Alex Pearson's Personal Page" Loading
    , Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main =
    Browser.document
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }
