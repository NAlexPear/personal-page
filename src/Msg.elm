module Msg exposing (Msg(..))

import Browser exposing (UrlRequest)
import Url exposing (Url)


type Msg
    = Noop
    | LinkClicked UrlRequest
    | UrlChange Url
