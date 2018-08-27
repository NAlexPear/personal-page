module Update exposing (update)

import Browser
import Browser.Navigation exposing (load, pushUrl)
import Model exposing (Model)
import Msg exposing (Msg(..))
import Screens exposing (mapScreen)
import Url exposing (Url)


changeContent : Model -> Url -> Model
changeContent model url =
    { model
        | url = url
        , screen = mapScreen url
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Noop ->
            ( model, Cmd.none )

        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, pushUrl model.key <| Url.toString url )

                Browser.External url ->
                    ( model, load url )

        UrlChange url ->
            ( changeContent model url
            , Cmd.none
            )
