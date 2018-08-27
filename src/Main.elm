module Main exposing (main)

import Browser exposing (UrlRequest, application)
import Browser.Navigation exposing (Key)
import Model exposing (Model)
import Msg exposing (Msg)
import Screens exposing (mapScreen)
import Update exposing (update)
import Url exposing (Url)
import View exposing (view)


init : () -> Url -> Key -> ( Model, Cmd Msg )
init _ url key =
    ( Model url key "Alex Pearson's Personal Page" <| mapScreen url
    , Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main =
    application
        { init = init
        , onUrlChange = Msg.UrlChange
        , onUrlRequest = Msg.LinkClicked
        , update = update
        , subscriptions = subscriptions
        , view = view
        }
