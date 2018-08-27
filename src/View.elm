module View exposing (view)

import Browser exposing (Document)
import Html exposing (..)
import Html.Attributes
    exposing
        ( class
        , href
        , id
        , src
        )
import Model exposing (Model)
import Msg exposing (Msg)
import Screens exposing (Screen(..))


type alias Content =
    List (Html Msg)


shell : Content -> Content
shell content =
    [ div [ id "header" ]
        [ img [ src "https://res.cloudinary.com/dfcybzffo/image/upload/v1535320013/alexpear.com/alexsmilin.jpg" ] []
        , h3 [] [ text "educator" ]
        , h3 [] [ text "problem solver" ]
        , h3 [] [ text "software developer" ]
        , h1 [] [ text "Alex Pearson" ]
        , ul []
            [ li [] [ a [ href "/" ] [ text "Home" ] ]
            , li [] [ a [ href "/résumé" ] [ text "Résumé" ] ]
            , li [] [ a [ href "/contact" ] [ text "Contact" ] ]
            ]
        ]
    , div [ id "content" ] content
    , div [ id "footer" ]
        [ span [] [ text "AlexPear, LLC." ]
        , a [ href "https://github.com/nalexpear" ]
            [ text "GitHub"
            , i [ class "fab fa-github" ] []
            ]
        , a [ href "https://linkedin.com/in/nalexpearson" ]
            [ text "LinkedIn"
            , i [ class "fab fa-linkedin" ] []
            ]
        , a [ href "https://twitter.com/nalexpearson" ]
            [ text "Twitter"
            , i [ class "fab fa-twitter" ] []
            ]
        ]
    ]


loading : Content
loading =
    [ i [ class "fas fa-spinner fa-4x fa-spin fa-fw" ] [] ]


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
