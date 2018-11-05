module Screens exposing (Screen(..), mapScreen)

import Dict exposing (Dict)
import Html exposing (..)
import Html.Attributes exposing (..)
import Msg exposing (Msg)
import Url exposing (Url)
import Url.Parser exposing (Parser, map, oneOf, parse, s, top)


type alias Content =
    List (Html Msg)


type Screen
    = Loading
    | Loaded Content


type Route
    = Home
    | Contact
    | Résumé


route : Parser (Route -> a) a
route =
    oneOf
        [ map Home top
        , map Contact (s "contact")
        , map Résumé (s "r%C3%A9sum%C3%A9")
        , map Résumé (s "resume")
        ]


home : Content
home =
    [ h2 [] [ text "Hello." ]
    , h4 [] [ text "My name is Alex" ]
    , p [] [ text "I am a full stack web developer, entrepreneur, and educator. Every once in a while, I'll also write a blog post." ]
    , p [] [ text "On the tech side, I've focused primarily on web development with a number of languages, stacks, and goals. In addition to old favorites like JavaScript, Ruby, and PHP, I've also done work on the side with Rust, Elm, and Haskell." ]
    , p [] [ text "And most importantly, I do my best to teach these things to others. If you'd like help learning about web development, or if you'd like my help building interesting software, contact me through my contact form or through one of the services linked in the footer of this site." ]
    , h5 [] [ text "Thanks for visiting!" ]
    ]


contact : Content
contact =
    [ h2 [] [ text "Contact:" ]
    , Html.form [ attribute "netlify" "", name "contact", method "POST" ]
        [ input [ type_ "text", name "name", placeholder "Your Name" ] []
        , input [ type_ "email", name "email", placeholder "example@your.email.com" ] []
        , textarea [ name "message", placeholder "Your Message Here" ] []
        , button [ type_ "submit" ] [ text "Send" ]
        ]
    ]


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

        Just Contact ->
            Loaded contact

        Nothing ->
            Loading
