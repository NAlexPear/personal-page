module View exposing (view)

import Browser exposing (Document)
import Html exposing (..)
import Html.Attributes
    exposing
        ( class
        , id
        , src
        )
import Model exposing (Model, Screen(..))
import Msg exposing (Msg)


type alias Content =
    List (Html Msg)


shell : Content -> Content
shell content =
    [ div [ id "header" ]
        [ h1 [] [ text "Alex Pearson" ]
        , img [ src "https://res.cloudinary.com/dfcybzffo/image/upload/v1535320013/alexpear.com/alexsmilin.jpg" ] []
        ]
    , div [ id "content" ] content
    , div [ id "footer" ]
        [ text "AlexPear, LLC." ]
    ]


loading : Content
loading =
    [ i [ class "fas fa-spinner fa-4x fa-spin fa-fw" ] [] ]


home : Content
home =
    [ div [ id "header" ]
        [ h1 [] [ text "Alex Pearson" ]
        , img [ src "https://res.cloudinary.com/dfcybzffo/image/upload/v1535320013/alexpear.com/alexsmilin.jpg" ] []
        ]
    ]


view : Model -> Document Msg
view { title, screen } =
    let
        default =
            { title = title
            , body = shell loading
            }
    in
    case screen of
        Loading ->
            default

        Loaded content ->
            { default | body = shell content }
