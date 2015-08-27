<!doctype html>
<html lang="en" data-ng-app="app" ng-strict-di>
<head>
    <base href="/">
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="E=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
    <meta name="_token" content="{{csrf_token()}}">
    <title data-ng-bind="title"></title>
    <link rel="icon" href="{{asset('/favicon.ico')}}" type="image/x-icon">
    <link href='https://fonts.googleapis.com/css?family=Lato:700,400' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    {!! Assets::css() !!}
</head>
<body ng-controller="Layout as vm" layout="row">
@include('layouts.parts.sidenav')
<main layout="column" flex>
    @include('layouts.parts.toolbar')
    <md-content data-ng-view flex layout-padding>
    </md-content>
</main>
{!! Assets::js() !!}
</body>
</html>