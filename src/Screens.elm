module Screens exposing (Screen(..), mapScreen)

import Html exposing (..)
import Msg exposing (Msg)
import Url exposing (Url)
import Url.Parser exposing (Parser, map, oneOf, parse, s, top)


type alias Content =
    List (Html Msg)


type Route
    = Home
    | Résumé


route : Parser (Route -> a) a
route =
    oneOf
        [ map Home top
        , map Résumé (s "r%C3%A9sum%C3%A9")
        , map Résumé (s "resume")
        ]


type Screen
    = Loading
    | Loaded Content


home : Content
home =
    [ text "Home page who dis" ]


résumé : Content
résumé =
    [ text "mah stuff" ]


mapScreen : Url -> Screen
mapScreen url =
    case parse route url of
        Just Home ->
            Loaded home

        Just Résumé ->
            Loaded résumé

        Nothing ->
            Loading
